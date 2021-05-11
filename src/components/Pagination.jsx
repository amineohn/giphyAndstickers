import React from "react";

const Paginate = props => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div class="flex flex-col items-center pl-2	pt-1">
            <div class="flex text-gray-700 dark:text-white">
                <div class="flex h-8 font-medium rounded-full bg-purple-200 dark:bg-gray-800">
                    {pageNumbers.map(number => {
                        let classes = "w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full scaleUpDown";
                        if (number === props.currentPage) {
                            classes += "bg-purple-600";
                        }
                        return (
                            <>
                                <div onClick={() => props.pageSelected(number)} class="h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-purple-200 dark:bg-gray-800 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-4 h-4 text-white bg-purple-300 dark:bg-gray-700 rounded-full">
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