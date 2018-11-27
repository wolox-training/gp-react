import PropTypes from 'prop-types';

export const LINES = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

export const FORM_SIGIN = 'loginForm';

export const ERROR_404 = 'Sorry. 404 page. Don`t cry.';

export const OFFLINE_MESSAGE = 'Sorry. We are offline. Please come back in a few minutes.';

export const WE_ARE_ONLINE = true;

export const USER_ID = 1;

export const USER_INI = {
  realm: 'string',
  username: 'ghporras@gmail.com',
  email: 'ghporras@gmail.com',
  emailVerified: true,
  password: '123123123',
  gender: 'Male',
  region: 'Colombia',
  phone: '(300) 281 8761',
  birthday: '08/11/1973',
  name: 'Gabriel',
  surname: 'Porras'
};

export const USER_DATA_SHAPE = {
  birthday: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};
