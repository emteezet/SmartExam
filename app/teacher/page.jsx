"use client";

import React from "react";
import Link from "next/link";
import {
    Users,
    FileText,
    PlusCircle,
    BarChart2,
    Settings,
    MoreVertical,
    CheckCircle,
    AlertCircle,
    Clock,
    Search,
    Menu,
    Loader2
} from "lucide-react";
import { PRIMARY_TEXT, ACCENT_BG } from "@/components/ui/colors";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import TeacherClassPerformanceChart from "@/components/analytics/TeacherClassPerformanceChart";

const TeacherDashboard = () => {
    const { user, profile, loading, signOut } = useAuth();
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    React.useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push("/auth/login");
            } else if (profile && profile.role !== "teacher" && profile.role !== "admin") {
                // Redirect if not teacher or admin
                router.push("/dashboard");
            }
        }
    }, [user, profile, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
            </div>
        );
    }

    if (!user) return null;

    const displayName = profile?.full_name || user?.user_metadata?.full_name || "Teacher";
    const initials = displayName.split(" ").map(n => n[0]).join("").toUpperCase();
    const stats = [
        { label: "Active Students", value: "156", icon: <Users className="w-5 h-5" />, color: "bg-blue-50 text-blue-600" },
        { label: "Exams Created", value: "24", icon: <FileText className="w-5 h-5" />, color: "bg-indigo-50 text-indigo-600" },
        { label: "Avg. Class Score", value: "72%", icon: <BarChart2 className="w-5 h-5" />, color: "bg-emerald-50 text-emerald-600" },
        { label: "Pending Reviews", value: "12", icon: <AlertCircle className="w-5 h-5" />, color: "bg-amber-50 text-amber-600" },
    ];

    const myExams = [
        { id: 1, title: "JS Fundamentals Quiz", subject: "JavaScript", students: 45, avgScore: "82%", status: "Active" },
        { id: 2, title: "Python Data Types", subject: "Python", students: 38, avgScore: "65%", status: "Active" },
        { id: 3, title: "Web Security Midterms", subject: "Cybersecurity", students: 52, avgScore: "N/A", status: "Draft" },
    ];

    const recentStudentActivity = [
        { id: 1, name: "Aliyu Musa", exam: "JS Fundamentals", score: "9/10", time: "2 mins ago" },
        { id: 2, name: "Blessing Okoro", exam: "JS Fundamentals", score: "8/10", time: "15 mins ago" },
        { id: 3, name: "Chidi Azeez", exam: "Python Data Types", score: "6/10", time: "1 hour ago" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar Mobile Backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                flex flex-col p-6
            `}>
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-2">
                        <div className="bg-indigo-600 p-2 rounded-lg text-white">
                            <FileText className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold text-gray-800">CBT Portal</span>
                    </div>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden p-2 text-gray-400 hover:bg-gray-100 rounded-lg"
                    >
                        <Search className="w-5 h-5 rotate-45" />
                    </button>
                </div>

                <nav className="space-y-1 flex-1">
                    <Link href="/teacher" className="block">
                        <button className="w-full flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-xl font-bold">
                            <BarChart2 className="w-5 h-5" /> Dashboard
                        </button>
                    </Link>
                    <div className="relative group/nav">
                        <Link href="/teacher/students" className="block">
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl font-semibold transition-colors">
                                <Users className="w-5 h-5" /> Students
                            </button>
                        </Link>
                    </div>
                    <div className="relative group/nav">
                        <Link href="/teacher/exams" className="block">
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl font-semibold transition-colors">
                                <FileText className="w-5 h-5" /> My Exams
                            </button>
                        </Link>
                    </div>
                    <div className="relative group/nav">
                        <Link href="/teacher/settings" className="block">
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl font-semibold transition-colors">
                                <Settings className="w-5 h-5" /> Settings
                            </button>
                        </Link>
                    </div>
                </nav>

                <div className="bg-slate-900 rounded-2xl p-4 text-white">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Teacher Pro</p>
                    <p className="text-sm font-medium mb-3">Upgrade for AI analytics and proctoring.</p>
                    <button className="w-full py-2 bg-indigo-500 rounded-lg text-sm font-bold">Upgrade Now</button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                    <button
                        onClick={signOut}
                        className="w-full flex items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-50 rounded-xl font-bold transition-all"
                    >
                        <AlertCircle className="w-5 h-5" /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 bg-white border border-indigo-100 rounded-xl shadow-sm text-indigo-600 hover:bg-indigo-50 transition-colors"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">Teacher Dashboard</h1>
                            <p className="text-xs md:text-sm text-gray-500 mt-1">Manage exams and track student performance.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 justify-between md:justify-end w-full md:w-auto">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input type="text" placeholder="Search students..." className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-100 transition-all text-sm w-64" />
                        </div>
                        <Link href="/teacher/exams/create">
                            <button className={`${ACCENT_BG} text-white px-4 md:px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 shadow-md text-sm md:text-base`}>
                                <PlusCircle className="w-5 h-5 font-bold" /> <span className="hidden sm:inline">New Exam</span>
                            </button>
                        </Link>
                    </div>
                </header>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((s, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                            <div className={`w-fit p-2 rounded-lg ${s.color}`}>{s.icon}</div>
                            <div>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">{s.label}</p>
                                <p className="text-2xl font-bold text-gray-800">{s.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2 bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Class Performance</h2>
                                <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-widest">Average scores across subjects</p>
                            </div>
                            <button className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-tighter hover:bg-indigo-100 transition-all">
                                Detailed Report
                            </button>
                        </div>
                        <TeacherClassPerformanceChart />
                    </div>
                    <div className="bg-indigo-600 p-8 rounded-[32px] shadow-xl shadow-indigo-100 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />
                        <h3 className="text-lg font-bold mb-2">Proctoring Alerts</h3>
                        <p className="text-indigo-100 text-xs mb-8 leading-relaxed">3 students were flagged for tab switching in the last hour.</p>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl border border-white/10">
                                    <div className="w-8 h-8 rounded-full bg-rose-400/20 flex items-center justify-center text-rose-200">
                                        <AlertCircle className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] font-bold">Student {i}</p>
                                        <p className="text-[8px] text-indigo-200">2 tab switches detected</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-3 bg-white text-indigo-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-50 transition-all">
                            View Flags
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Exams List */}
                    <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                            <h2 className="font-bold text-gray-800">Assigned Exams</h2>
                            <button className="text-sm font-bold text-indigo-600">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                                    <tr>
                                        <th className="px-6 py-4">Title</th>
                                        <th className="px-6 py-4">Students</th>
                                        <th className="px-6 py-4">Avg. Score</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {myExams.map((e) => (
                                        <tr key={e.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <p className="font-bold text-gray-800">{e.title}</p>
                                                <p className="text-xs text-gray-400 font-medium">{e.subject}</p>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-600">{e.students}</td>
                                            <td className="px-6 py-4 text-sm font-bold text-emerald-600">{e.avgScore}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${e.status === "Active" ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500"
                                                    }`}>{e.status}</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400"><MoreVertical className="w-4 h-4" /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Student Activity Sidebar */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <h2 className="font-bold text-gray-800 mb-6 font-tight">Live Progress</h2>
                        <div className="space-y-6">
                            {recentStudentActivity.map((a) => (
                                <div key={a.id} className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-sm">
                                        {a.name.charAt(0)}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-gray-800">{a.name}</p>
                                        <p className="text-xs text-gray-500">Completed {a.exam}</p>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded uppercase">Score: {a.score}</span>
                                            <span className="text-[10px] text-gray-400 font-medium font-mono">{a.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-10 py-3 rounded-xl bg-slate-50 text-gray-500 font-bold text-sm hover:bg-slate-100 transition-all">
                            View Detailed Logs
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TeacherDashboard;
