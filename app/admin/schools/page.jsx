"use client";

import React from "react";
import Link from "next/link";
import {
    ChevronLeft,
    Globe,
    Search,
    Filter,
    MoreVertical,
    Plus,
    Building2,
    Users,
    CheckCircle,
    Shield,
    ExternalLink,
    PieChart,
    ArrowUpRight
} from "lucide-react";

const AdminSchoolsPage = () => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const schools = [
        { id: 1, name: "Greenwood Academy", location: "Lagos, Nigeria", users: 1240, status: "Verified", plan: "Enterprise", joined: "Jan 2026", color: "text-blue-600 bg-blue-50" },
        { id: 2, name: "St. Mary High School", location: "Abuja, Nigeria", users: 850, status: "Verified", plan: "Pro", joined: "Mar 2026", color: "text-indigo-600 bg-indigo-50" },
        { id: 3, name: "Tech Institute", location: "Kano, Nigeria", users: 120, status: "Pending", plan: "Basic", joined: "Oct 2026", color: "text-amber-600 bg-amber-50" },
        { id: 4, name: "Global Excellence", location: "Ibadan, Nigeria", users: 2100, status: "Verified", plan: "Enterprise+", joined: "Dec 2025", color: "text-purple-600 bg-purple-50" },
    ].filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.location.toLowerCase().includes(searchTerm.toLowerCase()));

    const metrics = [
        { label: "Active Partners", value: "42", icon: <Building2 className="w-5 h-5" />, color: "bg-indigo-600 shadow-indigo-200" },
        { label: "Total Students", value: "18,450", icon: <Users className="w-5 h-5" />, color: "bg-blue-600 shadow-blue-200" },
        { label: "License Utilization", value: "94%", icon: <PieChart className="w-5 h-5" />, color: "bg-emerald-600 shadow-emerald-200" },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/admin" className="p-2 text-slate-400 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Partner Schools</h1>
                            <p className="text-slate-500 font-medium text-sm">Manage institutional licenses and branding</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 transform active:scale-95">
                            <Plus className="w-5 h-5" /> New Partner
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
                {/* Metric Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {metrics.map((m, i) => (
                        <div key={i} className="bg-white p-8 rounded-[36px] border border-slate-100 shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex items-center gap-6">
                            <div className={`${m.color} w-16 h-16 rounded-[22px] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform`}>
                                {m.icon}
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{m.label}</p>
                                <h3 className="text-3xl font-black text-slate-900">{m.value}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
                    <div className="flex items-center gap-3 bg-white px-6 py-3.5 border border-slate-100 rounded-[20px] shadow-sm w-full md:w-[450px] group focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                        <Search className="w-5 h-5 text-slate-300 group-focus-within:text-indigo-500" />
                        <input
                            type="text"
                            placeholder="Search by school name, city, or license ID..."
                            className="bg-transparent text-sm outline-none w-full font-bold text-slate-700"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-100 rounded-[20px] text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
                            <Filter className="w-4 h-4" /> Advanced Filter
                        </button>
                    </div>
                </div>

                {/* Schools Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {schools.map((school) => (
                        <div key={school.id} className="bg-white rounded-[40px] border border-slate-50 shadow-sm p-8 group hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-500 flex flex-col relative overflow-hidden">
                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="flex items-center gap-5">
                                    <div className={`w-16 h-16 rounded-[24px] ${school.color} flex items-center justify-center text-3xl shadow-sm border-2 border-white`}>
                                        🏫
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${school.status === "Verified" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                                                }`}>
                                                {school.status}
                                            </span>
                                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{school.plan} Plan</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">{school.name}</h3>
                                        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium mt-1">
                                            <Globe className="w-3.5 h-3.5" /> {school.location}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-2.5 text-slate-300 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                                        <ExternalLink className="w-5 h-5" />
                                    </button>
                                    <button className="lg:hidden p-2.5 text-slate-300"><MoreVertical className="w-5 h-5" /></button>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6 mb-8 pt-8 border-t border-slate-50 relative z-10">
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Students</p>
                                    <p className="text-base font-black text-slate-900">{school.users.toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Exams Run</p>
                                    <p className="text-base font-black text-slate-900">412</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Joined</p>
                                    <p className="text-base font-black text-slate-900">{school.joined}</p>
                                </div>
                            </div>

                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50 relative z-10">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-emerald-500 fill-emerald-50" />
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">White-label Active</span>
                                </div>
                                <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-[18px] text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl group-hover:scale-105 active:scale-95">
                                    Configure Portal <ArrowUpRight className="w-3.5 h-3.5" />
                                </button>
                            </div>

                            {/* Abstract BG Decor */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {schools.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-[40px] mt-8 border border-slate-100 border-dashed">
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Building2 className="w-10 h-10 text-slate-200" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No schools found</h3>
                        <p className="text-slate-500 font-medium">No results match your current search crieteria.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminSchoolsPage;
