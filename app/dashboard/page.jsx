"use client";

import React from "react";
import Link from "next/link";
import {
    Trophy,
    BookOpen,
    Clock,
    ArrowRight,
    TrendingUp,
    Award,
    Calendar,
    ChevronRight,
    Search,
    PlusCircle,
    Activity,
    Loader2
} from "lucide-react";
import { PRIMARY_TEXT, ACCENT_BG } from "@/components/ui/colors";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import StudentPerformanceChart from "@/components/analytics/StudentPerformanceChart";

const StudentDashboard = () => {
    const { user, profile, loading, signOut } = useAuth();
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");

    React.useEffect(() => {
        if (!loading && !user) {
            router.push("/auth/login");
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
            </div>
        );
    }

    if (!user) return null;

    const displayName = profile?.full_name || user?.user_metadata?.full_name || "Student";
    const initials = displayName.split(" ").map(n => n[0]).join("").toUpperCase();

    // Mock data for the dashboard
    const stats = [
        { label: "Exams Taken", value: "12", icon: <BookOpen className="w-5 h-5" />, color: "bg-blue-100 text-blue-600", trend: "+2 this week" },
        { label: "Avg. Score", value: "85%", icon: <TrendingUp className="w-5 h-5" />, color: "bg-emerald-100 text-emerald-600", trend: "+5% increase" },
        { label: "Study Hours", value: "24h", icon: <Clock className="w-5 h-5" />, color: "bg-purple-100 text-purple-600", trend: "On track" },
        { label: "Certificates", value: "3", icon: <Award className="w-5 h-5" />, color: "bg-orange-100 text-orange-600", trend: "1 pending" },
    ];

    const recentExams = [
        { id: 1, subject: "JavaScript", score: 90, total: 100, date: "2024-03-01", status: "Passed" },
        { id: 2, subject: "Python", score: 75, total: 100, date: "2024-02-28", status: "Passed" },
        { id: 3, subject: "Cybersecurity", score: 45, total: 100, date: "2024-02-25", status: "Failed" },
    ].filter(e => e.subject.toLowerCase().includes(searchQuery.toLowerCase()));

    const upcomingExams = [
        { id: 1, subject: "Biology", date: "2024-03-05", duration: "45 mins", difficulty: "Medium" },
        { id: 2, subject: "History", date: "2024-03-10", duration: "60 mins", difficulty: "Easy" },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex">
            {/* Sidebar Mobile Backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                flex flex-col p-6
            `}>
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-2">
                        <div className="bg-indigo-600 p-2 rounded-lg text-white">
                            <Trophy className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold text-slate-800">SmartExam</span>
                    </div>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden p-2 text-slate-400 hover:bg-slate-100 rounded-lg"
                    >
                        <ChevronRight className="w-5 h-5 rotate-180" />
                    </button>
                </div>

                <nav className="space-y-1 flex-1">
                    <Link href="/dashboard" className="block">
                        <button className="w-full flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-xl font-bold transition-all">
                            <TrendingUp className="w-5 h-5" /> Dashboard
                        </button>
                    </Link>
                    <div className="relative group/nav">
                        <Link href="/dashboard/courses" className="block">
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-semibold transition-all">
                                <BookOpen className="w-5 h-5" /> My Courses
                            </button>
                        </Link>
                    </div>
                    <div className="relative group/nav">
                        <Link href="/dashboard/leaderboards" className="block">
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-semibold transition-all">
                                <Award className="w-5 h-5" /> leaderboards
                            </button>
                        </Link>
                    </div>
                    <div className="relative group/nav">
                        <Link href="/dashboard/schedule" className="block">
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-semibold transition-all">
                                <Calendar className="w-5 h-5" /> Schedule
                            </button>
                        </Link>
                    </div>
                    <div className="relative group/nav">
                        <Link href="/dashboard/progress" className="block">
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-semibold transition-all">
                                <TrendingUp className="w-5 h-5" /> Progress Report
                            </button>
                        </Link>
                    </div>
                </nav>

                <div className="bg-indigo-600 rounded-2xl p-5 text-white relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-xs font-bold text-indigo-200 uppercase tracking-widest mb-1">Weekly Goal</p>
                        <p className="text-lg font-bold mb-3">7/10 Exams</p>
                        <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-white h-full w-[70%]" />
                        </div>
                    </div>
                    <Award className="absolute -bottom-4 -right-4 w-20 h-20 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                    <button
                        onClick={signOut}
                        className="w-full flex items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-50 rounded-xl font-bold transition-all"
                    >
                        <Activity className="w-5 h-5 rotate-90" /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-30">
                    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                            <h1 className="text-xl font-bold text-slate-800 hidden sm:block">Student Dashboard</h1>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-500">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                Premium Account
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold border border-indigo-200 cursor-pointer hover:bg-indigo-200 transition-colors">
                                {initials}
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-6 md:p-10 max-w-7xl mx-auto">
                    {/* Welcome Section */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                        <div>
                            <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-2 block">CBT Portal</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                                Hello, {displayName} <span className="text-4xl">👋</span>
                            </h2>
                            <p className="text-slate-500 font-medium mt-2">You have 2 exams scheduled for this week. Good luck!</p>
                        </div>
                        <Link href="/exam">
                            <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 transform hover:-translate-y-1">
                                Start an Exam <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group hover:border-indigo-100 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-2xl ${stat.color} shadow-sm group-hover:scale-110 transition-transform`}>
                                        {stat.icon}
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.trend}</span>
                                </div>
                                <p className="text-sm font-bold text-slate-500 tracking-tight">{stat.label}</p>
                                <p className="text-3xl font-black text-slate-900 mt-1">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Recent History */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
                                <div className="p-8 border-b border-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <h2 className="text-xl font-bold text-slate-900">Recent Progress</h2>
                                    <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 border border-slate-200 rounded-xl">
                                        <Search className="w-4 h-4 text-slate-400" />
                                        <input
                                            type="text"
                                            placeholder="Filter exams..."
                                            className="bg-transparent text-sm outline-none w-32"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                                <th className="px-8 py-5">Subject</th>
                                                <th className="px-8 py-5">Status</th>
                                                <th className="px-8 py-5">Performance</th>
                                                <th className="px-8 py-5 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {recentExams.map((exam) => (
                                                <tr
                                                    key={exam.id}
                                                    className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                                                    onClick={() => window.location.href = `/dashboard/result/${exam.id}`}
                                                >
                                                    <td className="px-8 py-6">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-xl">
                                                                {exam.subject === 'JavaScript' ? '📜' : exam.subject === 'Python' ? '🐍' : '🛡️'}
                                                            </div>
                                                            <div>
                                                                <p className="font-bold text-slate-900 leading-none mb-1">{exam.subject}</p>
                                                                <p className="text-[10px] text-slate-400 font-bold uppercase">{exam.date}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${exam.status === "Passed" ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
                                                            }`}>
                                                            {exam.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex-1 bg-slate-100 h-2 rounded-full min-w-[100px] overflow-hidden">
                                                                <div
                                                                    className={`h-full rounded-full ${exam.score >= 70 ? 'bg-emerald-500' : 'bg-rose-500'}`}
                                                                    style={{ width: `${(exam.score / exam.total) * 100}%` }}
                                                                />
                                                            </div>
                                                            <span className="text-sm font-bold text-slate-700">{exam.score}%</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-6 text-right">
                                                        <div className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 opacity-0 group-hover:opacity-100 group-hover:text-indigo-600 group-hover:border-indigo-100 group-hover:shadow-sm transition-all inline-block">
                                                            <ArrowRight className="w-4 h-4" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <button className="w-full py-5 text-center text-sm font-bold text-slate-400 border-t border-slate-50 hover:bg-slate-50 hover:text-indigo-600 transition-all">
                                    View Full Exam History
                                </button>
                            </div>

                            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 overflow-hidden relative">
                                <div className="flex justify-between items-center mb-10">
                                    <h2 className="text-xl font-bold text-slate-900">Performance Over Time</h2>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Score %</span>
                                        </div>
                                    </div>
                                </div>
                                <StudentPerformanceChart />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-10">
                            {/* Upcoming Tests */}
                            <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-xl font-bold text-slate-900">Upcoming</h2>
                                    <Calendar className="w-5 h-5 text-indigo-500" />
                                </div>
                                <div className="space-y-5">
                                    {upcomingExams.map((exam) => (
                                        <Link key={exam.id} href={`/exam/${exam.subject.toLowerCase()}`}>
                                            <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-900/5 transition-all group cursor-pointer">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className={`px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest ${exam.difficulty === 'Medium' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'
                                                        }`}>
                                                        {exam.difficulty}
                                                    </span>
                                                    <span className="text-[10px] font-bold text-slate-400">{exam.duration}</span>
                                                </div>
                                                <h3 className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">{exam.subject}</h3>
                                                <p className="text-xs text-slate-500 font-medium mt-1">Scheduled for {new Date(exam.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <button className="w-full mt-8 py-4 px-6 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 font-bold text-sm hover:border-indigo-200 hover:text-indigo-600 transition-all flex items-center justify-center gap-2">
                                    <PlusCircle className="w-4 h-4" /> Schedule Exam
                                </button>
                            </div>

                            {/* Help / Support Card */}
                            <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-2">Need Support?</h3>
                                    <p className="text-slate-400 text-sm mb-8 leading-relaxed">Having issues with your CBT portal or specific questions? Our team is live 24/7.</p>
                                    <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold text-sm shadow-xl shadow-slate-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                        Open Support Ticket
                                    </button>
                                </div>
                                <Activity className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 -rotate-12 group-hover:text-indigo-500/10 transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentDashboard;
