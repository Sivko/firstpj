'use client';

import { div } from 'motion/react-client';
import Link from 'next/link';

export default function Main() {
    return (
        <div className='flex justify-center mt-7'>
            <Link href='#' className=''>
                <img
                    className='rounded-2xl hover:shadow-2xl'
                    src='https://ir.ozone.ru/s3/cms/0b/t3e/wc1450/1416_150_11_day.jpg'
                />
            </Link>
        </div>
    );
}
