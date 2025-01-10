import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Full-Stack Developer | Scalable Web Solutions | Ravi Ranjan',
    short_name: 'Ravi Ranjan',
    description: 'Ravi Ranjan is a Full-Stack Developer specializing in scalable web solutions, modern web technologies, and tailored digital experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#a00',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}