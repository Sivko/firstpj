'use client'
import { useState } from 'react';

function HeaderMobile() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className='cursor-pointer border-none outline-none bg-transparent'
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        Гамбургер
      </button>

      {isOpen && (
        <ul className='list-none m-0 p-0'>
          <li className='display-block text-left text-[16px] h-[32px]'>Главная</li>
          <li className='display-block text-left text-[16px] h-[32px]'>Контакты</li>
        </ul>
      )}
    </div>
  );
}

export default HeaderMobile;

  
  



// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDyxPMDK94jyXRTrkiTDNXnEWjZ7dKcoVoXw&s 