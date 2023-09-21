import ecomCover from '../assets/projects/ecommerce/ecommerce.svg';
import ecomHomePage from '../assets/projects/ecommerce/ecom-home-page.png';
import ecomShopPage from '../assets/projects/ecommerce/ecom-shop-page.png';
import ecomCheckoutPage from '../assets/projects/ecommerce/checkout page.png';

export const projects = [
	{
		title: 'React Ecom Website',
		techs: [
			'React',
			'Redux',
			'Context',
			'Firebase Auth',
			'Firestore',
			'SCSS',
			'Styled Components',
		],
		about: 'An ecommerce website developed using React with the features following: Sign In, Sign Up, Google Auth, Product Listing, Shopping Cart and many more...',
		gallery: [ecomCover, ecomHomePage, ecomShopPage, ecomCheckoutPage],
	},
];
