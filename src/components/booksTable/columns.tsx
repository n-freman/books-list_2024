import React, { useRef } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import {
	Dialog,
	DialogContent,
	DialogTrigger
} from '@/components/ui/dialog';
import { ScrollArea } from "@/components/ui/scroll-area";
import Popover from '@/components/booksTable/Popover';
import StatusIcon from '@/components/StatusIcon';

export type Book = {
	title: string,
	author: string,
	status: "todo" | "done" | "cancel" | "in-process",
	"date-finished": string,
	description: string,
	"personal-notes": string,
	image?: string
}

const columns: ColumnDef<Book>[] = [
	{
		accessorKey: "title",
		header: () => <p className="px-6 w-[25vw] py-3.5">Title</p>,
		cell: ({ row }) => {
			return <p className="px-4 md:w-[25vw] truncate max-md:max-w-[150px]">
				{row.getValue('title')}
			</p>
		}
	},
	{
		accessorKey: "author",
		header: () => <p className="px-2 w-[20vw]">Author</p>,
		cell: ({ row }) => {
        	return <p className="md:w-[20vw] truncate max-md:max-w-[80px]">{row.getValue('author')}</p>
        }
	},
	{
		accessorKey: "status",
		header: () => <p className="px-2 w-[12vw]">Status</p>,
		cell: ({ row }) => {
			const text : string = row.getValue('status');
			const formattedText = {
				'done': 'Done',
				'cancel': "Cancelled",
				'in-process': 'In Process',
				'todo': 'Todo'
			}[text]
			return (
				<div className="flex gap-2">
					<StatusIcon status={text} />
					<p>{formattedText}</p>
				</div>
			)
		}
	},
	{
		accessorKey: "dateFinished",
		header: () => <p className="text-center">Date Finished</p>,
		cell: ({ row }) => {
			let date = row.original['date-finished'];
			date = date.length !== 0 ? date : '-'
			return <p className="text-center w-[10vw]">{date}</p>
		}
	},
	 {
		id: "actions",
		header: () => <p className="w-[4em]"></p>,
		cell: ({ row }) => {
			const data = row.original;
			return <Popover data={data} />
		}
	}
]

export { columns }
