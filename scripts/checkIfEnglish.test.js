import { checkIfEnglish } from "./checkIfEnglish";

describe("Test cases to for function which checks if input is English text or morse code", () => {
    it("should throw error if no arguments", () => {
    const noArgsError = new Error("No args found");
    expect(() => checkIfEnglish()).toThrowError(noArgsError);
    });

    it("should return a boolean value of true if input contains alphanumeric characters", () => {
      expect(checkIfEnglish("qwerty")).toBe(true);
      expect(checkIfEnglish("()r)")).toBe(true);
      expect(checkIfEnglish("&T)JN")).toBe(true);
      expect(checkIfEnglish("i cAn fLy h1hg3r")).toBe(true);
    });

    it("should return a boolean value of false if input only contains morse characters", () => {
      expect(checkIfEnglish("... -- ...")).toBe(false);
      expect(checkIfEnglish(".- /..--/ / /)")).toBe(false);
      expect(checkIfEnglish("// -- ..")).toBe(false);
      expect(checkIfEnglish(".-. .-- .")).toBe(false);
    });
})