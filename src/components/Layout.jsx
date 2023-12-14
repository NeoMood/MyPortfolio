import React from 'react';

export const Layout = () => {
    return (
        <>
        {/* <div className="flex justify-between p-4"> */}
        <button className="fixed left-0 top-1/2 transform -translate-y-1/2 hover:backdrop-blur-[10px] text-white font-bold py-2 px-4 rounded backdrop-blur-[6px] ml-8">
            &larr; Previous
        </button>
        <button className="fixed right-0 top-1/2 transform -translate-y-1/2 hover:backdrop-blur-[10px] text-white font-bold py-2 px-4 rounded backdrop-blur-[6px] mr-8">
            Next &rarr;
        </button>
        {/* </div> */}
        </>
    );
};

