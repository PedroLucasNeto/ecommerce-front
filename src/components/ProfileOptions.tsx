import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  MdInfoOutline,
  MdOutlineLocationOn,
  MdHistory,
  MdFace,
} from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';

import { User } from '@/types/User';

interface ProfileOptionsProps {
  data: User;
}

const options = [
  {
    icon: <MdInfoOutline className="text-lg" />,
    label: 'Informações pessoais',
  },
  {
    icon: <MdHistory className="text-lg" />,
    label: 'Histórico de compras',
  },
  {
    icon: <MdFace className="text-lg" />,
    label: 'Atendimento',
  },
];

export default function ProfileOptions({ data }: ProfileOptionsProps) {
  return (
    <section className="flex flex-col gap-4">
      {options.map((option, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-2 text-sm rounded-md shadow-sm shadow-slate-300"
        >
          {option.icon}
          <strong>{option.label}</strong>
        </div>
      ))}
      <Accordion.Root
        className="flex flex-col gap-2"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <Accordion.Item
          value="item-1"
          className="p-2 text-sm rounded-md shadow-sm shadow-slate-300"
        >
          <Accordion.Trigger className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MdOutlineLocationOn className="text-lg" />
              <strong>Meus endereços</strong>
            </div>
            <IoIosArrowForward className="rotate-90" />
          </Accordion.Trigger>
          <Accordion.Content className="py-3 px-4 mt-2 bg-slate-100 rounded-md">
            <ol className="list-decimal flex flex-col gap-2 px-4">
              {data.addresses.map(({ street, number }, index) => (
                <li key={index}>{`${street}, ${number}`}</li>
              ))}
            </ol>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
}
