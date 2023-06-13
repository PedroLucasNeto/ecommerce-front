import Link from 'next/link';
import React from 'react';
import {
  MdMenu,
  MdOutlineAccountCircle,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
} from 'react-icons/md';

interface NavbarProps {
  setIsSideBarOpen: (isOpen: boolean) => void;
}

export default function Navbar({ setIsSideBarOpen }: NavbarProps) {
  const handleOpen = () => {
    setIsSideBarOpen(true);
  };

  return (
    <header className="w-full flex justify-between items-center py-4 px-6 text-slate-900 bg-slate-200 shadow-sm shadow-slate-400/60">
      <h1 className="font-semibold">Ecommerce</h1>
      <nav className="flex items-center gap-2.5 xs:gap-6">
        <ul className="hidden gap-4 xs:flex">
          <li className="flex items-center gap-1.5">
            <MdOutlineFavoriteBorder className="h-5 w-5" />
            <strong>Lista de desejos</strong>
          </li>
          <li className="flex items-center gap-1.5">
            <MdOutlineShoppingCart className="h-5 w-5" />
            <strong>Carrinho</strong>
          </li>
        </ul>
        <button className="flex items-center gap-1 py-1.5 px-2 text-sm text-slate-200 bg-slate-800 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-900">
          <MdOutlineAccountCircle className="h-5 w-5" />
          {true ? (
            <Link href="/users/1">Minha conta</Link>
          ) : (
            <Link href="/">Entrar</Link>
          )}
        </button>
        <button className="flex xs:hidden" onClick={handleOpen}>
          <MdMenu className="h-8 w-8" />
        </button>
      </nav>
    </header>
  );
}
