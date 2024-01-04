import React from 'react';

import { cn } from '@/lib/utils';

interface Props {
	children: React.ReactNode,
	className?: string
}

const Container = ({ children, className } : Props) => {
	return (
		<div className={cn(
			'sm:px-[10vw] m-auto max-sm:px-[3vw]',
			className
		)}>
			{ children }
		</div>
	);
}

export default Container;

