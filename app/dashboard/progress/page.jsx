"use client";

import React, { useRef } from "react";
import {
    Download,
    Printer,
    TrendingUp,
    Trophy,
    Clock,
    BookOpen,
    ChevronLeft
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import StudentPerformanceChart from "@/components/analytics/StudentPerformanceChart";
import jsPDF from "jspdf";

const ProgressReport = () => {
    const { user, profile } = useAuth();
    const reportRef = useRef();

    const stats = [
        { label: "Overall Rank", value: "Top 5%", icon: <Trophy className="w-5 h-5 text-amber-500" /> },
        { label: "Completion Rate", value: "92%", icon: <BookOpen className="w-5 h-5 text-blue-500" /> },
        { label: "Average Score", value: "85%", icon: <TrendingUp className="w-5 h-5 text-emerald-500" /> },
    ];

    const examHistory = [
        { subject: "JavaScript", score: 90, total: 100, date: "2024-03-01", status: "Professional" },
        { subject: "Python", score: 75, total: 100, date: "2024-02-28", status: "Advanced" },
        { subject: "Geography", score: 82, total: 100, date: "2024-02-20", status: "Excellent" },
        { subject: "History", score: 68, total: 100, date: "2024-02-15", status: "Credit" },
    ];

    const downloadFullReport = () => {
        const doc = new jsPDF();
        const date = new Date().toLocaleDateString();

        doc.setTextColor(79, 70, 229);
        doc.setFontSize(22);
        doc.text("Official Student Progress Report", 105, 30, { align: "center" });

        doc.setTextColor(100);
        doc.setFontSize(12);
        doc.text(`Student Name: ${profile?.full_name || "Student"}`, 20, 50);
        doc.text(`School: SmartExam Academy`, 20, 60);
        doc.text(`Report Date: ${date}`, 20, 70);

        doc.setDrawColor(230);
        doc.line(20, 80, 190, 80);

        doc.setTextColor(50);
        doc.setFontSize(16);
        doc.text("Performance Metrics", 20, 95);
        doc.setFontSize(12);
        doc.text(`Average Score: 85%`, 20, 110);
        doc.text(`Class Standing: Top 5%`, 20, 120);
        doc.text(`Exams Completed: 12`, 20, 130);

        doc.setFontSize(16);
        doc.text("Recent Exam History", 20, 150);
        examHistory.forEach((exam, i) => {
            doc.setFontSize(11);
            doc.text(`${exam.subject}: ${exam.score}/${exam.total} (${exam.date})`, 25, 165 + (i * 10));
        });

        doc.save(`Progress_Report_${profile?.full_name || "Student"}.pdf`);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-20">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-8 py-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard" className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                            <ChevronLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Progress Report</h1>
                            <p className="text-sm text-slate-400 font-medium font-mono uppercase tracking-widest">Sponsor/Parent View</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => window.print()}
                            className="bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm"
                        >
                            <Printer className="w-5 h-5" /> Print
                        </button>
                        <button
                            onClick={downloadFullReport}
                            className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                        >
                            <Download className="w-5 h-5" /> Download PDF
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-8 mt-12 print:mt-4">
                {/* Student Info */}
                <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100 mb-10 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-32 h-32 rounded-3xl bg-indigo-600 flex items-center justify-center text-5xl font-black text-white shadow-2xl">
                            {profile?.full_name?.charAt(0) || "S"}
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-4xl font-black text-slate-900 mb-2">{profile?.full_name || "Student Name"}</h2>
                            <p className="text-slate-500 font-medium text-lg">SmartExam ID: <span className="text-indigo-600 font-mono">SE-2024-001</span></p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                                {stats.map((s, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-[20px] transition-all hover:scale-105 active:scale-95 duration-300">
                                        <div className="p-2 bg-white rounded-xl shadow-sm">{s.icon}</div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.label}</p>
                                            <p className="text-xl font-black text-slate-900">{s.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Performance Chart */}
                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Growth Trend</h3>
                            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full uppercase">+12% vs last month</span>
                        </div>
                        <StudentPerformanceChart />
                    </div>

                    {/* Detailed History */}
                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-10">Subject Performance</h3>
                        <div className="space-y-6">
                            {examHistory.map((exam, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-3xl border border-slate-50 hover:border-indigo-100 transition-all group">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                            <BookOpen className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">{exam.subject}</p>
                                            <p className="text-xs text-slate-400 font-mono">{exam.date}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-black text-slate-900">{exam.score}%</p>
                                        <p className={`text-[10px] font-bold uppercase tracking-widest ${exam.score >= 80 ? "text-emerald-500" : "text-amber-500"
                                            }`}>{exam.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Section for Print */}
                <div className="mt-16 text-center text-slate-400 py-10 border-t border-slate-100 print:hidden">
                    <p className="text-sm font-medium">This report is automatically generated and verified by SmartExam Verification Engine.</p>
                </div>
            </main>
        </div>
    );
};

export default ProgressReport;
