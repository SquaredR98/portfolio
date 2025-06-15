export default function StructuredData() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Ravi Ranjan",
		"jobTitle": "Senior Software Developer & Business Consultant",
		"description": "Professional consulting services by Ravi Ranjan. Expert in business solutions, development, and strategic consulting.",
		"url": "https://raviranjan.com",
		"sameAs": [
			"https://linkedin.com/in/raviranjan",
			"https://github.com/raviranjan"
		],
		"worksFor": {
			"@type": "Organization",
			"name": "Antino Labs"
		},
		"knowsAbout": [
			"Full Stack Development",
			"React",
			"Next.js",
			"Node.js",
			"E-commerce Solutions",
			"Payment Integration",
			"Content Management Systems",
			"Business Consulting"
		],
		"hasOccupation": {
			"@type": "Occupation",
			"name": "Senior Software Developer",
			"occupationLocation": {
				"@type": "City",
				"name": "Gurugram"
			}
		},
		"alumniOf": {
			"@type": "Organization",
			"name": "Antino Labs"
		}
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
} 