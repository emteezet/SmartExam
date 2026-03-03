"use client";

import React from "react";
import Link from "next/link";
import {
    ChevronLeft,
    Users,
    Search,
    Filter,
    MoreVertical,
    Mail,
    Phone,
    BarChart3,
    GraduationCap,
    Download,
    UserPlus
} from "lucide-react";

const TeacherStudentsPage = () => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const students = [
        { id: 1, name: "Aliyu Musa", email: "aliyu.m@example.com", class: "SS3 Science", examsTaken: 12, avgScore: "88%", status: "Active", avatar: "AM" },
        { id: 2, name: "Blessing Okoro", email: "blessing.o@example.com", class: "SS3 Science", examsTaken: 15, avgScore: "92%", status: "Active", avatar: "BO" },
        { id: 3, name: "Chidi Azeez", email: "chidi.a@example.com", class: "SS3 Arts", examsTaken: 8, avgScore: "65%", status: "Inactive", avatar: "CA" },
        { id: 4, name: "David Mark", email: "david.m@example.com", class: "SS3 Science", examsTaken: 10, avgScore: "78%", status: "Active", avatar: "DM" },
        { id: 5, name: "Esther John", email: "esther.j@example.com", class: "SS2 General", examsTaken: 5, avgScore: "82%", status: "Active", avatar: "EJ" },
    ].filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.email.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/teacher" className="p-2 text-slate-400 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Student Management</h1>
                            <p className="text-slate-500 font-medium text-sm">Monitor and manage your classroom</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 transform active:scale-95">
                            <UserPlus className="w-5 h-5" /> Add Student
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-all">
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Students</p>
                            <h3 className="text-3xl font-black text-slate-900">156</h3>
                        </div>
                        <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                            <Users className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-all">
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Active Now</p>
                            <h3 className="text-3xl font-black text-emerald-600">42</h3>
                        </div>
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-all">
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Avg. Performance</p>
                            <h3 className="text-3xl font-black text-slate-900">78%</h3>
                        </div>
                        <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 border border-slate-200 rounded-2xl w-full md:w-96 group focus-within:border-indigo-200 transition-all">
                        <Search className="w-5 h-5 text-slate-400 group-focus-within:text-indigo-500" />
                        <input
                            type="text"
                            placeholder="Find a student by name or email..."
                            className="bg-transparent text-sm outline-none w-full font-medium"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-2xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all">
                            <Filter className="w-4 h-4" /> Filter Classes
                        </button>
                        <button className="flex-1 md:flex-none flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-2xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all">
                            <Download className="w-4 h-4" /> Export CSV
                        </button>
                    </div>
                </div>

                {/* Student Table */}
                <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                <tr>
                                    <th className="px-8 py-6">Student</th>
                                    <th className="px-8 py-6">Class</th>
                                    <th className="px-8 py-6">Performance</th>
                                    <th className="px-8 py-6">Exams</th>
                                    <th className="px-8 py-6">Status</th>
                                    <th className="px-8 py-6"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {students.map((student) => (
                                    <tr key={student.id} className="group hover:bg-slate-50/50 transition-all cursor-pointer">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center font-black text-indigo-600 group-hover:scale-110 transition-transform shadow-sm">
                                                    {student.avatar}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 leading-tight mb-1">{student.name}</h4>
                                                    <p className="text-xs text-slate-400 font-medium">{student.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2">
                                                <GraduationCap className="w-4 h-4 text-slate-300" />
                                                <span className="text-sm font-bold text-slate-700">{student.class}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden min-w-[100px]">
                                                    <div
                                                        className={`h-full rounded-full transition-all duration-1000 ${parseInt(student.avgScore) >= 80 ? "bg-emerald-500" : "bg-amber-500"
                                                            }`}
                                                        style={{ width: student.avgScore }}
                                                    />
                                                </div>
                                                <span className="text-sm font-black text-slate-900">{student.avgScore}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="text-sm font-bold text-slate-600">{student.examsTaken} tests</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${student.status === "Active" ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"
                                                }`}>
                                                {student.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="p-2.5 text-slate-300 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Empty State */}
                {students.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-[40px] mt-8 border border-slate-100 border-dashed">
                        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <Users className="w-10 h-10 text-slate-200" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No students found</h3>
                        <p className="text-slate-500 font-medium">Try matching the search term or adding a new student.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default TeacherStudentsPage;
