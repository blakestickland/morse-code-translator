
export const swapObjectKVP = (obj) => {
  // should throw error if no arguments
  if (obj === undefined) {
    throw new Error("No args found");
  }

  let result = {};
  for (let key in obj) {
    result[obj[key]] = key;
  }
  return result;
};
