"use client";

import React, { useState } from "react";
import { PRIMARY_TEXT, ACCENT_BG, ACCENT_BG_HOVER } from "./ui/colors";

const Support = () => {
  const [activeTab, setActiveTab] = useState("faq");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click the Register button in the header and fill in your details. You'll receive a confirmation email to activate your account.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "On the Sign In page, click 'Forgot Password' and enter your email. We'll send you a reset link.",
    },
    {
      question: "Can I retake exams?",
      answer:
        "Yes, you can retake any exam multiple times. Your highest score will be recorded in your profile.",
    },
    {
      question: "How long do I have to complete an exam?",
      answer:
        "Exams have time limits that vary by test. You'll see the timer during the exam.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-standard encryption and security practices to protect your personal and exam data.",
    },
    {
      question: "How do I download my results?",
      answer:
        "After completing an exam, you can download a PDF certificate from your profile dashboard.",
    },
  ];

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      details: "support@smartexam.com",
      description: "We respond within 24 hours",
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Available 9 AM - 6 PM EST",
      description: "Chat with our support team",
    },
    {
      icon: "📱",
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Monday to Friday, 9 AM - 6 PM EST",
    },
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Implement actual form submission logic
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold ${PRIMARY_TEXT} mb-4`}>
            How Can We Help?
          </h1>
          <p className="text-xl text-gray-600">
            Find answers, contact us, or explore resources
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("faq")}
            className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
              activeTab === "faq"
                ? `${ACCENT_BG} text-white`
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
              activeTab === "contact"
                ? `${ACCENT_BG} text-white`
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            Contact Us
          </button>
          <button
            onClick={() => setActiveTab("resources")}
            className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
              activeTab === "resources"
                ? `${ACCENT_BG} text-white`
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            Resources
          </button>
        </div>

        {/* FAQ Tab */}
        {activeTab === "faq" && (
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <h3 className={`text-lg font-semibold ${PRIMARY_TEXT} mb-2`}>
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === "contact" && (
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactMethods.map((method, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="text-4xl mb-3">{method.icon}</div>
                  <h3 className={`text-lg font-semibold ${PRIMARY_TEXT} mb-2`}>
                    {method.title}
                  </h3>
                  <p className="text-gray-700 font-medium mb-1">{method.details}</p>
                  <p className="text-gray-500 text-sm">{method.description}</p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className={`text-2xl font-bold ${PRIMARY_TEXT} mb-6`}>
                Send us a Message
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full ${ACCENT_BG} ${ACCENT_BG_HOVER} text-white font-semibold py-3 rounded-lg transition duration-200 transform hover:scale-[1.02]`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className={`text-lg font-semibold ${PRIMARY_TEXT} mb-2`}>
                📚 Documentation
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides to help you get started with SmartExam.
              </p>
              <a
                href="#"
                className={`inline-block ${PRIMARY_TEXT} hover:underline font-medium`}
              >
                View Documentation →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className={`text-lg font-semibold ${PRIMARY_TEXT} mb-2`}>
                🎥 Video Tutorials
              </h3>
              <p className="text-gray-600 mb-4">
                Watch step-by-step tutorials on how to use SmartExam features.
              </p>
              <a
                href="#"
                className={`inline-block ${PRIMARY_TEXT} hover:underline font-medium`}
              >
                Watch Tutorials →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className={`text-lg font-semibold ${PRIMARY_TEXT} mb-2`}>
                🐛 Report a Bug
              </h3>
              <p className="text-gray-600 mb-4">
                Found an issue? Help us improve by reporting it.
              </p>
              <a
                href="#"
                className={`inline-block ${PRIMARY_TEXT} hover:underline font-medium`}
              >
                Report Bug →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className={`text-lg font-semibold ${PRIMARY_TEXT} mb-2`}>
                💡 Feature Requests
              </h3>
              <p className="text-gray-600 mb-4">
                Have a great idea? Let us know what features you'd like to see.
              </p>
              <a
                href="#"
                className={`inline-block ${PRIMARY_TEXT} hover:underline font-medium`}
              >
                Request Feature →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Support;
