import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://ravi-ranjan.in',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://ravi-ranjan.in/resume',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://ravi-ranjan.in/portfolio',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	]
} 