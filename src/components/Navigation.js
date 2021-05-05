import { Link } from "react-router-dom";
import React from "react";
export default function Navigation() {
  return (
    <>
      <div class="pb-4">
        <ul class="flex">
          <li class="mr-3">
            <Link
              class="inline-block rounded hover:text-gray-100 text-gray-700 hover:bg-red-400 py-1 px-3 transition duration-150"
              to="/"
            >
              Gif
            </Link>
          </li>
          <li class="mr-3">
            <Link
              class="inline-block rounded hover:text-gray-100 text-gray-700 hover:bg-red-400 py-1 px-3 transition duration-150"
              to="/stickers"
            >
              Stickers
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
