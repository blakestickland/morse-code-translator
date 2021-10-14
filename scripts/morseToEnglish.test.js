import { morseToEnglish } from "./morseToEnglish";

xdescribe("Test cases to for function which checks if input is English text or morse code", () => {
  it("should throw error if no arguments", () => {
    const noArgsError = new Error("No args found");
    expect(() => morseToEnglish()).toThrowError(noArgsError);
  });

  it("should return an alphanumeric string", () => {
    expect(morseToEnglish("... --- ...")).toMatch("sos");
    expect(morseToEnglish("--")).toMatch("m");
    expect(morseToEnglish("... / --- / ...")).toMatch("s o s");
    expect(morseToEnglish("..... ----.")).toMatch("59");
    expect(morseToEnglish("..--.. / --..--")).toMatch("? ,");
  });

});
