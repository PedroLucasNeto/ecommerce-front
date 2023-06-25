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
    <header className="h-14 w-full flex justify-between items-center py-4 px-6 text-slate-800 bg-slate-200 shadow-sm shadow-slate-400/60">
      <Link href="/" className="font-semibold">
        Ecommerce
      </Link>
      <nav className="flex items-center gap-2.5 xs:gap-6">
        <div className="hidden gap-6 text-sm xs:flex">
          <Link
            href="/wishlist"
            className="flex items-center gap-1.5 cursor-pointer transition-all duration-300 ease-in-out hover:text-slate-950"
          >
            <MdOutlineFavoriteBorder className="h-5 w-5" />
            <strong>Lista de desejos</strong>
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-1.5 cursor-pointer transition-all duration-300 ease-in-out hover:text-slate-950"
          >
            <MdOutlineShoppingCart className="h-5 w-5" />
            <strong>Carrinho</strong>
          </Link>
        </div>
        <button className="flex items-center gap-1 py-1.5 px-2 text-xs text-slate-200 bg-slate-800 rounded-md transition-all duration-300 ease-in-out hover:bg-slate-900">
          <MdOutlineAccountCircle className="h-4 w-4" />
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
