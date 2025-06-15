'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiXMark, HiCalendar, HiEnvelope, HiArrowLeft } from 'react-icons/hi2';
import Button from '../../shared/Button';
import { useEntryState } from '../EntryStateContext';
import { sendEmail } from '@/app/actions/sendEmail';

export default function ContactForm() {
	const { setContactFormVisible } = useEntryState();
	const [activeTab, setActiveTab] = useState<'meet' | 'email'>('meet');
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		message: '',
		meetingDate: '',
		meetingTime: '',
	});
	const [status, setStatus] = useState<{
		type: 'success' | 'error' | null;
		message: string;
	}>({ type: null, message: '' });
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setStatus({ type: null, message: '' });

		try {
			const result = await sendEmail({
				name: formData.name,
				email: formData.email,
				subject: 'New Contact Form Message',
				message: formData.message,
			});

			if (result.success) {
				setStatus({
					type: 'success',
					message: 'Message sent successfully! I will get back to you soon.',
				});
				setFormData({
					name: '',
					email: '',
					company: '',
					message: '',
					meetingDate: '',
					meetingTime: '',
				});
			} else {
				setStatus({
					type: 'error',
					message: result.error || 'Failed to send message. Please try again.',
				});
			}
		} catch {
			setStatus({
				type: 'error',
				message: 'An unexpected error occurred. Please try again.',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleMeetSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setStatus({ type: null, message: '' });

		try {
			const result = await sendEmail({
				name: formData.name,
				email: formData.email,
				subject: 'Meeting Request',
				message: `
Meeting Request Details:
Company: ${formData.company || 'Not specified'}
Preferred Date: ${formData.meetingDate}
Preferred Time: ${formData.meetingTime}

Project Details:
${formData.message}
				`,
			});

			if (result.success) {
				setStatus({
					type: 'success',
					message: 'Meeting request sent successfully! I will get back to you soon.',
				});
				setFormData({
					name: '',
					email: '',
					company: '',
					message: '',
					meetingDate: '',
					meetingTime: '',
				});
			} else {
				setStatus({
					type: 'error',
					message: result.error || 'Failed to send meeting request. Please try again.',
				});
			}
		} catch {
			setStatus({
				type: 'error',
				message: 'An unexpected error occurred. Please try again.',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
		>
			<motion.div
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.9, opacity: 0 }}
				className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
			>
				{/* Header */}
				<div className="flex items-center justify-between p-6 border-b border-slate-700">
					<div className="flex items-center gap-3">
						<button
							onClick={() => setContactFormVisible(false)}
							className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
						>
							<HiArrowLeft className="w-5 h-5" />
						</button>
						<h2 className="text-2xl font-bold text-white">Get In Touch</h2>
					</div>
					<button
						onClick={() => setContactFormVisible(false)}
						className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
					>
						<HiXMark className="w-5 h-5" />
					</button>
				</div>

				{/* Tabs */}
				<div className="flex border-b border-slate-700">
					<button
						onClick={() => setActiveTab('meet')}
						className={`flex-1 flex items-center justify-center gap-2 py-4 transition-colors ${
							activeTab === 'meet'
								? 'bg-gradient-to-r from-fuchsia-500 to-blue-900 text-white'
								: 'text-slate-400 hover:text-white hover:bg-slate-800'
						}`}
					>
						<HiCalendar className="w-5 h-5" />
						Schedule Meeting
					</button>
					<button
						onClick={() => setActiveTab('email')}
						className={`flex-1 flex items-center justify-center gap-2 py-4 transition-colors ${
							activeTab === 'email'
								? 'bg-gradient-to-r from-fuchsia-500 to-blue-900 text-white'
								: 'text-slate-400 hover:text-white hover:bg-slate-800'
						}`}
					>
						<HiEnvelope className="w-5 h-5" />
						Send Message
					</button>
				</div>

				{/* Content */}
				<div className="p-6 overflow-y-auto max-h-[60vh]">
					<AnimatePresence mode="wait">
						{activeTab === 'meet' ? (
							<motion.form
								key="meet"
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.3 }}
								onSubmit={handleMeetSubmit}
								className="space-y-6"
							>
								<div>
									<h3 className="text-xl font-semibold text-white mb-4">Schedule a Google Meet</h3>
									<p className="text-slate-400 mb-6">
										Let&apos;s discuss your project and see how I can help bring your vision to life.
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-slate-300 mb-2">
											Name *
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-slate-300 mb-2">
											Email *
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
											placeholder="your@email.com"
										/>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-slate-300 mb-2">
										Company
									</label>
									<input
										type="text"
										name="company"
										value={formData.company}
										onChange={handleInputChange}
										className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
										placeholder="Your company (optional)"
									/>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-slate-300 mb-2">
											Preferred Date *
										</label>
										<input
											type="date"
											name="meetingDate"
											value={formData.meetingDate}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-slate-300 mb-2">
											Preferred Time *
										</label>
										<input
											type="time"
											name="meetingTime"
											value={formData.meetingTime}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
										/>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-slate-300 mb-2">
										Project Details
									</label>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										rows={4}
										className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent resize-none"
										placeholder="Tell me about your project, goals, and any specific requirements..."
									/>
								</div>

								{status.message && (
									<div
										className={`p-4 rounded-lg ${
											status.type === 'success'
												? 'bg-green-500/10 text-green-500'
												: 'bg-red-500/10 text-red-500'
										}`}
									>
										{status.message}
									</div>
								)}

								<Button
									type="SUBMIT"
									variant="PRIMARY"
									className={`w-full py-4 text-lg font-semibold ${
										isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
									}`}
								>
									{isSubmitting ? 'Sending...' : 'Schedule Meeting'}
								</Button>
							</motion.form>
						) : (
							<motion.form
								key="email"
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.3 }}
								onSubmit={handleSubmit}
								className="space-y-6"
							>
								<div>
									<h3 className="text-xl font-semibold text-white mb-4">Send Me a Message</h3>
									<p className="text-slate-400 mb-6">
										Have a question or want to discuss a project? I&apos;d love to hear from you.
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-slate-300 mb-2">
											Name *
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-slate-300 mb-2">
											Email *
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
											placeholder="your@email.com"
										/>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-slate-300 mb-2">
										Message *
									</label>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={6}
										className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent resize-none"
										placeholder="Your message here..."
									/>
								</div>

								{status.message && (
									<div
										className={`p-4 rounded-lg ${
											status.type === 'success'
												? 'bg-green-500/10 text-green-500'
												: 'bg-red-500/10 text-red-500'
										}`}
									>
										{status.message}
									</div>
								)}

								<Button
									type="SUBMIT"
									variant="PRIMARY"
									className={`w-full py-4 text-lg font-semibold ${
										isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
									}`}
								>
									{isSubmitting ? 'Sending...' : 'Send Message'}
								</Button>
							</motion.form>
						)}
					</AnimatePresence>
				</div>
			</motion.div>
		</motion.div>
	);
}
