import Link from 'next/link';
import React from 'react';
import {
  MdClose,
  MdOutlineAccountCircle,
  MdOutlineFavoriteBorder,
  MdOutlineHome,
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
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-1.5">
            <MdOutlineHome className="h-5 w-5" />
            <span>Ínicio</span>
          </Link>
          <Link href="/wishlist" className="flex items-center gap-1.5">
            <MdOutlineFavoriteBorder className="h-5 w-5" />
            <span>Lista de desejos</span>
          </Link>
          <Link href="/cart" className="flex items-center gap-1.5">
            <MdOutlineShoppingCart className="h-5 w-5" />
            <span>Seu carrinho</span>
          </Link>
          <Link href="/users/1" className="flex items-center gap-1.5">
            <MdOutlineAccountCircle className="h-5 w-5" />
            <span>Entrar</span>
          </Link>
        </div>
      </aside>
      <div
        className={`absolute top-0 left-0 h-full w-full bg-black/90 backdrop-blur-sm 
        xs:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={handleClose}
      ></div>
    </>
  );
}
