"use client";

import React from "react";
import Link from "next/link";
import {
    ChevronLeft,
    FileText,
    PlusCircle,
    Search,
    MoreVertical,
    Clock,
    Users,
    CheckCircle,
    AlertCircle,
    Calendar,
    Settings2,
    BarChart2,
    Copy,
    Trash2
} from "lucide-react";

const TeacherExamsPage = () => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const exams = [
        { id: 1, title: "JS Fundamentals Quiz", subject: "JavaScript", students: 45, avgScore: "82%", status: "Active", date: "Oct 12, 2026", questions: 20 },
        { id: 2, title: "Python Data Types", subject: "Python", students: 38, avgScore: "65%", status: "Active", date: "Oct 10, 2026", questions: 15 },
        { id: 3, title: "Web Security Midterms", subject: "Cybersecurity", students: 0, avgScore: "N/A", status: "Draft", date: "Oct 25, 2026", questions: 50 },
        { id: 4, title: "React State Management", subject: "React", students: 52, avgScore: "78%", status: "Archived", date: "Sep 15, 2026", questions: 25 },
    ].filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase()) || e.subject.toLowerCase().includes(searchTerm.toLowerCase()));

    const stats = [
        { label: "Active Exams", value: "8", icon: <CheckCircle className="w-5 h-5" />, color: "text-emerald-600 bg-emerald-50" },
        { label: "Total Submissions", value: "1,240", icon: <Users className="w-5 h-5" />, color: "text-indigo-600 bg-indigo-50" },
        { label: "Average Score", value: "74%", icon: <BarChart2 className="w-5 h-5" />, color: "text-amber-600 bg-amber-50" },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/teacher" className="p-2 text-slate-400 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Exam Management</h1>
                            <p className="text-slate-500 font-medium text-sm">Create and organize your assessments</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="/teacher/exams/create">
                            <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 transform active:scale-95">
                                <PlusCircle className="w-5 h-5" /> Create New Exam
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {stats.map((s, i) => (
                        <div key={i} className="bg-white px-8 py-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
                                <h3 className="text-2xl font-black text-slate-900">{s.value}</h3>
                            </div>
                            <div className={`w-12 h-12 ${s.color} rounded-2xl flex items-center justify-center`}>
                                {s.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3 bg-white px-5 py-3 border border-slate-200 rounded-2xl w-full md:w-96 group focus-within:border-indigo-200 transition-all shadow-sm">
                        <Search className="w-5 h-5 text-slate-400 group-focus-within:text-indigo-500" />
                        <input
                            type="text"
                            placeholder="Find exams by title or subject..."
                            className="bg-transparent text-sm outline-none w-full font-medium"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full md:w-auto scrollbar-hide">
                        {["All", "Active", "Draft", "Archived"].map((tab) => (
                            <button
                                key={tab}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${tab === "All"
                                    ? "bg-slate-900 text-white shadow-lg"
                                    : "bg-white text-slate-500 border border-slate-100 hover:border-indigo-100 hover:text-indigo-600"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Exam Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {exams.map((exam) => (
                        <div key={exam.id} className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 group hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-500 flex flex-col relative overflow-hidden">
                            {/* Decorative tag for Active */}
                            {exam.status === "Active" && (
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 -rotate-45 translate-x-10 -translate-y-10 group-hover:bg-emerald-500/10 transition-colors" />
                            )}

                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-indigo-50 rounded-[22px] flex items-center justify-center text-2xl shadow-sm">
                                        {exam.subject === 'JavaScript' ? '📜' : exam.subject === 'Python' ? '🐍' : '🛡️'}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${exam.status === "Active" ? "bg-emerald-100 text-emerald-600" :
                                                exam.status === "Draft" ? "bg-amber-100 text-amber-600" : "bg-slate-100 text-slate-400"
                                                }`}>
                                                {exam.status}
                                            </span>
                                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{exam.questions} Questions</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">{exam.title}</h3>
                                    </div>
                                </div>
                                <button className="p-2.5 text-slate-300 hover:text-slate-500 rounded-xl transition-all">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mb-8 pt-6 border-t border-slate-50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Students</p>
                                        <p className="text-sm font-bold text-slate-800">{exam.students}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                                        <BarChart2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg. Score</p>
                                        <p className="text-sm font-bold text-emerald-600">{exam.avgScore}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto flex items-center justify-between">
                                <div className="flex items-center gap-2 text-slate-400">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-xs font-medium italic">{exam.date}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-indigo-600 hover:bg-indigo-50 transition-all" title="Duplicate">
                                        <Copy className="w-5 h-5" />
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-50 text-indigo-700 rounded-[18px] text-xs font-black hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                                        {exam.status === "Draft" ? "Edit Draft" : "Analyze Results"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {exams.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-[40px] mt-8 border border-slate-100">
                        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <FileText className="w-10 h-10 text-slate-200" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No exams found</h3>
                        <p className="text-slate-500 font-medium">Create your first examination to get started.</p>
                        <Link href="/teacher/exams/create">
                            <button className="mt-8 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-indigo-100 hover:scale-105 active:scale-95 transition-all">
                                New Exam
                            </button>
                        </Link>
                    </div>
                )}
            </main>
        </div>
    );
};

export default TeacherExamsPage;
