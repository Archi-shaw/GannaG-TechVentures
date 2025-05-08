import React from "react";

export default function AllToolsOverlay(){
    return (
        <div className=" select-none flex flex-row items-center space-x-7">
            <div className=" select-none cursor-pointer hover:bg-gray-300 hover:rounded-xl px-4 py-2"> <span className=" select-none cursor-pointer text-gray-700">All</span> </div>
            <div className=" select-none cursor-pointer hover:bg-gray-300 hover:rounded-xl px-4 py-2"> <span className=" select-none cursor-pointer text-gray-700">Blog Content</span> </div>
            <div className=" select-none cursor-pointer hover:bg-gray-300 hover:rounded-xl px-4 py-2"> <span className=" select-none cursor-pointer text-gray-700">Website Copy & SEO</span> </div>
            <div className=" select-none cursor-pointer hover:bg-gray-300 hover:rounded-xl px-4 py-2"> <span className=" select-none cursor-pointer text-gray-700">Social Media & Ads</span>  </div>
            <div className=" select-none cursor-pointer hover:bg-gray-300 hover:rounded-xl px-4 py-2"> <span className=" select-none cursor-pointer text-gray-700"> Marketing</span></div>
            <div className=" select-none cursor-pointer hover:bg-gray-300 hover:rounded-xl px-4 py-2"> <span className=" select-none cursor-pointer text-gray-700">More Tools</span> </div>
        </div>
    );
} 