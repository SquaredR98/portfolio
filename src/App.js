import { useState } from 'react';
import Navbar from './components/Navbar';
import useTheme from './hooks/useTheme';
import HomePage from './pages/HomePage';

function App() {
	const [colorTheme, setTheme] = useTheme();
	const [darkMode, setDarkMode] = useState(
		colorTheme === 'light' ? true : false,
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkMode(checked);
	};
	return (
		<div className='h-screen flex flex-col'>
			<Navbar darkMode={darkMode} setMode={toggleDarkMode} />
			<HomePage />
		</div>
	);
}

export default App;
