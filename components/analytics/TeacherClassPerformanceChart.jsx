"use client";

import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";

const data = [
    { name: "JS Basics", avg: 85, color: "#4F46E5" },
    { name: "Python", avg: 62, color: "#818CF8" },
    { name: "Bio 101", avg: 78, color: "#A5B4FC" },
    { name: "History", avg: 91, color: "#4F46E5" },
    { name: "Geography", avg: 54, color: "#F87171" },
];

const TeacherClassPerformanceChart = () => {
    return (
        <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: -20,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#94A3B8", fontSize: 10, fontWeight: 700 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#94A3B8", fontSize: 10, fontWeight: 700 }}
                        domain={[0, 100]}
                    />
                    <Tooltip
                        cursor={{ fill: "#F8FAFC" }}
                        contentStyle={{
                            backgroundColor: "#1E293B",
                            border: "none",
                            borderRadius: "12px",
                            color: "#fff",
                            fontSize: "12px",
                            fontWeight: "bold",
                        }}
                        itemStyle={{ color: "#fff" }}
                        formatter={(value) => [`${value}%`, "Average Score"]}
                    />
                    <Bar
                        dataKey="avg"
                        radius={[6, 6, 0, 0]}
                        barSize={32}
                        animationDuration={1500}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.avg > 80 ? "#10B981" : entry.avg > 60 ? "#4F46E5" : "#F87171"} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TeacherClassPerformanceChart;
