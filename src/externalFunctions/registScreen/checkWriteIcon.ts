export const checkWriteIcon = (checkEl: string) => {
  let result = false;
  if (checkEl !== '') {
    result = false;
  } else {
    result = true;
  }
  return result;
};
