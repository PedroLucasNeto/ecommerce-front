import React from 'react';
import { MdMenu } from 'react-icons/md';

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
      <nav className="flex items-center gap-2.5">
        <ul className="hidden lg:flex">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <div>
          <button className="py-0.5 px-2 text-sm text-slate-200 bg-slate-800 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-900">
            Login
          </button>
        </div>
        <button className="flex lg:hidden" onClick={handleOpen}>
          <MdMenu className="h-8 w-8" />
        </button>
      </nav>
    </header>
  );
}
