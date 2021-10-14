import { getUserInput } from "./getUserInput";
//NOTE: to run the test, the getUserInput function needs an argument added, such as the word 'text', to replace getting the string from the user input. 

xdescribe("Test cases to check if user input can be translated based on the available morse code characters", () => {
  it("should throw error there is no userInput value", () => {
    const blankInputError = new Error("Input submitted was blank");
    expect(() => getUserInput("")).toThrowError(blankInputError);
    expect(() => getUserInput(" ")).toThrowError(blankInputError);
    expect(() => getUserInput("    ")).toThrowError(blankInputError);
  });

  it("should throw error if an invalid character is used", () => {
    const invalidCharError = new Error("Valid characters must be used");
    expect(() => getUserInput("()*^%r)")).toThrowError(invalidCharError);
    expect(() => getUserInput("&T)JN<")).toThrowError(invalidCharError);
    expect(() => getUserInput("hell<o")).toThrowError(invalidCharError);
    expect(() => getUserInput("[")).toThrowError(invalidCharError);
    expect(() => getUserInput("}")).toThrowError(invalidCharError);
    expect(() => getUserInput("|")).toThrowError(invalidCharError);
    expect(() => getUserInput("*")).toThrowError(invalidCharError);
    expect(() => getUserInput("%")).toThrowError(invalidCharError);
    expect(() => getUserInput("~")).toThrowError(invalidCharError);
    expect(() => getUserInput("`")).toThrowError(invalidCharError);
    expect(() => getUserInput("#")).toThrowError(invalidCharError);
  });

  it("should trim blank space from the beginning and end of the user input", () => {
    expect(getUserInput("  qwerty")).toMatch("qwerty");
    expect(getUserInput("i cAn fLy h1hg3r   ")).toMatch("i cAn fLy h1hg3r");
    expect(getUserInput("   ... -- ...   ")).toMatch("... -- ...");
    expect(getUserInput("   /... -- .../   ")).toMatch("/... -- .../");
  });
});
