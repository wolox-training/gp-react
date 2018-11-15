import { validateEmail } from '@utils';

export const required = value => (value ? undefined : 'Value is required.');

export const minLength = value =>
  value.length < 8 ? 'The value must have at least 8 characters.' : undefined;

export const isEmail = value =>
  validateEmail(value) ? undefined : "Please verify your email. It's not valid.";
