import { englishToMorse } from "./englishToMorse";

xdescribe("Test cases to for function which checks if input is English text or morse code", () => {
  it("should throw error if no arguments", () => {
    const noArgsError = new Error("No args found");
    expect(() => englishToMorse()).toThrowError(noArgsError);
  });

  it("should return morse code", () => {
    expect(englishToMorse("sos")).toMatch("... --- ...");
    expect(englishToMorse("m")).toMatch("--");
    expect(englishToMorse("s o s")).toMatch("... / --- / ...");
  });
});
