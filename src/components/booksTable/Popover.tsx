import React, { useRef, useContext } from 'react';

import {
	Dialog,
	DialogContent,
	DialogTrigger
} from '@/components/ui/dialog';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book } from '@/components/booksTable/columns';
import ThemeProvider from '@/lib/themProvider';

interface Props {
	data: Book
}

const Popover = ({ data }: Props) => {
	const blocks: Array<Record<string, string>> = [
		{ key: 'title', header: 'Title' },
		{ key: 'author', header: 'Author'},
		{ key: 'description', header: 'Description' },
		{ key: 'personal-notes', header: 'Personal Notes' }
	]
	const scrollAreaRef = useRef<HTMLDivElement>(null);
	const { theme } = useContext(ThemeProvider);
	return (
		<Dialog>
			<DialogTrigger>
				<div className="border rounded-sm w-[2rem] h-[2rem] flex items-center justify-around hover:bg-[#575757] [&_.dark]:hover:bg-slate-900 hover:border-0 active:bg-black">
					<svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.00002 2.16666C6.36821 2.16666 6.66669 1.86818 6.66669 1.49999C6.66669 1.13181 6.36821 0.833328 6.00002 0.833328C5.63183 0.833328 5.33335 1.13181 5.33335 1.49999C5.33335 1.86818 5.63183 2.16666 6.00002 2.16666Z" stroke={(theme == 'dark') ? "#CBD5E1" : "#030303" } stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M10.6667 2.16666C11.0349 2.16666 11.3334 1.86818 11.3334 1.49999C11.3334 1.13181 11.0349 0.833328 10.6667 0.833328C10.2985 0.833328 10 1.13181 10 1.49999C10 1.86818 10.2985 2.16666 10.6667 2.16666Z" stroke={(theme == 'dark') ? "#CBD5E1" : "#030303" } stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M1.33335 2.16666C1.70154 2.16666 2.00002 1.86818 2.00002 1.49999C2.00002 1.13181 1.70154 0.833328 1.33335 0.833328C0.965164 0.833328 0.666687 1.13181 0.666687 1.49999C0.666687 1.86818 0.965164 2.16666 1.33335 2.16666Z" stroke={(theme == 'dark') ? "#CBD5E1" : "#030303" } stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</DialogTrigger>
		<DialogContent className={"md:flex md:min-w-[60vw] max-md:max-w-[80vw] max-md:h-[65vh] max-md:overflow-scroll" + ((theme == 'dark') ? ' bg-black' : '')}>
			{data.image ?
				<p>image</p>
				: <div className="bg-gradient-to-t from-black to-[#9747FF] rounded md:w-[24em] md:h-[33.25em] max-md:w-[19em] max-md:h-[25em] max-md:mx-auto flex flex-col justify-center items-center">
					<p className="text-xl text-center leading-5 max-w-[70%] text-slate-300">{data.title}</p>
					<p className={"text-sm text-slate-400 mt-3"}>{data.author}</p>
				</div>
			}
			<ScrollArea className="md:max-h-[33.25em]">
				<div className="md:w-[28vw] group" ref={scrollAreaRef}>
					{blocks.map((block) => {
						const current = data[block.key as keyof Book] ?? ''
						if (current.length !== 0) {
							// The ternary operator is for adding "group-hover:mr-4" class when block can be scrolled
							return (
								<div className={"border rounded p-4 mb-2" + ((theme == 'dark') ? " text-slate-300" : " text-slate-900") + (((scrollAreaRef.current?.scrollHeight ?? 0) > 500) ? " group-hover:mr-4": "")}>
									<h3 className={(theme == 'dark') ? 'text-slate-300' : ''}>{block.header}</h3>
									<p className="opacity-50">{current}</p>
								</div>
							)}
						})}
				</div>
			</ScrollArea>
		</DialogContent>
	</Dialog>)
}

export default Popover;

