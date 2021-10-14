import { checkUserInput } from "./checkUserInput";

describe("Test cases to for function which checks if input is English text or morse code", () => {
  it("should throw error if no arguments", () => {
    const noArgsError = new Error("No args found");
    expect(() => checkUserInput()).toThrowError(noArgsError);
  });

  it("should return a corresponding value to a key", () => {
      const translation = {
        englishText: "sos",
        morseCode: "... --- ...",
      };
    expect(translation.englishText).toBe("sos");
    expect(translation.morseCode).toBe("... --- ...");
  });

});
