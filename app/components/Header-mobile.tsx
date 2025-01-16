"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineSearch } from "react-icons/hi";
function HeaderMobile() {

  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);

  function handleHamburgerClick() {
    setIsMenuVisible(!isMenuVisible);
  }

  function handleSearchClick(event:any) {
	event.preventDefault();
	setIsSearchVisible(!isSearchVisible);
  }

  return (
    <div className="flex justify-between bg-gray-100">

      <div>
        <button className="m-1" onClick={handleHamburgerClick}>
		  {<RxHamburgerMenu size={35}/>}
        </button>
        {isMenuVisible && (
          <ul className="flex flex-col m-1">
            <Link rel="stylesheet" href="#" className="mr-8 hover:text-blue-500">
              Главная
            </Link>
            <Link rel="stylesheet" href="#" className="mr-8 hover:text-blue-500">
              Каталог
            </Link>
            <Link rel="stylesheet" href="#" className="mr-8 hover:text-blue-500">
              Статьи
            </Link>
            <Link rel="stylesheet" href="#" className="mr-8 hover:text-blue-500">
              О компании
            </Link>
            <Link rel="stylesheet" href="#" className="mr-8 hover:text-blue-500">
              Контакты
            </Link>
          </ul>
        )}
      </div>

      <div>
        <form className="flex m-3 justify-end">

		{isSearchVisible && (
			<input
			  className="border-2 w-[200px] text-[14px]"
			  type="text"
			  placeholder=" Поиск ..."
			/>
		)}

          <button
		  onClick={handleSearchClick}
		  className="sticky right-0 bg-blue-500 hover:bg-blue-700 text-white py-1 text-[14px] px-4 rounded ml-1">
		  <HiOutlineSearch />
          </button>

        </form>
      </div>

    </div>
  );
}

export default HeaderMobile;
