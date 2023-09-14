import React from 'react';
import profile from '../../assets/images/profile.png'

const Navbar = () => {
    return (
        <header className='pt-[20px]'>
            <div className="container mx-auto">
                <nav className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-[#111] font-bold text-[40px] leading-[64px]'>Knowledge Cafe</h2>
                    </div>
                    <figure>
                        <img src={profile} alt="" />
                    </figure>
                </nav>
                <hr className='mt-3' />
            </div>
        </header>
    );
};

export default Navbar;