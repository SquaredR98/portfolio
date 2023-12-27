import Banner from '@/components/Banner';
import SkillAndExperience from '@/sections/SkillAndExperience';

export default function Home() {
	return (
		<main className='bg-white dark:bg-slate-950 min-h-screen'>
			<Banner />
			<SkillAndExperience />
		</main>
	);
}
