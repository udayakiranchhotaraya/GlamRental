import React from 'react'

const Paginator = ({ itemsPerPage, totalItems, paginate }) => {

    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(totalItems / itemsPerPage); index++) {
        pageNumbers.push(index);
    }

  return (
    <nav>
        <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
            <li>
                <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded"
                >
                <span className="sr-only">Prev Page</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                    />
                </svg>
                </a>
            </li>

            {
                pageNumbers.map((pageNumber) => (
                    <li key={pageNumber}>
                        <a onClick={() => paginate(pageNumber)} href="#" className="block size-8 rounded text-center leading-8">{pageNumber}</a>
                    </li>
                ))
            }

            <li>
                <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded"
                >
                <span className="sr-only">Next Page</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                    />
                </svg>
                </a>
            </li>
        </ol>
    </nav>
  )
}

export default Paginator