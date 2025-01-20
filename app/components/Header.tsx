'use client';
import Link from 'next/link';

import { IoIosSearch } from 'react-icons/io';
import { VscAccount } from 'react-icons/vsc';
import { GoContainer } from 'react-icons/go';
import { GrFavorite } from 'react-icons/gr';
import { SlBasket } from 'react-icons/sl';
import { CiApple } from 'react-icons/ci';
import { IoMdCard } from 'react-icons/io';
import { GiCommercialAirplane } from 'react-icons/gi';
import { AiFillProduct } from 'react-icons/ai';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiClothes } from 'react-icons/gi';
import { CiMobile3 } from 'react-icons/ci';
import { GiGardeningShears } from 'react-icons/gi';
import { MdChildFriendly } from 'react-icons/md';
import { MdPercent } from 'react-icons/md';
import { LiaCrownSolid } from 'react-icons/lia';
import { LiaCertificateSolid } from 'react-icons/lia';

import { hover } from 'motion';

export default function Header() {
    return (
        <div className='container mx-auto w-[1416px] w-min-[1050px] '>
            <div className='flex flex-row justify-end text-[12px] mt-1'>
                <Link
                    className='hover:text-blue-600 ml-3 text-black bg-blue-100 rounded px-[4px]'
                    href='/'
                >
                    Стать продавцом
                </Link>
                <Link className='hover:text-blue-600 ml-3 text-black' href='/'>
                    Покупать как компания
                </Link>
                <Link className='hover:text-blue-600 ml-3 text-black' href='/'>
                    Мобильное приложение
                </Link>
                <Link className='hover:text-blue-600 ml-3 text-black' href='/'>
                    Подарочные сертификаты
                </Link>
                <Link className='hover:text-blue-600 ml-3 text-black' href='/'>
                    Помощь
                </Link>
                <Link className='hover:text-blue-600 ml-3 text-black' href='/'>
                    Пункты выдачи
                </Link>
            </div>

            <div className='flex flex-row justify-between mt-4'>
                <Link href='/'>
                    <img
                        className='w-[150px] '
                        src='/Ozon-logo.jpg'
                        alt='logo'
                    />
                </Link>
                <div className='hover:bg-blue-500 hover:border-blue-500 border-2 border-blue-600 rounded-md mr-4 ml-4 w-[140px] h-[40px] bg-blue-600 text-white text-[17px] flex justify-center items-center'>
                    <Link className='flex justify-center items-center ' href=''>
                        <AiFillProduct size={25} />
                        <span className='ml-1'>Каталог</span>
                    </Link>
                </div>

                <form
                    className='flex flex-row items-center justify-center'
                    action=''
                >
                    <div className='bg-blue-600 rounded-xl p-[2px] ml-1 mb-3 flex'>
                        <input
                            className=' w-[700px] h-[40px] rounded-xl border-blue-600 border-1 text-[16px] outline-none'
                            type='text'
                            placeholder=' Искать на Ozon'
                        />
                        <button className='px-4 hover:bg-blue-500 rounded-xl'>
                            <IoIosSearch size={25} color='white' />
                        </button>
                    </div>

                    <div className='flex flex-row'>
                        <Link
                            className='flex flex-col justify-center items-center ml-8 hover:text-blue-600'
                            href=''
                        >
                            <VscAccount size={23} />
                            <span className='text-[14px]'>Войти</span>
                        </Link>
                        <Link
                            className='flex flex-col justify-center items-center ml-8 hover:text-blue-600'
                            href=''
                        >
                            <GoContainer size={23} />
                            <span className='text-[14px]'>Заказы</span>
                        </Link>
                        <Link
                            className='flex flex-col justify-center items-center ml-8 hover:text-blue-600'
                            href=''
                        >
                            <GrFavorite size={23} />
                            <span className='text-[14px]'>Избранное</span>
                        </Link>
                        <Link
                            className='flex flex-col justify-center items-center ml-8 hover:text-blue-600'
                            href=''
                        >
                            <SlBasket size={23} />
                            <span className='text-[14px]'>Корзина</span>
                        </Link>
                    </div>
                </form>
            </div>

            <div className='flex flex-row justify-between items-center text-[14px] mt-3 text-black'>
                <Link
                    className='flex flex-row text-green-600 hover:text-blue-600'
                    href=''
                >
                    <CiApple className='mr-1' size={20} />
                    ozon fresh
                </Link>
                <Link className='flex flex-row hover:text-blue-600' href=''>
                    <IoMdCard className='mr-1' size={20} />
                    ozon карта
                </Link>
                <Link className='flex flex-row hover:text-blue-600' href=''>
                    <GiCommercialAirplane className='mr-1' size={20} />
                    Билеты, отели, туры
                </Link>
                <Link className='flex flex-row hover:text-blue-600' href=''>
                    <MdOutlineProductionQuantityLimits
                        className='mr-1'
                        size={20}
                    />{' '}
                    Товары нарасхват
                </Link>
                <Link className='flex flex-row hover:text-blue-600' href=''>
                    <GiClothes className='mr-1' size={20} /> Одежда и обувь
                </Link>
                <Link className='flex flex-row hover:text-blue-600' href=''>
                    <CiMobile3 className='mr-1' size={20} /> Электроника{' '}
                </Link>
                <Link className='flex flex-row hover:text-blue-600' href=''>
                    <GiGardeningShears className='mr-1' size={20} /> Дом и сад
                </Link>
                <Link className='flex flex-row hover:text-blue-600' href=''>
                    <MdChildFriendly className='mr-1' size={20} /> Детские
                    товары
                </Link>
                <Link className='flex flex-row hover:text-blue-600' href=''>
                    <MdPercent className='mr-1' size={20} /> Акции
                </Link>
                <Link className='flex flex-row hover:text-blue-600' href=''>
                    <LiaCrownSolid className='mr-1' size={20} /> Premium
                </Link>
                <Link className='flex flex-row hover:text-blue-600' href=''>
                    <LiaCertificateSolid className='mr-1' size={20} />{' '}
                    Сертификаты
                </Link>
            </div>
        </div>
    );
}
