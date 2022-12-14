const BAD_REQUEST = 400;
const AUTHORIZATION_ERROR = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const CONFLICT = 409;
const SERVER_ERROR = 500;

const BAD_REQUEST_ID_MESSAGE = 'Некорректный id фильма';
const BAD_REQUEST_FILM_VALIDATION_MESSAGE = 'Некорректные данные фильма';
const BAD_REQUEST_USER_VALIDATION_MESSAGE = 'Некорректные данные пользователя';
const AUTHORIZATION_ERROR_MESSAGE = 'Необходима авторизация';
const FORBIDDEN_FILM_MESSAGE = 'Вы не можете удалить фильм';
const NOT_FOUND_FILM_MESSAGE = 'Фильм не найден';
const NOT_FOUND_USER_MESSAGE = 'Пользователь с id не найден';
const CONFLICT_EMAIL_MESSAGE = 'Данная почта уже существует';
const SERVER_ERROR_MESSAGE = 'Ошибка сервера';

module.exports = {
  BAD_REQUEST,
  AUTHORIZATION_ERROR,
  FORBIDDEN,
  NOT_FOUND,
  CONFLICT,
  SERVER_ERROR,
  BAD_REQUEST_ID_MESSAGE,
  BAD_REQUEST_FILM_VALIDATION_MESSAGE,
  BAD_REQUEST_USER_VALIDATION_MESSAGE,
  AUTHORIZATION_ERROR_MESSAGE,
  FORBIDDEN_FILM_MESSAGE,
  NOT_FOUND_FILM_MESSAGE,
  NOT_FOUND_USER_MESSAGE,
  CONFLICT_EMAIL_MESSAGE,
  SERVER_ERROR_MESSAGE,
};
