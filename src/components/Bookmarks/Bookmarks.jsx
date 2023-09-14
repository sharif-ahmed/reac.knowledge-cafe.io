/* eslint-disable react/prop-types */
import React from 'react';

const Bookmarks = (props) => {
    const { bookmarks } = props;
    return (
        <div>
            <h2 className='text-[#111] text-[24px] font-bold mb-2'>Bookmarked Blogs : {bookmarks.length}</h2>
            <div>
                {
                    bookmarks.map((bookmark, idx) => (
                        <div key={idx} className='bg-white rounded-md p-5 mb-2'>
                            <p className='text-[#111] text-[18px] font-semibold'>{bookmark.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Bookmarks;