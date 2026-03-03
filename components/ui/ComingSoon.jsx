"use client";

import React from "react";
import Link from "next/link";
import {
    Construction,
    ArrowLeft,
    Timer,
    Bell,
    Github,
    Twitter
} from "lucide-react";

/**
 * A premium "Coming Soon" component to be used across the app
 * @param {string} title - The name of the feature
 * @param {string} description - A brief description of what's coming
 * @param {string} backLink - Navigation link to return home
 */
const ComingSoon = ({
    title = "Feature Under Construction",
    description = "We're working hard to bring you this feature. Stay tuned for updates!",
    backLink = "/dashboard"
}) => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center">
            {/* Animated Icon Container */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-indigo-200 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="relative bg-white p-8 rounded-[40px] shadow-2xl shadow-indigo-100 border border-indigo-50 transform hover:rotate-3 transition-transform duration-500">
                    <Construction className="w-20 h-20 text-indigo-600 animate-bounce" />
                </div>
                <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    In Progress
                </div>
            </div>

            {/* Text Content */}
            <div className="max-w-md">
                <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                    {title}
                </h1>
                <p className="text-slate-500 font-medium leading-relaxed mb-10">
                    {description}
                </p>

                {/* Progress Bar Mockup */}
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm mb-10">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Development Progress</span>
                        <span className="text-xs font-black text-indigo-600">65%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                        <div
                            className="bg-indigo-600 h-full rounded-full shadow-[0_0_15px_rgba(79,70,229,0.4)] transition-all duration-1000"
                            style={{ width: '65%' }}
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                    <Link href={backLink} className="w-full sm:w-auto">
                        <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 transform active:scale-95">
                            <ArrowLeft className="w-5 h-5" /> Back to Dashboard
                        </button>
                    </Link>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                        <Bell className="w-5 h-5" /> Notify Me
                    </button>
                </div>
            </div>

            {/* Social Links / Footer */}
            <div className="mt-20 flex items-center gap-6 text-slate-300">
                <Github className="w-5 h-5 hover:text-slate-400 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-slate-400 cursor-pointer transition-colors" />
                <div className="w-[1px] h-4 bg-slate-200" />
                <span className="text-xs font-bold uppercase tracking-widest">SmartExam v1.0.4-beta</span>
            </div>
        </div>
    );
};

export default ComingSoon;
