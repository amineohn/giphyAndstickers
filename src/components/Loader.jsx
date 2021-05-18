import React from "react";

const Loader = () => {
    return (
        <div class="w-full h-full fixed block top-0 left-0 opacity-75 z-50">
            <span class="text-blue-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
                <div class="coffee_cup"></div>
            </span>
        </div>
    );
};

export default Loader;