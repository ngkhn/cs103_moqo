import React from "react";
import "tailwindcss/tailwind.css";

const SearchButton = (props: any) => {
    return(
        <div className="flex justify-center items-center px-auto">
            {/* Search Button */}
            <div className="flex bg-gradient bg-transparen ">
                <button className="rounded-full px-4 py-2 w-full bg-inherit text-yellow-300" type="button">Search</button>
            </div>
        </div>
    );
};

export default SearchButton;