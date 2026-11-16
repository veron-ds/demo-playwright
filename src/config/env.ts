import 'dotenv/config';

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  baseUrl: required('UI_BASE_URL'),
  standardUser: required('STANDARD_USER'),
  lockedUser: required('LOCKED_USER'),
  password: required('SAUCE_PASSWORD'),
} as const;