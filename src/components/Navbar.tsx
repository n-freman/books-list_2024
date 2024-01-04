import React, { useContext } from 'react';

import Container from '@/components/Container';
import IconLink from '@/components/IconLink';
import Logo from '@/components/logos';
import ThemeToggle from '@/components/ThemeToggle';
import ThemeProvider from '@/lib/themProvider';

const Navbar = () => {
	const { theme } = useContext(ThemeProvider);
	console.log(theme)
	return (
		<Container className="py-[12px] nav flex justify-between items-center">
			<h1 className="logo text-xl leading-[31px]">n-freman</h1>
			<div className="flex gap-[1.5rem]" >
				<IconLink href="#">
					<Logo title="github" fill={(theme == 'light') ? 'black' : 'white'} />
				</IconLink>
				<IconLink href="#">
					<Logo title="x" fill={(theme == 'light') ? 'black' : 'white'}  />
                </IconLink>
				<ThemeToggle />
			</div>
		</Container>
	);
}

export default Navbar;

