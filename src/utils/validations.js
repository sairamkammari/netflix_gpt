
export const loginFormValidation = (name, email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
const nameRegex = /^[\p{L}]+(?:[ '\u2019-][\p{L}]+)*$/u;

    if(!nameRegex.test(name)) {
        return 'please enter valid name'

    }
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address.';
  }

  if (!passwordRegex.test(password)) {
    return 'Password must be at least 8 characters and include a letter and a number.';
  }

  return '';
};
