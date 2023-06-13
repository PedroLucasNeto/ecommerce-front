import React from 'react';
import Navbar from './Navbar';
import Sidebar from './SideBar';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);

  return (
    <div className="min-h-screen">
      <Sidebar isOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
      <Navbar setIsSideBarOpen={setIsSideBarOpen} />
      <div className="flex flex-col  text-slate-900">{children}</div>
    </div>
  );
}
