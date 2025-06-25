export default function StructuredData() {
	const personData = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Ravi Ranjan",
		"jobTitle": "Senior Software Developer",
		"description": "Full-Stack Developer with over four years of experience in designing, building, and deploying scalable web applications and platforms. Proficient in React, Next.js, Node.js, NestJS, PostgreSQL, and MongoDB.",
		"url": "https://ravi-ranjan.in",
		"image": "https://ravi-ranjan.in/profile.webp",
		"address": {
			"@type": "PostalAddress",
			"addressCountry": "IN",
			"addressRegion": "Haryana",
			"addressLocality": "Gurugram"
		},
		"sameAs": [
			"https://linkedin.com/in/raviranjan98",
			"https://github.com/SquaredR98",
			"https://www.upwork.com/freelancers/ranjanravi"
		],
		"worksFor": {
			"@type": "Organization",
			"name": "Antino Labs",
			"url": "https://antinolabs.com"
		},
		"alumniOf": {
			"@type": "Organization",
			"name": "Indian Institute of Information Technology, Dharwad",
			"url": "https://iiitdwd.ac.in"
		},
		"knowsAbout": [
			"Full Stack Development",
			"React",
			"Next.js",
			"Node.js",
			"NestJS",
			"PostgreSQL",
			"MongoDB",
			"E-commerce Solutions",
			"Payment Integration",
			"Content Management Systems",
			"Business Consulting",
			"TypeScript",
			"Tailwind CSS",
			"REST API Development"
		],
		"hasOccupation": {
			"@type": "Occupation",
			"name": "Senior Software Developer",
			"occupationLocation": {
				"@type": "City",
				"name": "Gurugram"
			}
		},
		"knowsLanguage": "English",
		"nationality": "Indian"
	};

	const websiteData = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Ravi Ranjan Portfolio",
		"url": "https://ravi-ranjan.in",
		"description": "Professional portfolio and consulting services by Ravi Ranjan. Expert in business solutions, development, and strategic consulting.",
		"author": {
			"@type": "Person",
			"name": "Ravi Ranjan"
		},
		"publisher": {
			"@type": "Person",
			"name": "Ravi Ranjan"
		},
		"inLanguage": "en-US",
		"potentialAction": {
			"@type": "ContactPage",
			"target": "https://ravi-ranjan.in#contact",
			"name": "Contact Ravi Ranjan"
		}
	};

	const organizationData = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Ravi Ranjan Consulting",
		"url": "https://ravi-ranjan.in",
		"logo": "https://ravi-ranjan.in/favicon.ico",
		"description": "Professional consulting services specializing in full-stack development, e-commerce solutions, and business consulting.",
		"foundingDate": "2020",
		"address": {
			"@type": "PostalAddress",
			"addressCountry": "IN",
			"addressRegion": "Haryana",
			"addressLocality": "Gurugram"
		},
		"contactPoint": {
			"@type": "ContactPoint",
			"contactType": "customer service",
			"availableLanguage": "English"
		},
		"sameAs": [
			"https://linkedin.com/in/raviranjan98",
			"https://github.com/SquaredR98"
		]
	};

	const serviceData = {
		"@context": "https://schema.org",
		"@type": "Service",
		"name": "Full Stack Development Services",
		"description": "End-to-end web application development using React, Next.js, Node.js, and modern technologies. From concept to deployment with scalable architecture.",
		"provider": {
			"@type": "Person",
			"name": "Ravi Ranjan"
		},
		"areaServed": "Worldwide",
		"serviceType": "Web Development & Consulting",
		"offers": {
			"@type": "Offer",
			"availability": "https://schema.org/InStock"
		}
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
			/>
		</>
	);
} 