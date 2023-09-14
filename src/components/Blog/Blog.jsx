/* eslint-disable react/prop-types */
import React from 'react';
import { FaBookmark, FaBook } from "react-icons/fa";

const Blog = (props) => {
    // eslint-disable-next-line react/prop-types
    const { blog, handleAddBookmark, handleMarkAsRead} = props
    return (
        <div className='mb-10'>
            <figure>
                <img className='w-full h-[420px] rounded-lg' src={blog.cover} alt="" />
            </figure>
            <div className='flex justify-between items-center mt-8'>
                <div className='flex'>
                    <img className='w-14 h-14 mr-6' src={blog.author_img} alt="" />
                    <div>
                        <h4 className='text-[#111] text-2xl font-bold'>{blog.author}</h4>
                        <p>{blog.posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{blog.reading_time} min read</span>
                    <button className='ml-2' onClick={() => handleAddBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='my-4 text-[#111] font-bold text-[40px]'>{blog.title}</h2>
            {
                blog.hashtags.map((tag, idx) => (
                    <a className='mr-2 text-[#11111199] font-medium text-[20px]' key={idx} href="">#{tag}</a>
                ))
            }
            <div>
                <button onClick={() => handleMarkAsRead(blog)} className='text-[20px] text-base text-[#6047EC] mt-5'>Mark As Read</button>
            </div>
            <hr className='mt-4' />
        </div>
    );
};

export default Blog;