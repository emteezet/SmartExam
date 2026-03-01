"use client";

import React from "react";
import Link from "next/link";
import {
    Trophy,
    BookOpen,
    Clock,
    ArrowRight,
    TrendingUp,
    Award,
    Calendar,
    ChevronRight
} from "lucide-react";
import { PRIMARY_TEXT, ACCENT_BG } from "@/components/ui/colors";

const StudentDashboard = () => {
    // Mock data for the dashboard
    const stats = [
        { label: "Exams Taken", value: "12", icon: <BookOpen className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
        { label: "Avg. Score", value: "85%", icon: <TrendingUp className="w-6 h-6" />, color: "bg-emerald-100 text-emerald-600" },
        { label: "Study Hours", value: "24h", icon: <Clock className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" },
        { label: "Certificates", value: "3", icon: <Award className="w-6 h-6" />, color: "bg-orange-100 text-orange-600" },
    ];

    const recentExams = [
        { id: 1, subject: "JavaScript", score: 90, total: 100, date: "2024-03-01", status: "Passed" },
        { id: 2, subject: "Python", score: 75, total: 100, date: "2024-02-28", status: "Passed" },
        { id: 3, subject: "Cybersecurity", score: 45, total: 100, date: "2024-02-25", status: "Failed" },
    ];

    const upcomingExams = [
        { id: 1, subject: "Biology", date: "2024-03-05", duration: "45 mins" },
        { id: 2, subject: "History", date: "2024-03-10", duration: "60 mins" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Welcome Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                    <div>
                        <h1 className={`text-3xl font-extrabold ${PRIMARY_TEXT}`}>
                            Welcome back, Student! 👋
                        </h1>
                        <p className="text-gray-500 mt-1">Here's how your learning progress looks today.</p>
                    </div>
                    <Link href="/exam">
                        <button className={`${ACCENT_BG} text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg hover:shadow-indigo-100 transform hover:-translate-y-0.5`}>
                            Take New Exam <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 transition-all hover:shadow-md">
                            <div className={`p-3 rounded-xl ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent History */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-800">Recent Exam History</h2>
                                <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">View All</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 text-gray-400 text-xs uppercase tracking-wider font-bold">
                                            <th className="px-6 py-4">Subject</th>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4">Score</th>
                                            <th className="px-6 py-4">Date</th>
                                            <th className="px-6 py-4"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {recentExams.map((exam) => (
                                            <tr key={exam.id} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                                                <td className="px-6 py-4">
                                                    <span className="font-bold text-gray-700">{exam.subject}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${exam.status === "Passed" ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
                                                        }`}>
                                                        {exam.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 font-mono font-bold text-gray-600">
                                                    {exam.score}/{exam.total}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {exam.date}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-indigo-400 transition-colors ml-auto" />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Performance Chart Placeholder */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[300px] text-center">
                            <div className="p-4 bg-indigo-50 rounded-full mb-4">
                                <TrendingUp className="w-10 h-10 text-indigo-500" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Performance Analytics</h3>
                            <p className="text-gray-500 text-sm max-w-xs">
                                Once you take more exams, you'll see a detailed graph of your progress here.
                            </p>
                            <div className="mt-8 flex gap-2 w-full max-w-md h-32 items-end justify-between px-4">
                                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                                    <div key={i} className="w-12 bg-indigo-100 rounded-t-lg transition-all hover:bg-indigo-600 cursor-help relative group" style={{ height: `${h}%` }}>
                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100">
                                            {h}%
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Upcoming Tests */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-indigo-500" /> Upcoming Tests
                            </h2>
                            <div className="space-y-4">
                                {upcomingExams.map((exam) => (
                                    <div key={exam.id} className="p-4 rounded-xl border border-dashed border-gray-200 hover:border-indigo-300 transition-colors group cursor-pointer">
                                        <h3 className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{exam.subject}</h3>
                                        <div className="flex items-center justify-between mt-2 text-xs text-gray-400 font-semibold">
                                            <span>📅 {exam.date}</span>
                                            <span>⏱️ {exam.duration}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-6 py-3 rounded-xl border-2 border-gray-100 text-gray-500 font-bold text-sm hover:bg-gray-50 transition-all">
                                View Calendar
                            </button>
                        </div>

                        {/* Achievement Badge */}
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl p-6 text-white overflow-hidden relative">
                            <div className="relative z-10">
                                <div className="bg-white/20 w-fit p-3 rounded-xl mb-4">
                                    <Trophy className="w-8 h-8 text-yellow-300" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Learning Streak</h3>
                                <p className="text-indigo-100 text-sm mb-4">You've studied for 5 days in a row. Keep it up!</p>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-yellow-400 h-full w-[70%]" />
                                </div>
                                <p className="text-[10px] mt-2 text-indigo-200 font-bold uppercase tracking-widest">70% to Weekly Goal</p>
                            </div>
                            {/* Decorative circle */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
