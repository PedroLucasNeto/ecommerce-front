import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import * as Separator from '@radix-ui/react-separator';
import ProfileOption from '@/components/ProfileOption';
import { fakeUser } from '@/utils/data';

export default function MyAccount() {
  return (
    <main className="h-screen p-8">
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
        className="h-[1px] w-full my-4 bg-slate-300 md:bg-slate-200"
      />
      <section className="flex flex-col gap-2">
        {[1, 2, 3, 4].map((index) => (
          <ProfileOption key={index} />
        ))}
      </section>
    </main>
  );
}
