export const checkControllerButton = (
  name: string,
  email: string,
  password: string,
) => {
  let result = false;
  if (
    (name === '' && email === '' && password === '') ||
    (name !== '' && email === '' && password === '') ||
    (name === '' && email !== '' && password === '') ||
    (name === '' && email === '' && password !== '') ||
    (name !== '' && email !== '' && password === '') ||
    (name !== '' && email === '' && password !== '') ||
    (name === '' && email !== '' && password !== '')
  ) {
    result = false;
  } else {
    result = true;
  }
  return result;
};
