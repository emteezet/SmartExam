"use client";

import React from "react";
import {
    Shield,
    Users,
    Database,
    Globe,
    Activity,
    CreditCard,
    Settings,
    Bell,
    Search,
    PieChart,
    ArrowUpRight,
    UserCheck,
    Menu
} from "lucide-react";
import { PRIMARY_TEXT } from "@/components/ui/colors";

const AdminDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const platformStats = [
        { label: "Total Schools", value: "42", icon: <Globe className="w-5 h-5" />, trend: "+4", color: "bg-blue-600" },
        { label: "Total Users", value: "8,240", icon: <Users className="w-5 h-5" />, trend: "+12%", color: "bg-indigo-600" },
        { label: "Revenue (MTD)", value: "$12,450", icon: <CreditCard className="w-5 h-5" />, trend: "+18%", color: "bg-emerald-600" },
        { label: "Server Status", value: "99.9%", icon: <Activity className="w-5 h-5" />, trend: "Optimal", color: "bg-purple-600" },
    ];

    const recentSchools = [
        { id: 1, name: "Greenwood Academy", plan: "Enterprise", users: 1200, status: "Verified" },
        { id: 2, name: "St. Mary High", plan: "Pro", users: 450, status: "Verified" },
        { id: 3, name: "Tech Institute", plan: "Basic", users: 80, status: "Pending" },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex">
            {/* Mobile Backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-72 bg-[#0F172A] text-slate-300 flex flex-col p-6 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}>
                <div className="flex items-center justify-between mb-12 px-2">
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-500 p-2 rounded-xl text-white">
                            <Shield className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Admin Central</span>
                    </div>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden p-2 text-slate-500 hover:text-white transition-colors"
                    >
                        <Shield className="w-5 h-5 rotate-45" /> {/* Using Shield as a temporary close icon proxy if needed */}
                    </button>
                </div>

                <nav className="space-y-2 flex-1">
                    <button className="w-full flex items-center justify-between px-4 py-3 bg-white/10 text-white rounded-xl font-bold transition-all">
                        <div className="flex items-center gap-3"><Activity className="w-5 h-5" /> Overview</div>
                        <ArrowUpRight className="w-4 h-4 text-slate-500" />
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl font-semibold transition-all">
                        <Globe className="w-5 h-5" /> School Management
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl font-semibold transition-all">
                        <UserCheck className="w-5 h-5" /> Verification Requests
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl font-semibold transition-all">
                        <Database className="w-5 h-5" /> System Logs
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl font-semibold transition-all">
                        <Settings className="w-5 h-5" /> Configuration
                    </button>
                </nav>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-white">System Healthy</span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium">Backup completed: 2h ago</p>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 overflow-y-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-3 bg-white rounded-xl border border-indigo-100 text-indigo-600 shadow-sm hover:bg-indigo-50 transition-colors"
                            aria-label="Open menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Platform Insights</h1>
                            <p className="text-slate-500 font-medium mt-1">Real-time performance of your CBT network.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between md:justify-end w-full md:w-auto">
                        <button className="p-3 bg-white rounded-xl border border-slate-200 text-slate-400 hover:text-slate-600 shadow-sm relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
                        </button>
                        <div className="flex items-center gap-3 bg-white px-4 py-2 border border-slate-200 rounded-xl shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-xs">AD</div>
                            <span className="text-sm font-bold text-slate-700">Root Admin</span>
                        </div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {platformStats.map((s, idx) => (
                        <div key={idx} className="bg-white p-7 rounded-[24px] shadow-sm border border-slate-100 group transition-all hover:-translate-y-1 hover:shadow-md">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`${s.color} p-3 rounded-2xl text-white shadow-lg shadow-indigo-100`}>{s.icon}</div>
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${s.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-500'}`}>
                                    {s.trend}
                                </span>
                            </div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{s.label}</p>
                            <h3 className="text-3xl font-extrabold text-slate-900 mt-1">{s.value}</h3>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Recent Registrations */}
                    <div className="lg:col-span-2 bg-white rounded-[32px] shadow-sm border border-slate-100 p-8">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-bold text-slate-900 tracking-tight">New Partners</h2>
                            <div className="flex items-center gap-2">
                                <Search className="w-4 h-4 text-slate-300" />
                                <input type="text" placeholder="Filter..." className="text-sm outline-none bg-transparent" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            {recentSchools.map((school) => (
                                <div key={school.id} className="flex items-center justify-between p-5 rounded-3xl border border-slate-50 hover:bg-slate-50 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-2xl shadow-sm">🏫</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{school.name}</h4>
                                            <p className="text-xs text-slate-400 font-semibold">{school.users} Users • {school.plan} Plan</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${school.status === 'Verified' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                                            }`}>{school.status}</span>
                                        <button className="p-2 bg-white rounded-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                            <PieChart className="w-4 h-4 text-slate-400" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-8 py-4 border-2 border-dashed border-slate-200 rounded-3xl text-slate-400 font-bold text-sm hover:border-indigo-400 hover:text-indigo-500 transition-all">
                            Manage All Partner Schools
                        </button>
                    </div>

                    {/* Quick Actions / Integration Status */}
                    <div className="space-y-8">
                        <div className="bg-indigo-600 rounded-[32px] p-8 text-white relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4">White-Label Status</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-xs font-bold text-indigo-100">
                                        <span>Branding Progress</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                                        <div className="bg-white h-full w-[85%] rounded-full shadow-[0_0_10px_white]" />
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-white text-indigo-600 rounded-2xl font-bold text-sm shadow-xl shadow-indigo-900/20 transform group-hover:scale-105 transition-transform">
                                    Deploy to S3
                                </button>
                            </div>
                            <Shield className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 -rotate-12" />
                        </div>

                        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 p-8">
                            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-rose-500" /> System Alerts
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100">
                                    <p className="text-xs font-bold text-rose-600 mb-1 leading-none italic uppercase tracking-tighter">Database Warning</p>
                                    <p className="text-sm font-medium text-rose-900">Slow query detected on Results table (2.4s)</p>
                                </div>
                                <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                                    <p className="text-xs font-bold text-indigo-600 mb-1 leading-none italic uppercase tracking-tighter">New Registration</p>
                                    <p className="text-sm font-medium text-indigo-900">Tech Institute applied for a Demo account.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
