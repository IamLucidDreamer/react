import React from "react";
import placeholderImage from "./../../../../../argus website/PNG/IMG_0118.png"

export const ClientTable = () => {
  return (
    <div className="mx-8 my-8 p-4 bg-white shadow-lg rounded-xl">
      
        {/* Card of table */}
        <div className ="flex flex-col md:flex-row border-2 text-lg items-center">
            <div className="flex flex-col items-center text-center w-full md:w-2/12">
                <h1 className="px-3 py-1 text-red-1 font-bold">Company Name</h1>
            </div>
            <div className="px-3 py-1 border-b-2 border-t-2 md:border-0 md:border-r-2 md:border-l-2 w-full md:w-8/12">
            <img src={placeholderImage} alt=""  className="px-3 py-1 border-b-2 w-full md:w-8/12 mx-auto"/>
            </div>
            <div className="flex flex-col items-center mx-auto">
                <button className="px-3 py-1 m-2 border-2 border-dashed border-red-1 bg-red-1 text-white rounded-lg hover:text-red-1 hover:bg-opacity-20">Delete</button>
            </div>
        </div> 

    </div>
  );
};
