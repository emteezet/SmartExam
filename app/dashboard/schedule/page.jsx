"use client";

import React from "react";
import Link from "next/link";
import {
    ChevronLeft,
    Calendar as CalendarIcon,
    Clock,
    Plus,
    MoreVertical,
    CheckCircle2,
    AlertCircle,
    ChevronRight,
    MapPin
} from "lucide-react";

const SchedulePage = () => {
    const [view, setView] = React.useState("Week");

    const days = [
        { name: "Mon", date: "12", current: false },
        { name: "Tue", date: "13", current: true },
        { name: "Wed", date: "14", current: false },
        { name: "Thu", date: "15", current: false },
        { name: "Fri", date: "16", current: false },
        { name: "Sat", date: "17", current: false },
        { name: "Sun", date: "18", current: false },
    ];

    const events = [
        {
            id: 1,
            title: "JS Fundamentals Quiz",
            time: "10:00 AM - 11:30 AM",
            type: "Exam",
            status: "Upcoming",
            course: "JavaScript Mastery",
            color: "bg-indigo-600"
        },
        {
            id: 2,
            title: "Biology Lab Report Due",
            time: "02:00 PM",
            type: "Deadline",
            status: "Urgent",
            course: "Advanced Biology",
            color: "bg-rose-500"
        },
        {
            id: 3,
            title: "Data Science Group Study",
            time: "04:30 PM - 06:00 PM",
            type: "Study",
            status: "Member",
            course: "Python for Data Science",
            color: "bg-emerald-500"
        }
    ];

    const upcomingWeek = [
        { date: "Oct 14", title: "Web Security Midterms", type: "Major Exam" },
        { date: "Oct 16", title: "Database Design project", type: "Submission" },
        { date: "Oct 19", title: "Cloud Architecture final", type: "Exam" },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-30">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard" className="p-2 text-slate-400 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Schedule</h1>
                            <p className="text-slate-500 font-medium text-sm">Stay on top of your deadlines</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center bg-slate-50 p-1 rounded-2xl border border-slate-200">
                            {["Day", "Week", "Month"].map((v) => (
                                <button
                                    key={v}
                                    onClick={() => setView(v)}
                                    className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${view === v
                                            ? "bg-white text-indigo-600 shadow-sm border border-slate-100"
                                            : "text-slate-400 hover:text-slate-600"
                                        }`}
                                >
                                    {v}
                                </button>
                            ))}
                        </div>
                        <button className="p-2.5 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Calendar View Left Column */}
                <div className="lg:col-span-2 space-y-10">
                    {/* Weekly Strip */}
                    <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-8">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-xl font-black text-slate-900">October 2026</h3>
                            <div className="flex gap-2">
                                <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl"><ChevronLeft className="w-5 h-5" /></button>
                                <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl"><ChevronRight className="w-5 h-5" /></button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-4">
                            {days.map((day) => (
                                <div key={day.name} className={`flex flex-col items-center p-4 rounded-3xl transition-all ${day.current
                                        ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-200 scale-110 z-10"
                                        : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                                    }`}>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${day.current ? "text-indigo-100" : "text-slate-400"}`}>{day.name}</span>
                                    <span className="text-xl font-black">{day.date}</span>
                                    {day.current && <div className="w-1.5 h-1.5 bg-white rounded-full mt-2" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Events */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-black text-slate-900 px-4">Today's Timeline</h3>
                        {events.map((event) => (
                            <div key={event.id} className="flex gap-6 group">
                                <div className="w-20 pt-2 text-right">
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{event.time.split(' ')[0]}</span>
                                </div>
                                <div className="relative flex-1 bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 group-hover:shadow-md transition-all group-hover:border-indigo-100 group-hover:-translate-y-1 duration-300">
                                    {/* Sidebar color tag */}
                                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 rounded-r-full ${event.color}`} />

                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${event.color}`}>
                                                    {event.type}
                                                </span>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                                    <Clock className="w-3 h-3" /> {event.time}
                                                </span>
                                            </div>
                                            <h4 className="text-lg font-black text-slate-900 mb-1">{event.title}</h4>
                                            <p className="text-xs font-bold text-slate-400">{event.course}</p>
                                        </div>
                                        <button className="text-slate-300 hover:text-slate-500"><MoreVertical className="w-5 h-5" /></button>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-50">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                                <MapPin className="w-4 h-4 text-slate-400" />
                                            </div>
                                            <span className="text-xs font-bold text-slate-500">Online Portal</span>
                                        </div>
                                        <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:tracking-[0.15em] transition-all">Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column Summary */}
                <div className="space-y-10">
                    {/* Up Next Card */}
                    <div className="bg-slate-900 rounded-[40px] p-8 text-white relative overflow-hidden group shadow-2xl shadow-indigo-900/10">
                        <div className="relative z-10">
                            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-4 block">Coming Up Next</span>
                            <h3 className="text-2xl font-black mb-1">Web Security</h3>
                            <p className="text-slate-400 font-bold mb-6 text-sm">Tomorrow at 09:15 AM</p>

                            <div className="bg-white/10 p-5 rounded-3xl backdrop-blur-md mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/50">
                                        <CalendarIcon className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-xs font-bold text-indigo-50">Midterm Examination</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">U{i}</div>
                                        ))}
                                        <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">+12</div>
                                    </div>
                                    <span className="text-[10px] font-black text-slate-400 uppercase">Joined</span>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-sm shadow-xl hover:scale-[1.02] transition-all active:scale-95">
                                Set Reminder
                            </button>
                        </div>
                        <CalendarIcon className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 -rotate-12" />
                    </div>

                    {/* Upcoming Deadlines */}
                    <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-8">
                        <h3 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-rose-500" /> Key Dates
                        </h3>
                        <div className="space-y-6">
                            {upcomingWeek.map((item, i) => (
                                <div key={i} className="flex gap-4 group cursor-pointer">
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] font-black text-slate-400 uppercase leading-none">{item.date.split(' ')[0]}</span>
                                        <span className="text-lg font-black text-slate-800">{item.date.split(' ')[1]}</span>
                                    </div>
                                    <div className="flex-1 pb-6 border-b border-slate-100 group-last:border-0 group-hover:translate-x-1 transition-transform">
                                        <h4 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h4>
                                        <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{item.type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href="/dashboard/schedule/all">
                            <button className="w-full mt-4 py-3 bg-slate-50 text-slate-400 font-bold text-xs rounded-2xl hover:bg-slate-100 transition-all">View All Events</button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SchedulePage;
