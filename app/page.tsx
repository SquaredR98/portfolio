import Banner from '@/components/Banner';
import SkillAndExpertise from '../sections/SkillAndExpertise';
import Experience from '../sections/Experience';

export default function Home() {
	return (
		<main className='bg-white dark:bg-slate-950 min-h-screen'>
			<Banner />
			<SkillAndExpertise />
			<Experience />
		</main>
	);
}
