import PropTypes from 'prop-types';

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
