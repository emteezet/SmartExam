"use client";

import React from "react";
import Link from "next/link";
import {
    ChevronLeft,
    UserCheck,
    CheckCircle,
    XCircle,
    Clock,
    FileText,
    ExternalLink,
    MoreVertical,
    Building2,
    ShieldCheck,
    Search,
    AlertTriangle
} from "lucide-react";

const AdminVerificationsPage = () => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const requests = [
        { id: 1, type: "School", name: "Imperial College", contact: "Dr. Ahmed Ibrahim", date: "2 hours ago", status: "Pending", documents: ["MOU", "License"], color: "text-indigo-600 bg-indigo-50" },
        { id: 2, type: "Teacher", name: "Sarah Williams", contact: "sarah.w@edu.com", date: "5 hours ago", status: "Reviewing", documents: ["Degree", "ID"], color: "text-emerald-600 bg-emerald-50" },
        { id: 3, type: "School", name: "Lighthouse Academy", contact: "Mary Slessor", date: "Yesterday", status: "Pending", documents: ["CAC Certificate"], color: "text-indigo-600 bg-indigo-50" },
        { id: 4, type: "Upgrade", name: "Greenwood Academy", contact: "Enterprise Plan Request", date: "2 days ago", status: "Urgent", documents: ["Payment Proof"], color: "text-rose-600 bg-rose-50" },
    ].filter(r => r.name.toLowerCase().includes(searchTerm.toLowerCase()) || r.type.toLowerCase().includes(searchTerm.toLowerCase()));

    const stats = [
        { label: "New Requests", value: "14", color: "text-indigo-600" },
        { label: "Pending Review", value: "6", color: "text-amber-500" },
        { label: "High Priority", value: "2", color: "text-rose-500" },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-30">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/admin" className="p-2 text-slate-400 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Verifications</h1>
                            <p className="text-slate-500 font-medium text-sm">Vetting process for new partners and upgrades</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        {stats.map((s, i) => (
                            <div key={i} className="hidden md:flex flex-col items-end">
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{s.label}</span>
                                <span className={`text-xl font-black ${s.color}`}>{s.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full">
                {/* Search & Actions */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
                    <div className="flex items-center gap-3 bg-white px-6 py-3.5 border border-slate-100 rounded-[20px] shadow-sm w-full md:w-[400px] group focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                        <Search className="w-5 h-5 text-slate-300 group-focus-within:text-indigo-500" />
                        <input
                            type="text"
                            placeholder="Search by name or type..."
                            className="bg-transparent text-sm outline-none w-full font-bold text-slate-700"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 scrollbar-hide">
                        {["All Types", "Schools", "Teachers", "Upgrades"].map((tab) => (
                            <button
                                key={tab}
                                className={`px-6 py-2.5 rounded-full text-xs font-black transition-all whitespace-nowrap ${tab === "All Types"
                                        ? "bg-slate-900 text-white shadow-xl"
                                        : "bg-white text-slate-400 border border-slate-100 hover:border-indigo-100 hover:text-indigo-600 shadow-sm"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Requests List */}
                <div className="space-y-6">
                    {requests.map((r) => (
                        <div key={r.id} className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm group hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden">
                            {/* Priority Indicator */}
                            {r.status === "Urgent" && (
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500" />
                            )}

                            <div className="flex items-center gap-6">
                                <div className={`w-16 h-16 rounded-[22px] ${r.color} flex items-center justify-center text-2xl shadow-sm border-2 border-white group-hover:scale-105 transition-transform`}>
                                    {r.type === 'School' ? '🏫' : r.type === 'Teacher' ? '👨‍🏫' : '💎'}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${r.status === "Pending" ? "bg-indigo-100 text-indigo-600" :
                                                r.status === "Reviewing" ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
                                            }`}>
                                            {r.status}
                                        </span>
                                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {r.date}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{r.name}</h3>
                                    <p className="text-xs font-medium text-slate-400 mt-1 italic">{r.contact}</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:items-end gap-6">
                                <div className="flex -space-x-3">
                                    {r.documents.map((doc, i) => (
                                        <div key={i} className="w-10 h-10 px-2 rounded-xl bg-slate-50 border-2 border-white shadow-sm flex items-center justify-center text-[8px] font-black text-slate-400 group-hover:text-indigo-500 hover:z-20 transition-all hover:scale-110 cursor-pointer" title={doc}>
                                            <FileText className="w-4 h-4" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-xl bg-slate-900 border-2 border-white shadow-sm flex items-center justify-center text-[10px] font-black text-white cursor-pointer hover:bg-indigo-600 transition-colors">
                                        +V
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="flex items-center gap-2 px-6 py-2.5 bg-rose-50 text-rose-600 rounded-[18px] text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all shadow-sm">
                                        <XCircle className="w-4 h-4" /> Reject
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-[18px] text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 transform active:scale-95">
                                        <CheckCircle className="w-4 h-4" /> Verify Partner
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Warning Footer */}
                <div className="mt-12 bg-amber-50 rounded-[32px] p-6 border border-amber-100 flex items-center gap-5">
                    <div className="w-12 h-12 bg-amber-200/50 rounded-2xl flex items-center justify-center text-amber-700">
                        <AlertTriangle className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-bold text-amber-900">Security Requirement</p>
                        <p className="text-xs text-amber-700 font-medium leading-relaxed">Please ensure all corporate documents are cross-checked with the official registry before final verification. Verification is irreversible once license keys are generated.</p>
                    </div>
                </div>

                {/* Empty State */}
                {requests.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-[40px] mt-8 border border-slate-100">
                        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <UserCheck className="w-10 h-10 text-slate-200" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Queue is clear!</h3>
                        <p className="text-slate-500 font-medium">All pending verification requests have been handled.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminVerificationsPage;
