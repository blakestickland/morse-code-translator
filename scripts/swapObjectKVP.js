
export const swapObjectKVP = (obj) => {
  let result = {};
  for (let key in obj) {
    result[obj[key]] = key;
  }
  return result;
};
