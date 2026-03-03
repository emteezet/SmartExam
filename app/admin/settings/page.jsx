"use client";

import React from "react";
import Link from "next/link";
import {
    ChevronLeft,
    Settings,
    Globe,
    Shield,
    Zap,
    Database,
    Palette,
    Bell,
    Save,
    RotateCcw,
    Smartphone,
    Cloud,
    Lock
} from "lucide-react";

const AdminSettingsPage = () => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-30">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/admin" className="p-2 text-slate-400 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">System Configuration</h1>
                            <p className="text-slate-500 font-medium text-sm">Global platform settings and engine overrides</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="p-2.5 text-slate-400 hover:text-indigo-600 transition-colors">
                            <RotateCcw className="w-5 h-5" />
                        </button>
                        <button className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 transform active:scale-95">
                            <Save className="w-4 h-4" /> Deploy Changes
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 md:p-10 max-w-4xl mx-auto w-full space-y-10 mb-20">
                {/* Global Preferences */}
                <section className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-10 border-b border-slate-50">
                        <h3 className="text-lg font-black text-slate-900 flex items-center gap-3 mb-10">
                            <Globe className="w-5 h-5 text-indigo-500" /> Platform Defaults
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Platform Name</label>
                                <input type="text" defaultValue="SmartExam Portal" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[22px] text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all" />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Default Timezone</label>
                                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[22px] text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all appearance-none cursor-pointer">
                                    <option>Lagos (GMT+1)</option>
                                    <option>London (GMT+0)</option>
                                    <option>New York (GMT-5)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-slate-50/50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                <Zap className="w-4 h-4 text-indigo-600" />
                            </div>
                            <span className="text-xs font-bold text-slate-500">Maintenance Mode is currently DISABLED</span>
                        </div>
                        <button className="text-xs font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors">Toggle</button>
                    </div>
                </section>

                {/* API & Data */}
                <section className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-10 border-b border-slate-50">
                        <h3 className="text-lg font-black text-slate-900 flex items-center gap-3 mb-10">
                            <Database className="w-5 h-5 text-emerald-500" /> API & Infrastructure
                        </h3>

                        <div className="space-y-8">
                            {[
                                { title: "Supabase Connection", desc: "Production database cluster status.", status: "Healthy", type: "db" },
                                { title: "Paystack Gateway", desc: "Transaction processing for subscriptions.", status: "Connected", type: "payment" },
                                { title: "Email SMTP Node", desc: "Transactional email delivery engine.", status: "Healthy", type: "mail" },
                            ].map((service, i) => (
                                <div key={i} className="flex items-center justify-between p-6 rounded-[24px] bg-slate-50 border border-slate-100 group hover:border-indigo-100 transition-all">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-12 h-12 rounded-[18px] bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-indigo-500 transition-colors">
                                            {service.type === 'db' ? <Database className="w-5 h-5" /> : service.type === 'payment' ? <Smartphone className="w-5 h-5" /> : <Cloud className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-slate-800">{service.title}</h4>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{service.desc}</p>
                                        </div>
                                    </div>
                                    <span className="px-4 py-1.5 bg-white border border-slate-100 rounded-full text-[10px] font-black text-emerald-600 uppercase tracking-widest">{service.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Security Policy */}
                <section className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-10">
                        <h3 className="text-lg font-black text-slate-900 flex items-center gap-3 mb-10">
                            <Shield className="w-5 h-5 text-rose-500" /> Security Overrides
                        </h3>

                        <div className="space-y-6">
                            {[
                                { title: "Require 2FA for Admins", status: true },
                                { title: "Allow External API Access", status: false },
                                { title: "Auto-Archive System Logs", status: true },
                                { title: "Debug Mode (Dev Only)", status: false },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0">
                                    <span className="text-sm font-bold text-slate-700">{item.title}</span>
                                    <div className={`w-12 h-6 rounded-full relative cursor-pointer shadow-inner transition-colors ${item.status ? 'bg-indigo-600' : 'bg-slate-200'}`}>
                                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all ${item.status ? 'right-1' : 'left-1'}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 bg-rose-50 border-t border-rose-100 flex items-center gap-5">
                        <div className="w-12 h-12 bg-rose-200/50 rounded-2xl flex items-center justify-center text-rose-700">
                            <Lock className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-black text-rose-900">Critical Access</p>
                            <p className="text-xs text-rose-700 font-medium">Changing these settings may affect platform stability. Ensure you have properly backed up the environment state before applying global overrides.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminSettingsPage;
