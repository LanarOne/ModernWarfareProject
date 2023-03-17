export const REGEX = {
  email: /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>/?]).{8,32}$/,
};

export const regexIsOk = (regex, value) => regex.test(value);
export const emailIsValid = (email) => regexIsOk(REGEX.email, email);
export const passwordIsValid = (password) =>
  regexIsOk(REGEX.password, password);
