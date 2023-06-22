import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const fakeUser = {
  id: 1,
  name: 'Harlon',
  email: 'johndoe@gmail.com',
  avatarUrl: '',
  adresses: [
    {
      street: 'Rua da Alegria',
      number: '204',
      additionalComplement: 'Do lado da Rua da Felicidade',
      city: 'Campina Grande',
      state: 'PB',
      cep: '58400-000',
    },
    {
      street: 'Rua da Alegria',
      number: '204',
      additionalComplement: 'Do lado da Rua da Felicidade',
      city: 'Campina Grande',
      state: 'PB',
      cep: '58400-000',
    },
  ],
};

export default function MyAccount() {
  return (
    <main className="h-screen p-8">
      <section className="flex gap-4">
        <Avatar.Root className="flex h-16 w-16 rounded-full overflow-hidden">
          <Avatar.Image
            src={fakeUser.avatarUrl}
            alt={fakeUser.name}
            className="h-full w-full"
          />
          <Avatar.Fallback className="flex items-center justify-center h-full w-full text-base text-slate-950 bg-slate-200">
            {fakeUser.name[0]}
          </Avatar.Fallback>
        </Avatar.Root>

        <div className="flex flex-col">
          <strong>{fakeUser.name}</strong>
          <small>{fakeUser.email}</small>
        </div>
      </section>
    </main>
  );
}
