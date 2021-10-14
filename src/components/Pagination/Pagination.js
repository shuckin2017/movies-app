import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export const Pagination = () => {
  return (
    <div className="flex items-center justify-between mt-10">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border  text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Показать <span className="font-medium">1</span> из{" "}
            <span className="font-medium">10</span> из{" "}
            <span className="font-medium">97</span> результатов
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md text-sm font-medium text-white "
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <a
              href="#"
              aria-current="page"
              className="z-10 text-white relative inline-flex items-center px-4 py-2 text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              aria-current="page"
              className="z-10 text-white relative inline-flex items-center px-4 py-2 text-sm font-medium"
            >
              2
            </a>
            <a
              href="#"
              aria-current="page"
              className="z-10 text-white relative inline-flex items-center px-4 py-2 text-sm font-medium"
            >
              3
            </a>
            <a
              href="#"
              aria-current="page"
              className="z-10 text-white relative inline-flex items-center px-4 py-2 text-sm font-medium"
            >
              4
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md text-sm font-medium text-white "
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

/* This example requires Tailwind CSS v2.0+ */
