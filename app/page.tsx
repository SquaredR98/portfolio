import Banner from '@/components/Banner';
import SkillAndExpertise from '../sections/SkillAndExpertise';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import ContactMe from '../sections/ContactMe';
import Footer from '../sections/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
	return (
		<main className='bg-white dark:bg-slate-950 min-h-screen'>
      <Navbar />
			<Banner />
			<SkillAndExpertise />
			<Experience />
			<Projects />
			<ContactMe />
			<Footer />
		</main>
	);
}
