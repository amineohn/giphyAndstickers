import React from "react";

const Paginate = props => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex flex-col items-center pl-2	pt-1">
            <div className="flex text-gray-700 dark:text-white">
                <div className="flex h-8 font-medium rounded-full bg-blue-200 dark:bg-gray-800">
                    {pageNumbers.map(number => {
                        let classes = "bg-blue-500";
                        if (number === props.currentPage) {
                            classes += "bg-blue-600";
                        }
                        return (
                            <>
                                <div onClick={() => props.pageSelected(number)} className="h-8 w-8 flex justify-center items-center rounded bg-blue-200 dark:bg-gray-800 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right w-4 h-4 text-white bg-blue-300 dark:bg-gray-700 rounded">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Paginate;