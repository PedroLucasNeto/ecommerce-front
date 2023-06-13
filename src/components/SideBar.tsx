import React from 'react';
import {
  MdClose,
  MdOutlineAccountCircle,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
} from 'react-icons/md';

interface SidebarProps {
  isOpen: boolean;
  setIsSideBarOpen: (isOpen: boolean) => void;
}

export default function SideBar({ isOpen, setIsSideBarOpen }: SidebarProps) {
  const handleClose = () => {
    setIsSideBarOpen(false);
  };

  return (
    <>
      <aside
        className={`fixed z-20 top-0 left-0 min-h-full h-auto w-56 overflow-y-auto flex flex-col 
        p-6 bg-slate-200 transition-all duration-300 ease-in-out xs:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end mb-6">
          <button onClick={handleClose}>
            <MdClose className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-1">
            <MdOutlineFavoriteBorder className="h-5 w-5" />
            <span>Lista de desejos</span>
          </li>
          <li className="flex items-center gap-1">
            <MdOutlineShoppingCart className="h-5 w-5" />
            <span>Seu carrinho</span>
          </li>
          <li className="flex items-center gap-1">
            <MdOutlineAccountCircle className="h-5 w-5" />
            <span>Entrar</span>
          </li>
        </ul>
      </aside>

      <div
        className={`absolute top-0 left-0 h-full w-full bg-black/90 backdrop-blur-sm 
        xs:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={handleClose}
      ></div>
    </>
  );
}
