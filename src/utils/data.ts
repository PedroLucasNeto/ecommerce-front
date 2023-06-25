import { User } from '@/types/User';

export const fakeUser: User = {
  id: 1,
  name: 'Harlon',
  email: 'johndoe@gmail.com',
  avatarUrl: 'https://avatars.githubusercontent.com/u/89430601?v=4',
  addresses: [
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
