import React, { useEffect, useState } from "react";
import axios from "axios";

import Loader from "./Loader";

const Giphy = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [currentPage] = useState(1);
    const [itemsPerPage] = useState(25);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                    params: {
                        api_key: "LYA2jGDHvyIkbB8KmweTmjlBbQhsX5Dw",
                        limit: 30
                    }
                });

                console.log(results);
                setData(results.data.data);
            } catch (err) {
            }

            setIsLoading(false);
        };

        fetchData();
    }, []);

    const renderGifs = () => {
        if (isLoading) {
            return <Loader />;
        }
        return currentItems.map(el => {
            return (
                <img src={el.images.fixed_height.url} className="rounded scaleUpDown" alt="" />
            );
        });
    };
    return (
        <div className="flex flex-col h-4">
            <div className="grid gap-x-8 gap-y-4 grid-cols-3 bg-red-300 dark:bg-gray-800 rounded p-2">{renderGifs()}</div>
        </div >
    );
};

export default Giphy;
