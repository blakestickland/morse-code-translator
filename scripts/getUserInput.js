export const getUserInput = () => {
  const userInput = document.getElementById("translation").value;
  const trimmedInput = userInput.trim();
  // const trimmedInput = text.trim();

  // should throw error if empty input
  if (trimmedInput.length === 0) {
    alert("Input submitted was blank");
    throw new Error("Input submitted was blank");
  }

  const regex = /[A-Za-z0-9.,?'/()&:;=+\-_"$!@\s]/

  trimmedInput.split("").map((char) => {
    if (!char.match(regex)) {
      alert("Valid characters must be used");
      throw new Error("Valid characters must be used");
    } else {
      return trimmedInput;
    }
  });

  return trimmedInput;
}