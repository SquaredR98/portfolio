import Head from 'next/head';

const SEO = ({
	title,
	description,
	keywords,
	url,
	image,
}: {
	title: string;
	description: string;
	keywords: string;
	url: string;
	image: string;
}) => {
	return (
		<Head>
			{/* Primary Meta Tags */}
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
			<meta name='author' content='Ravi Ranjan' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0'
			/>

			{/* Open Graph Tags */}
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />
			<meta property='og:url' content={url} />
			<meta property='og:type' content='website' />

			{/* Twitter Card Tags */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />

			{/* Canonical Link */}
			<link rel='canonical' href={url} />
		</Head>
	);
};

export default SEO;
