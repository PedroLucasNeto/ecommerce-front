import React from 'react';

const fakeUser = {
  id: 1,
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  photoUrl: '',
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
    <main>
      <div>{fakeUser.name}</div>
    </main>
  );
}
