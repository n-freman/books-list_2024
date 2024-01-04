import React, { useState } from 'react';	
import './App.css';

import Navbar from '@/components/Navbar';
import BooksSection from '@/components/BooksSection';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import ThemeContext from '@/lib/themProvider';

function App() {
	 const [theme, setTheme] = useState('dark');
  return (
  	<ThemeContext.Provider value={{theme, setTheme}}>
		<div className={(theme == 'dark'? 'dark' : 'light')} id="base">
			<Navbar />
			<img
				draggable="false"
				src={"/" + ((theme == 'light') ? 'light_' : '') + "book.png"}
				alt="book"
				className="mx-auto mt-[5rem] md:max-w-[44rem] max-md:max-w-[35rem]"
			/>
			<BooksSection />
			<Partners />
			<Footer />
		</div>
	</ThemeContext.Provider>
  );
}

export default App;
