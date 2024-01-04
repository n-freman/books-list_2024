import React, { useEffect, useState } from 'react';

import Container from '@/components/Container';
import { Book, columns } from '@/components/booksTable/columns';
import DataTable from '@/components/booksTable/data-table';


const BooksSection = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		fetch('books.json').then((response) => response.json()).then(
			(data) => {
				setBooks(data)
			}
		)
	}, [])
	return (
		<Container className="my-[5rem]">
			<h2 className="section-title">Books to read in year 2024</h2>
			<DataTable columns={columns} data={books} />
		</Container>
	)
}

export default BooksSection;
