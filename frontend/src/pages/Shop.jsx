import { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Paginator, Products } from '../components'
import dressApiService from '../apiServices/dress.apiServices';

const Shop = () => {

    const { gender } = useParams();
    
    const [ searchParams, setSearchParams ] = useSearchParams();
    // console.log("Gender:" + gender + '\n' + searchParams.getAll);

    const [ products, setProducts ] = useState([]);

    const [ currentPage, setCurrentPage ] = useState(1);
    const productsPerPage = 12;
    
    async function getProducts () {
        const res = await dressApiService.fetchDresses(gender);
        console.log(res.data);
        if (res.status) {
            setProducts(res.data);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const ProductsInWindow = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    if (!products) return;

  return (
    <>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
        <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
        </header>

        <div className="mt-8 block lg:hidden">
            <button
                className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
            >
                <span className="text-sm font-medium"> Filters & Sorting </span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 rtl:rotate-180"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="hidden space-y-4 lg:block">
                <div>
                    {/* <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Sort By </label> */}
                    <select id="SortBy" className="mt-1 w-full px-2 rounded text-base focus:outline-none bg-transparent">
                        <option>Sort By</option>
                        <option value="Title, DESC">Title, DESC</option>
                        <option value="Title, ASC">Title, ASC</option>
                        <option value="Price, DESC">Price, DESC</option>
                        <option value="Price, ASC">Price, ASC</option>
                    </select>
                </div>
                <div>
                    <p className="block text-xs font-medium text-gray-700">Filters</p>

                    <div className="mt-1 space-y-2">
                        <details
                        className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                        >
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                        >
                            <span className="text-sm font-medium"> Availability </span>

                            <span className="transition group-open:-rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                            </span>
                        </summary>

                        <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700"> 0 Selected </span>

                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                Reset
                            </button>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                            <li>
                                <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="FilterInStock"
                                    className="size-5 rounded border-gray-300"
                                />

                                <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                                </label>
                            </li>

                            <li>
                                <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="FilterPreOrder"
                                    className="size-5 rounded border-gray-300"
                                />

                                <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                                </label>
                            </li>

                            <li>
                                <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="FilterOutOfStock"
                                    className="size-5 rounded border-gray-300"
                                />

                                <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                                </label>
                            </li>
                            </ul>
                        </div>
                        </details>

                        <details
                        className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                        >
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                        >
                            <span className="text-sm font-medium"> Price </span>

                            <span className="transition group-open:-rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                            </span>
                        </summary>

                        <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700"> The highest price is $600 </span>

                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                Reset
                            </button>
                            </header>

                            <div className="border-t border-gray-200 p-4">
                            <div className="flex justify-between gap-4">
                                <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">$</span>

                                <input
                                    type="number"
                                    id="FilterPriceFrom"
                                    placeholder="From"
                                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                />
                                </label>

                                <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">$</span>

                                <input
                                    type="number"
                                    id="FilterPriceTo"
                                    placeholder="To"
                                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                />
                                </label>
                            </div>
                            </div>
                        </div>
                        </details>

                        <details
                        className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                        >
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                        >
                            <span className="text-sm font-medium"> Colors </span>

                            <span className="transition group-open:-rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                            </span>
                        </summary>

                        <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700"> 0 Selected </span>

                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                Reset
                            </button>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                            <li>
                                <label htmlFor="FilterRed" className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="FilterRed"
                                    className="size-5 rounded border-gray-300"
                                />

                                <span className="text-sm font-medium text-gray-700"> Red </span>
                                </label>
                            </li>

                            <li>
                                <label htmlFor="FilterBlue" className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="FilterBlue"
                                    className="size-5 rounded border-gray-300"
                                />

                                <span className="text-sm font-medium text-gray-700"> Blue </span>
                                </label>
                            </li>

                            <li>
                                <label htmlFor="FilterGreen" className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="FilterGreen"
                                    className="size-5 rounded border-gray-300"
                                />

                                <span className="text-sm font-medium text-gray-700"> Green </span>
                                </label>
                            </li>

                            <li>
                                <label htmlFor="FilterOrange" className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="FilterOrange"
                                    className="size-5 rounded border-gray-300"
                                />

                                <span className="text-sm font-medium text-gray-700"> Orange </span>
                                </label>
                            </li>

                            <li>
                                <label htmlFor="FilterPurple" className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="FilterPurple"
                                    className="size-5 rounded border-gray-300"
                                />

                                <span className="text-sm font-medium text-gray-700"> Purple </span>
                                </label>
                            </li>

                            <li>
                                <label htmlFor="FilterTeal" className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="FilterTeal"
                                    className="size-5 rounded border-gray-300"
                                />

                                <span className="text-sm font-medium text-gray-700"> Teal </span>
                                </label>
                            </li>
                            </ul>
                        </div>
                        </details>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-3">
                {/* <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <li key={product._id}>
                            <Link to="#" className="group block overflow-hidden">
                            <img
                                src={product.imageUrls[0]}
                                alt=""
                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />
                
                            <div className="relative bg-transparent pt-3">
                                <h3
                                className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                >
                                {product.title}
                                </h3>
                
                                <p className="mt-2">
                                <span className="sr-only"> Regular Price </span>
                
                                <span className="tracking-wider text-gray-900">&#8377;{product.price}</span>
                                </p>
                            </div>
                            </Link>
                      </li>
                    ))}
                </ul> */}
                <Products products={ProductsInWindow}></Products>
            </div>
        </div>
        
        <Paginator itemsPerPage={productsPerPage} totalItems={products.length} paginate={paginate} />
    </div>
    </>
  )
}

export default Shop