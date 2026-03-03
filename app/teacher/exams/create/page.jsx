"use client";

import React from "react";
import Link from "next/link";
import {
    ChevronLeft,
    FileText,
    ChevronRight,
    Clock,
    Settings,
    ListChecks,
    Save,
    Plus,
    Trash2,
    CheckCircle2
} from "lucide-react";

const CreateExamPage = () => {
    const [step, setStep] = React.useState(1);
    const [formData, setFormData] = React.useState({
        title: "",
        subject: "",
        duration: "60",
        passMark: "50",
        randomize: true,
        allowReview: true
    });
    const [selectedFile, setSelectedFile] = React.useState(null);
    const fileInputRef = React.useRef(null);

    const nextStep = () => setStep(s => Math.min(s + 1, 3));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-30">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/teacher/exams" className="p-2 text-slate-400 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Create New Exam</h1>
                            <p className="text-slate-500 font-medium text-sm">Step {step} of 3: {step === 1 ? 'Exam Details' : step === 2 ? 'Question Bank' : 'Final Review'}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-slate-50 text-slate-400 rounded-2xl font-bold hover:bg-slate-100 transition-all">
                            Save Draft
                        </button>
                        {step === 3 && (
                            <button className="flex items-center gap-2 px-8 py-2.5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                                Publish Exam
                            </button>
                        )}
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 md:p-10 max-w-4xl mx-auto w-full">
                {/* Stepper Progress */}
                <div className="flex items-center justify-between mb-12 px-4">
                    {[1, 2, 3].map((s) => (
                        <React.Fragment key={s}>
                            <div className={`flex items-center justify-center w-10 h-10 rounded-2xl font-black text-sm transition-all shadow-sm ${step >= s ? "bg-indigo-600 text-white" : "bg-white text-slate-300 border border-slate-100"
                                }`}>
                                {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
                            </div>
                            {s < 3 && <div className={`flex-1 h-1.5 mx-4 rounded-full ${step > s ? "bg-indigo-600" : "bg-slate-100"}`} />}
                        </React.Fragment>
                    ))}
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 md:p-12">
                    {step === 1 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Exam Title</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Mathematics Midterm"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject Category</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Science"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Duration (Minutes)</label>
                                    <div className="relative">
                                        <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input
                                            type="number"
                                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all"
                                            value={formData.duration}
                                            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pass Mark (%)</label>
                                    <input
                                        type="number"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all"
                                        value={formData.passMark}
                                        onChange={(e) => setFormData({ ...formData, passMark: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-50 space-y-6">
                                <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                                    <Settings className="w-4 h-4 text-indigo-500" /> Exam Configuration
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer hover:border-indigo-100 transition-all group">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-slate-800">Randomize Questions</span>
                                            <span className="text-[10px] text-slate-400 uppercase tracking-tighter">Shuffle order for each student</span>
                                        </div>
                                        <div className={`w-10 h-5 rounded-full relative transition-colors ${formData.randomize ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                                            <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${formData.randomize ? 'right-0.5' : 'left-0.5'}`} />
                                            <input type="checkbox" className="hidden" checked={formData.randomize} onChange={() => setFormData({ ...formData, randomize: !formData.randomize })} />
                                        </div>
                                    </label>
                                    <label className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer hover:border-indigo-100 transition-all group">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-slate-800">Instant Review</span>
                                            <span className="text-[10px] text-slate-400 uppercase tracking-tighter">Show results after submission</span>
                                        </div>
                                        <div className={`w-10 h-5 rounded-full relative transition-colors ${formData.allowReview ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                                            <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${formData.allowReview ? 'right-0.5' : 'left-0.5'}`} />
                                            <input type="checkbox" className="hidden" checked={formData.allowReview} onChange={() => setFormData({ ...formData, allowReview: !formData.allowReview })} />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                                    <ListChecks className="w-5 h-5 text-indigo-500" /> Exam Questions
                                </h3>
                                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all">
                                    <Plus className="w-4 h-4" /> Add Question
                                </button>
                            </div>

                            <div className="space-y-4">
                                {[1, 2].map((i) => (
                                    <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 group relative">
                                        <div className="flex items-start justify-between mb-4">
                                            <span className="px-3 py-1 bg-white rounded-lg text-[10px] font-black text-indigo-600 shadow-sm">QUESTION {i}</span>
                                            <button className="p-2 text-slate-300 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <p className="text-sm font-bold text-slate-800 mb-6 px-2">
                                            {i === 1 ? "What is the primary purpose of the 'useEffect' hook in React?" : "Explain the concept of closures in JavaScript with an example."}
                                        </p>
                                        <div className="grid grid-cols-2 gap-3">
                                            {["A", "B", "C", "D"].map(opt => (
                                                <div key={opt} className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all ${opt === 'A' ? 'bg-white border-indigo-200 text-indigo-600' : 'bg-white/50 border-slate-100 text-slate-400'}`}>
                                                    {opt}. Option text placeholder
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 border-2 border-dashed border-slate-100 rounded-[32px] flex flex-col items-center justify-center text-center group hover:border-indigo-100 transition-all">
                                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-50 transition-colors">
                                    <FileText className="w-6 h-6 text-slate-200 group-hover:text-indigo-400" />
                                </div>
                                <h4 className="text-sm font-bold text-slate-800 mb-1">Bulk Import Questions</h4>
                                <p className="text-xs text-slate-400 mb-6">Upload a CSV or JSON file to add multiple questions at once.</p>

                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept=".csv,.json"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            setSelectedFile(file.name);
                                            // Mock processing
                                            console.log("Processing file:", file.name);
                                        }
                                    }}
                                />

                                {selectedFile ? (
                                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                                        <CheckCircle2 className="w-4 h-4" /> {selectedFile}
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm active:scale-95"
                                    >
                                        Select File
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="bg-indigo-600 rounded-[32px] p-8 text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <span className="text-[10px] font-black text-indigo-200 uppercase tracking-widest mb-2 block">READY TO PUBLISH</span>
                                    <h3 className="text-3xl font-black mb-1">{formData.title || "Untitled Exam"}</h3>
                                    <p className="text-indigo-100 font-medium opacity-80">{formData.subject || "No Category"} • {formData.duration} Minutes • 20 Questions</p>
                                </div>
                                <CheckCircle2 className="absolute -bottom-6 -right-6 w-32 h-32 text-white/10 -rotate-12" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Security Settings</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                                            <span>Tab Switching Detection</span>
                                            <span className="text-emerald-500">ENABLED</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                                            <span>Full Screen Mode</span>
                                            <span className="text-emerald-500">ENABLED</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Visibility</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                                            <span>Target Class</span>
                                            <span>SS3 Science A</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                                            <span>Schedule</span>
                                            <span>No Schedule - Instant</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-amber-50 rounded-[32px] border border-amber-100 flex items-center gap-4">
                                <div className="w-10 h-10 bg-amber-200/50 rounded-xl flex items-center justify-center text-amber-700">
                                    <Settings className="w-5 h-5" />
                                </div>
                                <p className="text-[10px] font-bold text-amber-900 leading-relaxed uppercase tracking-tighter">Please review all questions and timing before publishing. You won't be able to edit the exam once a student starts the test.</p>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between">
                        <button
                            onClick={prevStep}
                            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${step === 1 ? "invisible" : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                                }`}
                        >
                            <ChevronLeft className="w-4 h-4" /> Back
                        </button>
                        {step < 3 ? (
                            <button
                                onClick={nextStep}
                                className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-100"
                            >
                                Continue <ChevronRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <button className="flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-[22px] font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-indigo-900/40">
                                Publish to Students
                            </button>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CreateExamPage;
