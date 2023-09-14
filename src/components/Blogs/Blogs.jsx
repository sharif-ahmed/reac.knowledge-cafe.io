import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = (props) => {

    // eslint-disable-next-line react/prop-types
    const { handleAddBookmark, handleMarkAsRead} = props;
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);


    return (
        <div>
            {
                blogs.map((blog, idx) => (
                    <Blog key={idx} blog={blog} handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>
                ))
            }
        </div>
    );
};

export default Blogs;