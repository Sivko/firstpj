"use client";

import Link from "next/link";

interface ITaskItem {
  id: number;
  name: string;
  createAtAdd: string;
  isActive: boolean;
}

export default function HeaderDecktop() {
  return (
    <div className="flex justify-between bg-gray-100">
      <header className="">
        <div className="flex flex-row justify-between m-3 ml-[100px] text-bold text-[28px]">
          <Link rel="stylesheet" href="#" className="mr-8 hover:text-blue-500">
            Главная
          </Link>
          <Link rel="stylesheet" href="#" className="mr-8 hover:text-blue-500">
            Каталог
          </Link>
          <Link rel="stylesheet" href="#" className="mr-8 hover:text-blue-500">
            О компании
          </Link>
          <Link rel="stylesheet" href="#" className="mr-8 hover:text-blue-500">
            Статьи
          </Link>
          <Link rel="stylesheet" href="#" className="mr-8 hover:text-blue-500">
            Контакты
          </Link>
        </div>
      </header>
      <div>
        <form className="flex m-3 justify-end">
          <input
            className="border-2 w-[400px] text-[14px]"
            type="text"
            placeholder=" Поиск ..."
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 text-[14px] px-4 rounded ml-1">
            Искать
          </button>
        </form>
      </div>
    </div>
  );
}
