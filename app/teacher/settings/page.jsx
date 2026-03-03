"use client";

import React from "react";
import Link from "next/link";
import {
    ChevronLeft,
    User,
    Lock,
    Bell,
    Shield,
    Eye,
    EyeOff,
    Camera,
    Save,
    Trash2,
    Globe,
    Zap,
    BarChart2
} from "lucide-react";

const TeacherSettingsPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-30">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/teacher" className="p-2 text-slate-400 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Teacher Settings</h1>
                            <p className="text-slate-500 font-medium text-sm">Manage your profile and classroom preferences</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 transform active:scale-95">
                        <Save className="w-4 h-4" /> Save Changes
                    </button>
                </div>
            </header>

            <main className="flex-1 p-6 md:p-10 max-w-4xl mx-auto w-full space-y-10 mb-20">
                {/* Profile Section */}
                <section className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-8 md:p-10 border-b border-slate-50">
                        <h3 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-8">
                            <User className="w-5 h-5 text-indigo-500" /> Public Profile
                        </h3>

                        <div className="flex flex-col md:flex-row gap-10 items-start">
                            <div className="relative group cursor-pointer">
                                <div className="w-32 h-32 rounded-[40px] bg-slate-100 border-4 border-white shadow-xl flex items-center justify-center text-3xl font-black text-slate-400 overflow-hidden ring-4 ring-slate-50">
                                    AM
                                </div>
                                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 rounded-[40px] transition-all flex items-center justify-center backdrop-blur-sm">
                                    <Camera className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input type="text" defaultValue="Aliyu Musa" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-900 outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all shadow-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Title</label>
                                    <input type="text" defaultValue="Senior Science Lead" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-900 outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all shadow-sm" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Bio</label>
                                    <textarea rows="3" defaultValue="I've been teaching Computer Science and JS for over 10 years." className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-900 outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all shadow-sm resize-none"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Security Section */}
                <section className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-8 md:p-10 border-b border-slate-50">
                        <h3 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-8">
                            <Lock className="w-5 h-5 text-rose-500" /> Security
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                <div className="flex items-center bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 text-slate-400 italic text-sm font-medium">
                                    aliyu.musa@portal.edu
                                    <Shield className="w-4 h-4 ml-auto text-emerald-500" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                                <div className="relative group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        defaultValue="bulletproofpassword"
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-900 outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all shadow-sm"
                                    />
                                    <button
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-slate-50/50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                                <Shield className="w-4 h-4 text-emerald-600" />
                            </div>
                            <span className="text-xs font-bold text-slate-500">Two-Factor Authentication is Enabled</span>
                        </div>
                        <button className="text-xs font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors">Manage Auth</button>
                    </div>
                </section>

                {/* Notifications & Preferences */}
                <section className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-8 md:p-10">
                        <h3 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-10">
                            <Zap className="w-5 h-5 text-amber-500" /> Preferences
                        </h3>

                        <div className="space-y-8">
                            {[
                                { title: "Exam Result Alerts", desc: "Get notified when a student completes an exam.", icon: <Bell className="w-5 h-5" />, status: true },
                                { title: "Weekly Class Analytics", desc: "Receive a performance report every Monday.", icon: <BarChart2 className="w-5 h-5" />, status: true },
                                { title: "High Contrast Mode", desc: "Optimize UI for higher accessibility.", icon: <Globe className="w-5 h-5" />, status: false },
                            ].map((pref, i) => (
                                <div key={i} className="flex items-center justify-between group">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600 transition-all">
                                            {pref.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-slate-800 mb-1">{pref.title}</h4>
                                            <p className="text-[10px] font-bold text-slate-400 leading-relaxed uppercase tracking-tighter">{pref.desc}</p>
                                        </div>
                                    </div>
                                    <div className={`w-12 h-6 rounded-full relative cursor-pointer shadow-inner transition-colors ${pref.status ? 'bg-indigo-600' : 'bg-slate-200'}`}>
                                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all ${pref.status ? 'right-1' : 'left-1'}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Account Deletion */}
                <div className="flex flex-col items-center pt-10">
                    <button className="flex items-center gap-2 px-8 py-3 bg-white border border-rose-100 text-rose-500 rounded-2xl font-black text-sm hover:bg-rose-50 transition-all transform active:scale-95 shadow-sm">
                        <Trash2 className="w-4 h-4" /> Deactivate Account
                    </button>
                    <p className="mt-4 text-[10px] font-bold text-slate-300 uppercase tracking-widest text-center">Caution: All data will be permanently removed.</p>
                </div>
            </main>
        </div>
    );
};

export default TeacherSettingsPage;
