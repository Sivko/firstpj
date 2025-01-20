'use client';

import { div } from 'motion/react-client';
import Link from 'next/link';

export default function Main() {
    return (
        <div className='container mx-auto w-[1416px] h-[300px] w-min-[1050px] h-min-[285px]'>
            <div className='flex flex-col gap-3 container mx-auto'>
                <Link href='#' className='mt-7 flex justify-center'>
                    <img
                        className='rounded-2xl hover:shadow-2xl'
                        src='https://cdn1.ozonusercontent.com/s3/sellerassets/ww2150_q80/be8aa9e0-c2d2-11ef-aedd-ee0cb61a87aa.jpeg'
                    />
                </Link>
                <Link href='#' className='mt-2 flex justify-center w-full'>
                    <img
                        className='rounded-2xl hover:shadow-2xl'
                        src='https://ir.ozone.ru/s3/cms/0b/t3e/wc1450/1416_150_11_day.jpg'
                    />
                </Link>
            </div>
        </div>
    );
}



// w-[1416px] h-[300px] w-min-[1050px] h-min-[285px]