/* eslint-disable no-undef */
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [markAsRead, setMarkAsRead] = useState(false);

  const handleAddBookmark = (blog) => {
    const isExist = bookmarks.find((bookmark) => bookmark.id === blog.id);
    if (!isExist) {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }
  }
  const handleMarkAsRead = (blog) => {
    const remainingBookmark = bookmarks.filter((bookmark)=> bookmark.id !== blog.id);
    setBookmarks(remainingBookmark);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='container mx-auto'>
        <div className='flex gap-5 flex-col md:flex-row justify-between mt-4'>
          <div className='w-[70%]'>
            <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          </div>
          <div className='w-[30%] bg-[#1111110d] rounded-lg p-7'>
            <Bookmarks bookmarks={bookmarks}></Bookmarks>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
