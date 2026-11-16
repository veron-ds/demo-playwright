import { env } from '@src/config/env';

export interface Credentials {
  username: string;
  password: string;
}

export const standardUser: Credentials = {
  username: env.standardUser,
  password: env.password,
};

export const lockedUser: Credentials = {
  username: env.lockedUser,
  password: env.password,
};

export const checkoutInfo = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  postalCode: '1010',
} as const;