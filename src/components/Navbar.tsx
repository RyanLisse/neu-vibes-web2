import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
// import { GoogleLogin, googleLogout } from '@react-oauth/google';

// import useAuthStore from '../store/authStore';
// import { IUser } from '../types';
import { createOrGetUser } from '../utils';
import Logo from '@utils/Logo-text.png';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between w-full px-4 py-2 border-b-2 border-gray-200'>
            <Link href='/'>
                <div className='w-[100px] md:w-[130px]'>
                    <Image
                        className='cursor-pointer'
                        src={Logo}
                        alt='logo'
                        layout='responsive'
                    />
                </div>
            </Link>
        </div>
    );
};

export default Navbar;