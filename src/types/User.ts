export interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
  addresses: {
    street: string;
    number: string;
    additionalComplement: string;
    city: string;
    state: string;
    cep: string;
  }[];
}
