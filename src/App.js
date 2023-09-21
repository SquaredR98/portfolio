import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import useTheme from './hooks/useTheme';
import Navbar from './components/Navbar';

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
			<Outlet />
		</div>
	);
}

export default App;
