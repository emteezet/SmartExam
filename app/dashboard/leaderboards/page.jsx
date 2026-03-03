"use client";

import React from "react";
import Link from "next/link";
import {
    ChevronLeft,
    Trophy,
    Medal,
    Crown,
    TrendingUp,
    Users,
    Search,
    ChevronRight,
    Award,
    Flame
} from "lucide-react";

const LeaderboardsPage = () => {
    const timeframe = ["Weekly", "Monthly", "All Time"];
    const [activeTimeframe, setActiveTimeframe] = React.useState("Weekly");

    const topThree = [
        { id: 2, name: "Aliyu Musa", score: 9850, rank: 2, avatar: "AM", change: "up" },
        { id: 1, name: "Blessing Okoro", score: 10240, rank: 1, avatar: "BO", change: "same" },
        { id: 3, name: "Chidi Azeez", score: 9420, rank: 3, avatar: "CA", change: "down" },
    ];

    const rankingList = [
        { id: 4, name: "David Mark", score: 8900, rank: 4, avatar: "DM", streak: 5 },
        { id: 5, name: "Esther John", score: 8750, rank: 5, avatar: "EJ", streak: 12 },
        { id: 6, name: "Fatima Sani", score: 8600, rank: 6, avatar: "FS", streak: 3 },
        { id: 7, name: "George Obi", score: 8420, rank: 7, avatar: "GO", streak: 8 },
        { id: 8, name: "Hassan Lawal", score: 8200, rank: 8, avatar: "HL", streak: 2 },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-30">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard" className="p-2 text-slate-400 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Leaderboards</h1>
                            <p className="text-slate-500 font-medium text-sm">See who's leading the pack</p>
                        </div>
                    </div>

                    <div className="flex items-center bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
                        {timeframe.map((t) => (
                            <button
                                key={t}
                                onClick={() => setActiveTimeframe(t)}
                                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${activeTimeframe === t
                                        ? "bg-white text-indigo-600 shadow-sm border border-slate-100"
                                        : "text-slate-400 hover:text-slate-600"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto w-full">
                {/* Podium Section */}
                <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-20 md:h-[400px]">
                    {/* Rank 2 */}
                    <div className="order-2 md:order-1 flex flex-col items-center group w-full md:w-48">
                        <div className="relative mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-20 h-20 rounded-full bg-slate-200 border-4 border-white shadow-xl flex items-center justify-center text-xl font-black text-slate-500 overflow-hidden ring-4 ring-slate-100">
                                {topThree[0].avatar}
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-slate-500 text-white w-8 h-8 rounded-full border-4 border-white flex items-center justify-center text-[10px] font-black">2</div>
                        </div>
                        <p className="font-bold text-slate-700 mb-1">{topThree[0].name}</p>
                        <p className="text-indigo-600 font-black text-sm mb-4">{topThree[0].score.toLocaleString()} XP</p>
                        <div className="w-full h-32 bg-white rounded-t-3xl shadow-sm border-x border-t border-slate-100 flex items-center justify-center">
                            <Medal className="w-10 h-10 text-slate-300 opacity-20" />
                        </div>
                    </div>

                    {/* Rank 1 */}
                    <div className="order-1 md:order-2 flex flex-col items-center group w-full md:w-56 z-10">
                        <div className="relative mb-4 transform group-hover:-translate-y-4 transition-transform duration-500">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-amber-400 animate-bounce">
                                <Crown className="w-12 h-12 fill-amber-400" />
                            </div>
                            <div className="w-28 h-28 rounded-full bg-amber-50 border-8 border-white shadow-2xl shadow-amber-900/10 flex items-center justify-center text-3xl font-black text-amber-600 overflow-hidden ring-4 ring-amber-100">
                                {topThree[1].avatar}
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white w-10 h-10 rounded-full border-4 border-white flex items-center justify-center text-[10px] font-black">1</div>
                        </div>
                        <p className="font-black text-slate-900 mb-1 text-lg">{topThree[1].name}</p>
                        <p className="text-amber-600 font-black mb-6">{topThree[1].score.toLocaleString()} XP</p>
                        <div className="w-full h-64 bg-white rounded-t-3xl shadow-2xl shadow-indigo-900/5 border-x border-t border-amber-100 flex items-center justify-center">
                            <Trophy className="w-16 h-16 text-amber-200 opacity-30" />
                        </div>
                    </div>

                    {/* Rank 3 */}
                    <div className="order-3 flex flex-col items-center group w-full md:w-48">
                        <div className="relative mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-20 h-20 rounded-full bg-orange-50 border-4 border-white shadow-xl flex items-center justify-center text-xl font-black text-orange-600 overflow-hidden ring-4 ring-orange-100">
                                {topThree[2].avatar}
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white w-8 h-8 rounded-full border-4 border-white flex items-center justify-center text-[10px] font-black">3</div>
                        </div>
                        <p className="font-bold text-slate-700 mb-1">{topThree[2].name}</p>
                        <p className="text-orange-600 font-black text-sm mb-4">{topThree[2].score.toLocaleString()} XP</p>
                        <div className="w-full h-24 bg-white rounded-t-3xl shadow-sm border-x border-t border-slate-100 flex items-center justify-center">
                            <Award className="w-10 h-10 text-orange-200 opacity-20" />
                        </div>
                    </div>
                </div>

                {/* List Section */}
                <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-4 md:p-8 space-y-2 mb-10 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20" />

                    {rankingList.map((rank) => (
                        <div key={rank.id} className="flex items-center justify-between p-5 rounded-3xl hover:bg-slate-50 transition-all group cursor-pointer border border-transparent hover:border-slate-100">
                            <div className="flex items-center gap-6">
                                <span className="w-8 text-center text-sm font-black text-slate-300 group-hover:text-indigo-400 transition-colors">{rank.rank}</span>
                                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center font-bold text-slate-500 group-hover:scale-110 transition-transform shadow-sm bg-cover">
                                    {rank.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-indigo-600 transition-colors">{rank.name}</h4>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{rank.score.toLocaleString()} XP</span>
                                        <div className="flex items-center gap-1 text-orange-500">
                                            <Flame className="w-3 h-3 fill-orange-500" />
                                            <span className="text-[10px] font-black">{rank.streak} Day Streak</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="p-2 text-slate-200 group-hover:text-indigo-300 transition-colors">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* User Stats Card */}
                <div className="bg-slate-900 rounded-[32px] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8 mb-20 relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Your Current Standing</p>
                        <h2 className="text-3xl font-black mb-1">Ranked #14</h2>
                        <p className="text-indigo-400 font-bold mb-6">Top 5% of all students this week</p>
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Total Points</span>
                                <span className="text-xl font-black">7,420 XP</span>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">To Next Rank</span>
                                <span className="text-xl font-black text-emerald-400">180 XP</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 w-full md:w-auto">
                        <button className="w-full md:w-auto px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-900/40">
                            Boost Your Progress
                        </button>
                    </div>
                    {/* Abstract Decorations */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
                </div>
            </main>
        </div>
    );
};

export default LeaderboardsPage;
