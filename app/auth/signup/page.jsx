"use client";

import React from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";
import { Shield, Mail, Lock, User, Briefcase, GraduationCap, AlertCircle, ArrowRight, Loader2, Check } from "lucide-react";

export default function SignupPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [fullName, setFullName] = React.useState("");
    const [role, setRole] = React.useState("student"); // Default role
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const supabase = createClient();

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Sign up with Supabase Auth
        const { data, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                    role: role,
                }
            }
        });

        if (signUpError) {
            setError(signUpError.message);
            setLoading(false);
        } else {
            // In a real app, Supabase triggers or a manual insert would 
            // populate the 'profiles' table. For now, we'll redirect.
            window.location.href = "/auth/login?signup=success";
        }
    };

    const roles = [
        { id: "student", label: "Student", icon: <GraduationCap className="w-5 h-5" />, desc: "Take exams & track results" },
        { id: "teacher", label: "Teacher", icon: <Briefcase className="w-5 h-5" />, desc: "Create exams & manage classes" },
        { id: "admin", label: "School Admin", icon: <Shield className="w-5 h-5" />, desc: "Full platform oversight" },
    ];

    return (
        <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6 relative overflow-hidden py-20">
            {/* Animated Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -ml-64 -mb-64 animate-pulse" />

            <div className="w-full max-w-xl z-10">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl">
                    <div className="flex flex-col items-center mb-10 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-6">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight">Join SmartExam</h1>
                        <p className="text-slate-400 font-medium mt-2">The next generation of Computer Based Testing</p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-8">
                        {error && (
                            <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center gap-3 text-rose-400 text-sm font-bold">
                                <AlertCircle className="w-5 h-5" /> {error}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Aliyu Musa"
                                        className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold outline-none focus:bg-white/10 focus:border-indigo-500/50 transition-all placeholder:text-slate-600"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                                    <input
                                        type="email"
                                        required
                                        placeholder="aliyu@school.edu"
                                        className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold outline-none focus:bg-white/10 focus:border-indigo-500/50 transition-all placeholder:text-slate-600"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Role Selection */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Account Type</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {roles.map((r) => (
                                    <button
                                        key={r.id}
                                        type="button"
                                        onClick={() => setRole(r.id)}
                                        className={`p-4 rounded-3xl border text-left transition-all relative overflow-hidden group ${role === r.id
                                                ? "bg-indigo-600 border-indigo-400 shadow-lg shadow-indigo-600/20"
                                                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                                            }`}
                                    >
                                        <div className={`w-10 h-10 rounded-xl mb-3 flex items-center justify-center transition-colors ${role === r.id ? "bg-white/20 text-white" : "bg-white/10 text-slate-400 group-hover:text-indigo-400"
                                            }`}>
                                            {r.icon}
                                        </div>
                                        <h4 className={`text-sm font-black transition-colors ${role === r.id ? "text-white" : "text-slate-300"}`}>{r.label}</h4>
                                        <p className={`text-[9px] font-medium leading-tight mt-1 transition-colors ${role === r.id ? "text-indigo-100" : "text-slate-500"}`}>{r.desc}</p>

                                        {role === r.id && (
                                            <div className="absolute top-3 right-3 w-5 h-5 bg-white text-indigo-600 rounded-full flex items-center justify-center animate-in zoom-in-50 duration-300">
                                                <Check className="w-3 h-3 stroke-[4]" />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Create Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                                <input
                                    type="password"
                                    required
                                    placeholder="Choose a strong password"
                                    className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold outline-none focus:bg-white/10 focus:border-indigo-500/50 transition-all placeholder:text-slate-600"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 text-white rounded-[22px] font-black text-lg shadow-2xl shadow-indigo-600/20 transform active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                        >
                            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Create My Account <ArrowRight className="w-5 h-5" /></>}
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-slate-500 text-sm font-medium">
                            Already have an account?
                            <Link href="/auth/login" className="text-indigo-400 font-bold ml-2 hover:underline decoration-2 underline-offset-4">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
