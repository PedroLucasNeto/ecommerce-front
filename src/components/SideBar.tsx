import React from 'react';
import { MdClose } from 'react-icons/md';

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
        className={`fixed z-20 top-0 left-0 min-h-full h-auto w-56 overflow-y-auto flex flex-col p-6 bg-slate-200 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end mb-2">
          <button onClick={handleClose}>
            <MdClose className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          <li>Ofertas</li>
          <li>Categorias</li>
          <li>Seu carrinho</li>
          <li>Configurações</li>
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
