import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import * as Separator from '@radix-ui/react-separator';
import { MdOutlineLogout } from 'react-icons/md';

import ProfileOptions from '@/components/ProfileOptions';
import { fakeUser } from '@/utils/data';

export default function MyAccount() {
  return (
    <main className="p-8">
      <section className="flex gap-4">
        <Avatar.Root className="flex h-14 w-14 rounded-full overflow-hidden">
          <Avatar.Image
            src={fakeUser.avatarUrl}
            alt={fakeUser.name}
            className="h-full w-full pointer-events-none"
          />
          <Avatar.Fallback
            className="flex items-center justify-center h-full w-full text-base  
          font-bold text-slate-900 bg-orange-500"
          >
            {fakeUser.name[0]}
          </Avatar.Fallback>
        </Avatar.Root>
        <div className="flex flex-col">
          <strong>{fakeUser.name}</strong>
          <small>{fakeUser.email}</small>
        </div>
      </section>
      <Separator.Root
        orientation="horizontal"
        className="h-[1px] w-full my-8 bg-slate-200"
      />
      <ProfileOptions data={fakeUser} />
      <Separator.Root
        orientation="horizontal"
        className="h-[1px] w-full my-8 bg-slate-200"
      />
      <button className="flex items-center gap-2 py-2 px-4 text-sm text-slate-100 bg-slate-800 rounded-md transition-all duration-300 ease-in-out hover:bg-slate-900">
        <MdOutlineLogout className="text-lg" />
        <strong>Sair da conta</strong>
      </button>
    </main>
  );
}
