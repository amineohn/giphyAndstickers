import React, { useState } from "react";
import axios from "axios";
import Paginate from "./Pagination";
import Loader from "./Loader";

const Giphy = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(25);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const renderGifs = () => {
        if (isLoading) {
            return <Loader />;
        }
        return currentItems.map(el => {
            return (
                <img src={el.images.fixed_height.url} className="rounded" alt="" />
            );
        });
    };
    const renderError = () => {
        if (isError) {
            return (
                <div className="message" role="alert">
                    Unable to get Gifs, please try again in a few minutes
                </div>
            );
        }
    };

    const handleSearchChange = event => {
        setSearch(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        setIsError(false);
        setIsLoading(true);

        try {
            const results = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "LYA2jGDHvyIkbB8KmweTmjlBbQhsX5Dw",
                    q: search,
                    limit: 100
                }
            });
            setData(results.data.data);
        } catch (err) {
            setIsError(true);
            setTimeout(() => setIsError(false), 4000);
        }

        setIsLoading(false);
    };

    const pageSelected = pageNumber => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex flex-col h-4">
            {renderError()}
            <form className="pb-4 flex justify-center">
                <div class="pt-2 relative mx-auto inline-flex">
                    <input
                        value={search}
                        onChange={handleSearchChange}
                        type="text"
                        placeholder="Search"
                        className="border-2 border-purple-200 text-white dark:text-white hover:border-purple-200 dark:border-gray-600 placeholder-white dark:placeholder-white dark:bg-gray-800 focus:border-purple-200 dark:focus:border-blue-400 transition duration-150 transform hover:scale-110 bg-purple-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-72 "
                    />
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="absolute right-0 top-0 mt-5 mr-4 hidden"
                    >
                        <svg class="h-4 w-4 fill-current" width="512px" height="512px" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4534 67.7487L50.7249 55.0169C49.5542 53.8459 49.5544 51.9476 50.7252 50.7768C51.8963 49.6057 53.795 49.6058 54.9659 50.7771L67.6944 63.5089C68.865 64.6799 68.8649 66.5782 67.6941 67.749C66.523 68.9201 64.6243 68.92 63.4534 67.7487Z" fill="#F2C94C" />
                            <path d="M50.7249 55.0169L52.1393 53.6028H52.1393L50.7249 55.0169ZM63.4534 67.7487L64.8678 66.3347L63.4534 67.7487ZM50.7252 50.7768L52.1394 52.191H52.1394L50.7252 50.7768ZM54.9659 50.7771L53.5515 52.1911V52.1911L54.9659 50.7771ZM67.6944 63.5089L69.1088 62.0949L67.6944 63.5089ZM67.6941 67.749L66.2799 66.3348H66.2799L67.6941 67.749ZM49.3105 56.4309L62.039 69.1628L64.8678 66.3347L52.1393 53.6028L49.3105 56.4309ZM49.311 49.3626C47.3592 51.3144 47.359 54.4788 49.3105 56.4309L52.1393 53.6028C51.7495 53.2129 51.7496 52.5808 52.1394 52.191L49.311 49.3626ZM56.3803 49.363C54.4283 47.4106 51.2632 47.4104 49.311 49.3626L52.1394 52.191C52.5294 51.801 53.1616 51.8011 53.5515 52.1911L56.3803 49.363ZM69.1088 62.0949L56.3803 49.363L53.5515 52.1911L66.28 64.923L69.1088 62.0949ZM69.1083 69.1632C71.0601 67.2114 71.0603 64.047 69.1088 62.0949L66.28 64.923C66.6698 65.3129 66.6697 65.945 66.2799 66.3348L69.1083 69.1632ZM62.039 69.1628C63.9909 71.1152 67.1561 71.1154 69.1083 69.1632L66.2799 66.3348C65.8899 66.7248 65.2577 66.7247 64.8678 66.3347L62.039 69.1628Z" fill="#F2C94C" />
                            <path d="M15.5965 29.0688C17.3583 22.4939 22.4939 17.3584 29.0687 15.5966C35.6436 13.8349 42.6589 15.7147 47.4721 20.5278C52.2852 25.341 54.165 32.3563 52.4033 38.9312C50.6415 45.5061 45.506 50.6416 38.9311 52.4034C32.3562 54.1651 25.3409 52.2853 20.5277 47.4722C15.7146 42.659 13.8348 35.6437 15.5965 29.0688Z" fill="#2F80ED" />
                            <path d="M20.7417 33.9973C20.7416 35.1019 21.637 35.9973 22.7416 35.9974C23.8462 35.9975 24.7416 35.1021 24.7417 33.9975L20.7417 33.9973ZM28.3698 24.2497L29.3698 25.9818L28.3698 24.2497ZM33.9968 24.7417C35.1014 24.7416 35.9967 23.846 35.9966 22.7414C35.9964 21.6369 35.1009 20.7416 33.9963 20.7417L33.9968 24.7417ZM24.7417 33.9975C24.7419 30.6907 26.5061 27.6352 29.3698 25.9818L27.3698 22.5177C23.2685 24.8856 20.7419 29.2615 20.7417 33.9973L24.7417 33.9975ZM33.9963 20.7417C31.7086 20.742 29.42 21.334 27.3698 22.5177L29.3698 25.9818C30.8015 25.1552 32.3987 24.7419 33.9968 24.7417L33.9963 20.7417Z" fill="#F2F2F2" />
                        </svg>
                    </button>
                    <Paginate
                        pageSelected={pageSelected}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        totalItems={data.length}
                    />
                </div>
            </form>
            <div className="grid gap-x-8 gap-y-4 grid-cols-3 bg-purple-300 dark:bg-gray-800 rounded p-2">{renderGifs()}</div>
        </div >
    );
};

export default Giphy;
