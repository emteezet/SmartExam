"use client";

import React from "react";
import Link from "next/link";
import {
    ChevronLeft,
    Activity,
    Terminal,
    Search,
    Filter,
    Database,
    User,
    Shield,
    AlertCircle,
    Clock,
    RefreshCcw,
    Download,
    Trash2
} from "lucide-react";

const AdminLogsPage = () => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const logs = [
        { id: 1, event: "New School Registration", user: "Admin", target: "Imperial College", time: "2 mins ago", status: "Success", type: "system", color: "text-emerald-500" },
        { id: 2, event: "Failed Login Attempt", user: "192.168.1.42", target: "System Auth", time: "15 mins ago", status: "Warning", type: "security", color: "text-amber-500" },
        { id: 3, event: "Exam Paper Generated", user: "Teacher ID: 412", target: "JS Quiz #4", time: "1 hour ago", status: "Success", type: "action", color: "text-indigo-500" },
        { id: 4, event: "Database Backup Completed", user: "Auto-System", target: "DB Server #1", time: "3 hours ago", status: "Success", type: "system", color: "text-indigo-500" },
        { id: 5, event: "System Exception", user: "Node Worker #2", target: "Payment Webhook", time: "5 hours ago", status: "Critical", type: "error", color: "text-rose-500" },
    ].filter(l => l.event.toLowerCase().includes(searchTerm.toLowerCase()) || l.target.toLowerCase().includes(searchTerm.toLowerCase()));

    const statusCounts = [
        { label: "Success", count: "842", color: "bg-emerald-500" },
        { label: "Warnings", count: "12", color: "bg-amber-500" },
        { label: "Critical", count: "3", color: "bg-rose-500" },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-mono text-sm">
            {/* Header */}
            <header className="bg-slate-900 border-b border-slate-800 px-6 py-6 sticky top-0 z-30 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/admin" className="p-2 text-slate-500 hover:bg-slate-800 hover:text-indigo-400 rounded-xl transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
                                <Terminal className="w-5 h-5 text-indigo-400" /> SYSTEM_LOGS.EXE
                            </h1>
                            <p className="text-slate-500 font-medium text-xs font-sans">Real-time platform activity and health monitoring</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-slate-300 rounded-xl font-bold hover:bg-slate-700 transition-all font-sans text-xs">
                            <RefreshCcw className="w-4 h-4" /> Live Feed
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/40 font-sans text-xs">
                            <Download className="w-4 h-4" /> Export logs
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
                {/* Status Bar */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm flex flex-col font-sans">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Events (24h)</span>
                        <span className="text-2xl font-black text-slate-900">1,250,412</span>
                    </div>
                    {statusCounts.map((s, i) => (
                        <div key={i} className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm flex items-center justify-between font-sans">
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${s.color} animate-pulse`} />
                                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{s.label}</span>
                            </div>
                            <span className="text-xl font-black text-slate-900">{s.count}</span>
                        </div>
                    ))}
                </div>

                {/* Log Console */}
                <div className="bg-slate-900 rounded-[32px] overflow-hidden border border-slate-800 shadow-2xl">
                    {/* Console Header */}
                    <div className="bg-slate-800 px-8 py-4 flex items-center justify-between border-b border-slate-700">
                        <div className="flex items-center gap-6">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-rose-500" />
                                <div className="w-3 h-3 rounded-full bg-amber-500" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                            </div>
                            <div className="flex items-center gap-3 px-4 py-1.5 bg-slate-900 rounded-lg border border-slate-700 w-64 md:w-96">
                                <Search className="w-4 h-4 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="grep search..."
                                    className="bg-transparent outline-none text-slate-300 w-full placeholder:text-slate-700"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-4 text-slate-500 uppercase tracking-tighter text-[10px] font-black">
                            <span>Status</span>
                            <span>Timestamp</span>
                        </div>
                    </div>

                    {/* Console Body */}
                    <div className="p-4 space-y-1 max-h-[600px] overflow-y-auto custom-scrollbar">
                        {logs.map((log) => (
                            <div key={log.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-slate-800/50 rounded-xl transition-all group border border-transparent hover:border-slate-800">
                                <div className="flex items-start md:items-center gap-4 flex-1">
                                    <span className={`text-[10px] font-black ${log.color} w-20`}>[{log.status}]</span>
                                    <div className="flex-1">
                                        <span className="text-indigo-400 font-bold">{log.user}@portal:~$</span>
                                        <span className="text-slate-300 ml-2">{log.event}</span>
                                        <span className="text-slate-600 ml-3 hidden md:inline-block">--- target: {log.target}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8 mt-2 md:mt-0">
                                    <div className="flex items-center gap-2 text-slate-700 text-[10px] font-black group-hover:text-slate-500">
                                        <Clock className="w-3 h-3" /> {log.time}
                                    </div>
                                    <button className="p-1.5 text-slate-700 hover:text-slate-400 opacity-0 group-hover:opacity-100 transition-all">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Console Footer */}
                    <div className="bg-slate-800/50 px-8 py-4 border-t border-slate-700 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-indigo-400">
                                <Database className="w-4 h-4" />
                                <span className="font-bold">SMARTEXAM_DB</span>
                            </div>
                            <span className="text-slate-600">CONNECTED_OK</span>
                        </div>
                        <div className="text-slate-500 font-bold">PAGE 1 OF 1,421</div>
                    </div>
                </div>

                <div className="mt-10 bg-white border border-slate-200 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 font-sans">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                            <Shield className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-black text-slate-900">Advanced Log Retention</p>
                            <p className="text-xs text-slate-500 font-medium">Auto-archiving logs older than 90 days to cloud storage.</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-2xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all">
                        Retention Policy
                    </button>
                </div>
            </main>
        </div>
    );
};

export default AdminLogsPage;
