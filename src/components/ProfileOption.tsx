import React from 'react';
import { MdHistory, MdLocationOn } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';

export default function ProfileOption() {
  return (
    <div className="flex justify-between p-2 text-sm rounded-md odd:bg-slate-100">
      <div className="flex items-center gap-2">
        <MdLocationOn className="text-base" />
        <strong>Meus endereços</strong>
      </div>
      <button className="flex justify-center items-center p-1">
        <IoIosArrowForward />
      </button>
    </div>
  );
}
/* 
<div className="flex justify-between p-2 text-sm">
        <div className="flex items-center gap-2">
          <MdHistory className="text-base" />
          <strong>Histórico de compras</strong>
        </div>
        <button className="flex justify-center items-center p-1">
          <IoIosArrowForward />
        </button>
      </div> */
