import React from 'react';

import Container from './Container';
import BrandLogo from '@/components/BrandLogos';

const Partners = () => {
	return (
		<Container className="my-[5em]">
			<h2 className="section-title">Our partners</h2>
			<p className="text-gray-700 text-center text-xs">(куда без этого)</p>
			<div className="flex mx-auto gap-[50px] justify-center mt-[3.5rem] items-center">
				<BrandLogo brand="apple" />				
				<BrandLogo brand="google" />
				<BrandLogo brand="meta" />
				<BrandLogo brand="microsoft" />
			</div>
		</Container>
	)
}

export default Partners;
