import React from 'react';

import { cn } from '@/lib/utils';

interface Props {
	href: string,
	children: React.ReactNode,
	className?: string
}

const IconLink = ({ children, href, className } : Props) => {
	return (
			<a href={href} className={cn(

				)}
			>
				{children}
			</a>
	);
}

export default IconLink;
