import { validateEmail } from '@utils';

export const required = value => (value ? undefined : 'Value is required.');

export const minLength = value =>
  value.length < 8 ? 'The value must have at least 8 characters.' : undefined;

export const isEmail = value =>
  validateEmail(value) ? undefined : "Please verify your email. It's not valid.";

export const MSG_UNKNOWN_ID = 'Login Error: Valid User - Unknown Id';

export const MSG_UNKNOWN_USER = 'Get User Error: Valid Id - Unknown Data';

export const ERROR_READING_RESPONSE = 'There was a problem trying to read the error from the response.';
