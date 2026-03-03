"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
    ChevronLeft,
    CheckCircle,
    XCircle,
    Clock,
    Award,
    FileText,
    Download,
    Share2
} from "lucide-react";

const ResultReviewPage = () => {
    const params = useParams();
    const resultId = params.id;

    // Mock result data
    const result = {
        id: resultId,
        subject: "JavaScript Fundamentals",
        score: 90,
        total: 100,
        timeSpent: "18m 45s",
        date: "March 1, 2024",
        status: "Passed",
        grade: "A",
        questions: [
            {
                id: 1,
                text: "What is the correct syntax for referring to an external script called 'xxx.js'?",
                userAnswer: "<script src='xxx.js'>",
                correctAnswer: "<script src='xxx.js'>",
                isCorrect: true,
                explanation: "The 'src' attribute is used to specify the URL of an external script file."
            },
            {
                id: 2,
                text: "How do you write 'Hello World' in an alert box?",
                userAnswer: "msg('Hello World')",
                correctAnswer: "alert('Hello World')",
                isCorrect: false,
                explanation: "The alert() method displays an alert box with a specified message and an OK button."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold text-sm mb-8 transition-colors">
                    <ChevronLeft className="w-4 h-4" /> Back to Dashboard
                </Link>

                {/* Score Summary Card */}
                <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 p-8 md:p-12 mb-10 relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-2 block">Performance Report</span>
                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{result.subject}</h1>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-sm font-bold text-slate-600">
                                    <Calendar className="w-4 h-4 text-slate-400" /> {result.date}
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-sm font-bold text-slate-600">
                                    <Clock className="w-4 h-4 text-slate-400" /> {result.timeSpent}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="relative border-[10px] border-slate-50 rounded-full p-2">
                                <div className="w-32 h-32 rounded-full border-[10px] border-indigo-600 flex flex-col items-center justify-center bg-white shadow-xl shadow-indigo-100">
                                    <span className="text-4xl font-black text-slate-900 leading-none">{result.score}</span>
                                    <span className="text-xs font-bold text-slate-400 uppercase mt-1">out of {result.total}</span>
                                </div>
                            </div>
                            <span className={`mt-4 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest ${result.status === 'Passed' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                                }`}>
                                {result.status}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-50">
                        <div className="text-center">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Grade</p>
                            <p className="text-xl font-black text-slate-900">{result.grade}</p>
                        </div>
                        <div className="text-center border-l border-slate-50">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Rank</p>
                            <p className="text-xl font-black text-slate-900">#4/156</p>
                        </div>
                        <div className="text-center border-l border-slate-50">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Percentile</p>
                            <p className="text-xl font-black text-slate-900">92nd</p>
                        </div>
                        <div className="text-center border-l border-slate-50">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Accuracy</p>
                            <p className="text-xl font-black text-slate-900">90%</p>
                        </div>
                    </div>
                </div>

                {/* Question Breakdown */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between mb-2 px-2">
                        <h2 className="text-xl font-bold text-slate-900">Detailed Review</h2>
                        <div className="flex gap-2">
                            <button className="p-2 bg-white border border-slate-100 rounded-lg text-slate-400 hover:text-indigo-600 transition-colors">
                                <Download className="w-5 h-5" />
                            </button>
                            <button className="p-2 bg-white border border-slate-100 rounded-lg text-slate-400 hover:text-indigo-600 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {result.questions.map((q, idx) => (
                        <div key={q.id} className="bg-white rounded-[24px] shadow-sm border border-slate-100 p-6 md:p-8">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-400 border border-slate-100">
                                    {idx + 1}
                                </span>
                                <h3 className="text-lg font-bold text-slate-800 leading-tight pt-1">{q.text}</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className={`p-5 rounded-2xl border ${q.isCorrect ? 'border-emerald-100 bg-emerald-50/50' : 'border-rose-100 bg-rose-50/50'
                                    }`}>
                                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                        Your Answer {q.isCorrect ? <CheckCircle className="w-3 h-3 text-emerald-500" /> : <XCircle className="w-3 h-3 text-rose-500" />}
                                    </p>
                                    <p className={`font-bold ${q.isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>{q.userAnswer}</p>
                                </div>

                                {!q.isCorrect && (
                                    <div className="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/20">
                                        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                                            Correct Answer <CheckCircle className="w-3 h-3 text-emerald-500" />
                                        </p>
                                        <p className="font-bold text-emerald-700">{q.correctAnswer}</p>
                                    </div>
                                )}
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-50">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Explanation</p>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">{q.explanation}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Actions */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/exam" className="w-full sm:w-auto">
                        <button className="w-full px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                            Retake This Exam
                        </button>
                    </Link>
                    <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                        Print Certificate
                    </button>
                </div>
            </div>
        </div>
    );
};

// Re-using Lucide icons that might not be imported if I just copied
const Calendar = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
);

export default ResultReviewPage;
