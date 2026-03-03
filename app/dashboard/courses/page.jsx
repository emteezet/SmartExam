"use client";

import React from "react";
import Link from "next/link";
import {
    ChevronLeft,
    BookOpen,
    PlayCircle,
    CheckCircle2,
    Clock,
    Layers,
    Search,
    Filter,
    ArrowRight
} from "lucide-react";

const MyCoursesPage = () => {
    const [searchQuery, setSearchQuery] = React.useState("");

    const courses = [
        {
            id: 1,
            title: "JavaScript Mastery: Zero to Hero",
            instructor: "Dr. Sarah Johnson",
            progress: 85,
            lessons: 42,
            completedLessons: 36,
            image: "📜",
            category: "Programming",
            nextLesson: "Async/Await Patterns"
        },
        {
            id: 2,
            title: "Python for Data Science",
            instructor: "Prof. Michael Chen",
            progress: 45,
            lessons: 38,
            completedLessons: 17,
            image: "🐍",
            category: "Data Science",
            nextLesson: "Pandas DataFrames"
        },
        {
            id: 3,
            title: "Cybersecurity Fundamentals",
            instructor: "Elena Rodriguez",
            progress: 10,
            lessons: 25,
            completedLessons: 2,
            image: "🛡️",
            category: "Security",
            nextLesson: "Network Protocols"
        },
        {
            id: 4,
            title: "Advanced Biology & Genetics",
            instructor: "Dr. James Wilson",
            progress: 0,
            lessons: 30,
            completedLessons: 0,
            image: "🧬",
            category: "Science",
            nextLesson: "Cell Division"
        }
    ].filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard" className="p-2 text-slate-400 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">My Courses</h1>
                            <p className="text-slate-500 font-medium text-sm">Continue your learning journey</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 border border-slate-200 rounded-2xl w-full md:w-64 group focus-within:border-indigo-200 transition-all">
                            <Search className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500" />
                            <input
                                type="text"
                                placeholder="Search your courses..."
                                className="bg-transparent text-sm outline-none w-full font-medium"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="p-2.5 bg-white border border-slate-200 rounded-2xl text-slate-500 hover:text-indigo-600 hover:border-indigo-100 transition-all">
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
                {/* Categories Scroll */}
                <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-2 scrollbar-hide">
                    {["All Courses", "Programming", "Data Science", "Security", "Science", "Business"].map((cat, i) => (
                        <button
                            key={i}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${i === 0 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-white text-slate-500 border border-slate-100 hover:border-indigo-100 hover:text-indigo-600"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-500 flex flex-col">
                            {/* Course Image Wrapper */}
                            <div className="h-48 bg-slate-50 flex items-center justify-center text-6xl relative group-hover:scale-105 transition-transform duration-700">
                                {course.image}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-indigo-600 uppercase tracking-widest border border-indigo-100">
                                    {course.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                                        {course.instructor.charAt(0)}
                                    </div>
                                    <span className="text-xs font-bold text-slate-400">{course.instructor}</span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors leading-tight">
                                    {course.title}
                                </h3>

                                <div className="mt-auto space-y-6">
                                    {/* Progress */}
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                                                <Layers className="w-3 h-3" /> Progress
                                            </span>
                                            <span className="text-[10px] font-black text-indigo-600">{course.progress}%</span>
                                        </div>
                                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                            <div
                                                className="bg-indigo-600 h-full rounded-full transition-all duration-1000"
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center pt-2 border-t border-slate-50">
                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Lessons</span>
                                                <span className="text-sm font-black text-slate-900">{course.completedLessons}/{course.lessons}</span>
                                            </div>
                                        </div>

                                        <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-2xl text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all transform active:scale-95">
                                            {course.progress === 0 ? "Start" : "Continue"} <PlayCircle className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {courses.length === 0 && (
                    <div className="text-center py-20">
                        <div className="bg-white w-20 h-20 rounded-[30px] shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-6">
                            <BookOpen className="w-10 h-10 text-slate-300" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No courses found</h3>
                        <p className="text-slate-500 font-medium max-w-xs mx-auto">Try adjusting your search or filter to find what you're looking for.</p>
                        <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-indigo-100">
                            Explore Marketplace
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default MyCoursesPage;
