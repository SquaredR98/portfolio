import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://raviranjan.com',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://raviranjan.com/resume',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://raviranjan.com/portfolio',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	]
} 