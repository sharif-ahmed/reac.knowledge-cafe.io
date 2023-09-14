import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='container mx-auto'>
        <div className='flex gap-5 flex-col md:flex-row justify-between mt-4'>
          <div className='w-[70%]'>
            <Blogs></Blogs>
          </div>
          <div className='w-[30%] bg-[#1111110d] rounded-lg p-7'>
            <Bookmarks></Bookmarks>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
