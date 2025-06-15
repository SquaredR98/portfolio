'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
	HiArrowLeft, 
	HiArrowTopRightOnSquare, 
	HiCodeBracket, 
	HiGlobeAlt, 
	HiCog, 
	HiChartBar, 
	HiDeviceTablet,
	HiMagnifyingGlass,
	HiFunnel
} from 'react-icons/hi2';
import Link from 'next/link';

const allProjects = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description: 'A full-stack e-commerce solution with advanced features including payment integration, inventory management, and analytics dashboard.',
		image: '/api/placeholder/400/250',
		category: 'Web Development',
		technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
		link: '#',
		github: '#',
		icon: HiGlobeAlt,
		year: '2024',
		status: 'Live'
	},
	{
		id: 2,
		title: 'Business Analytics Dashboard',
		description: 'Real-time business intelligence platform providing comprehensive analytics, reporting, and data visualization capabilities.',
		image: '/api/placeholder/400/250',
		category: 'Data Analytics',
		technologies: ['Python', 'Django', 'PostgreSQL', 'Chart.js'],
		link: '#',
		github: '#',
		icon: HiChartBar,
		year: '2023',
		status: 'Live'
	},
	{
		id: 3,
		title: 'Mobile Banking App',
		description: 'Secure mobile banking application with biometric authentication, real-time transactions, and financial planning tools.',
		image: '/api/placeholder/400/250',
		category: 'Mobile Development',
		technologies: ['React Native', 'Node.js', 'Firebase', 'Stripe'],
		link: '#',
		github: '#',
		icon: HiDeviceTablet,
		year: '2023',
		status: 'Live'
	},
	{
		id: 4,
		title: 'AI-Powered Chatbot',
		description: 'Intelligent customer service chatbot with natural language processing and machine learning capabilities.',
		image: '/api/placeholder/400/250',
		category: 'AI/ML',
		technologies: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
		link: '#',
		github: '#',
		icon: HiCog,
		year: '2023',
		status: 'Development'
	},
	{
		id: 5,
		title: 'Project Management System',
		description: 'Comprehensive project management platform with task tracking, team collaboration, and resource management.',
		image: '/api/placeholder/400/250',
		category: 'Business Solutions',
		technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
		link: '#',
		github: '#',
		icon: HiCog,
		year: '2022',
		status: 'Live'
	},
	{
		id: 6,
		title: 'Digital Marketing Platform',
		description: 'All-in-one digital marketing platform with campaign management, analytics, and automation tools.',
		image: '/api/placeholder/400/250',
		category: 'Marketing Tech',
		technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
		link: '#',
		github: '#',
		icon: HiGlobeAlt,
		year: '2022',
		status: 'Live'
	},
	{
		id: 7,
		title: 'Inventory Management System',
		description: 'Enterprise-level inventory management solution with barcode scanning, real-time tracking, and reporting.',
		image: '/api/placeholder/400/250',
		category: 'Business Solutions',
		technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
		link: '#',
		github: '#',
		icon: HiCog,
		year: '2022',
		status: 'Live'
	},
	{
		id: 8,
		title: 'Real Estate CRM',
		description: 'Customer relationship management system specifically designed for real estate professionals.',
		image: '/api/placeholder/400/250',
		category: 'Business Solutions',
		technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
		link: '#',
		github: '#',
		icon: HiGlobeAlt,
		year: '2021',
		status: 'Live'
	},
	{
		id: 9,
		title: 'Healthcare Management System',
		description: 'Comprehensive healthcare management platform for clinics and hospitals with patient records and scheduling.',
		image: '/api/placeholder/400/250',
		category: 'Healthcare',
		technologies: ['React', 'Node.js', 'PostgreSQL', 'HIPAA'],
		link: '#',
		github: '#',
		icon: HiCog,
		year: '2021',
		status: 'Live'
	}
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Data Analytics', 'AI/ML', 'Business Solutions', 'Marketing Tech', 'Healthcare'];

export default function PortfolioPage() {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [searchTerm, setSearchTerm] = useState('');
	const [sortBy, setSortBy] = useState('year');

	const filteredProjects = allProjects
		.filter(project => {
			const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
			const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
								 project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
								 project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
			return matchesCategory && matchesSearch;
		})
		.sort((a, b) => {
			if (sortBy === 'year') return b.year.localeCompare(a.year);
			if (sortBy === 'title') return a.title.localeCompare(b.title);
			return 0;
		});

	return (
		<div className="min-h-screen bg-slate-950">
			{/* Header */}
			<header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center justify-between">
						<Link
							href="/"
							className="flex items-center gap-3 text-white hover:text-fuchsia-400 transition-colors"
						>
							<HiArrowLeft className="w-5 h-5" />
							<span className="text-xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
								Ravi Ranjan
							</span>
						</Link>
						<h1 className="text-2xl font-bold text-white">Portfolio</h1>
					</div>
				</div>
			</header>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Page Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						My{' '}
						<span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
							Portfolio
						</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto mb-6"></div>
					<p className="text-slate-400 text-lg max-w-2xl mx-auto">
						A comprehensive collection of projects showcasing my expertise in various technologies 
						and business solutions across different industries.
					</p>
				</motion.div>

				{/* Filters and Search */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-12 space-y-6"
				>
					{/* Search Bar */}
					<div className="relative max-w-md mx-auto">
						<HiMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
						<input
							type="text"
							placeholder="Search projects..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
						/>
					</div>

					{/* Category Filters */}
					<div className="flex flex-wrap justify-center gap-3">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
									selectedCategory === category
										? 'bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white'
										: 'bg-slate-800 text-slate-300 hover:bg-slate-700'
								}`}
							>
								{category}
							</button>
						))}
					</div>

					{/* Sort Options */}
					<div className="flex items-center justify-center gap-4">
						<span className="text-slate-400 flex items-center gap-2">
							<HiFunnel className="w-4 h-4" />
							Sort by:
						</span>
						<select
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value)}
							className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
						>
							<option value="year">Year (Newest)</option>
							<option value="title">Title (A-Z)</option>
						</select>
					</div>
				</motion.div>

				{/* Projects Grid */}
				<AnimatePresence mode="wait">
					<motion.div
						key={`${selectedCategory}-${searchTerm}-${sortBy}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/10"
							>
								{/* Project Image */}
								<div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="absolute inset-0 flex items-center justify-center">
										<project.icon className="w-16 h-16 text-slate-600 group-hover:text-fuchsia-500 transition-colors duration-300" />
									</div>
									<div className="absolute top-4 left-4 flex gap-2">
										<span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">
											{project.category}
										</span>
										<span className={`px-3 py-1 rounded-full text-xs font-medium ${
											project.status === 'Live' 
												? 'bg-green-800 text-green-300' 
												: 'bg-yellow-800 text-yellow-300'
										}`}>
											{project.status}
										</span>
									</div>
									<div className="absolute top-4 right-4">
										<span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">
											{project.year}
										</span>
									</div>
								</div>

								{/* Project Content */}
								<div className="p-6">
									<h3 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors duration-300">
										{project.title}
									</h3>
									<p className="text-slate-400 text-sm leading-relaxed mb-4">
										{project.description}
									</p>

									{/* Technologies */}
									<div className="flex flex-wrap gap-2 mb-6">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs"
											>
												{tech}
											</span>
										))}
									</div>

									{/* Action Buttons */}
									<div className="flex gap-3">
										<a
											href={project.link}
											className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300"
										>
											<HiArrowTopRightOnSquare className="w-4 h-4" />
											Live Demo
										</a>
										<a
											href={project.github}
											className="flex items-center gap-2 px-4 py-2 border border-slate-600 text-slate-300 rounded-lg text-sm font-medium hover:border-slate-500 hover:text-white transition-colors duration-300"
										>
											<HiCodeBracket className="w-4 h-4" />
											Code
										</a>
									</div>
								</div>

								{/* Hover Effect Overlay */}
								<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>

				{/* No Results */}
				{filteredProjects.length === 0 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="text-center py-12"
					>
						<p className="text-slate-400 text-lg">No projects found matching your criteria.</p>
						<button
							onClick={() => {
								setSelectedCategory('All');
								setSearchTerm('');
							}}
							className="mt-4 px-6 py-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300"
						>
							Clear Filters
						</button>
					</motion.div>
				)}

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
				>
					<div className="text-center p-6 bg-slate-900 rounded-xl border border-slate-800">
						<div className="text-3xl font-bold text-fuchsia-500 mb-2">{allProjects.length}</div>
						<div className="text-slate-400">Total Projects</div>
					</div>
					<div className="text-center p-6 bg-slate-900 rounded-xl border border-slate-800">
						<div className="text-3xl font-bold text-cyan-500 mb-2">{categories.length - 1}</div>
						<div className="text-slate-400">Categories</div>
					</div>
					<div className="text-center p-6 bg-slate-900 rounded-xl border border-slate-800">
						<div className="text-3xl font-bold text-fuchsia-500 mb-2">{allProjects.filter(p => p.status === 'Live').length}</div>
						<div className="text-slate-400">Live Projects</div>
					</div>
					<div className="text-center p-6 bg-slate-900 rounded-xl border border-slate-800">
						<div className="text-3xl font-bold text-cyan-500 mb-2">5+</div>
						<div className="text-slate-400">Years Experience</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
} 