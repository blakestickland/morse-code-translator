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

  it("should handle special characters", () => {
    expect(englishToMorse("!")).toBe("-.-.--");
    expect(englishToMorse("?")).toBe("..--..");
    expect(englishToMorse("&")).toBe(".-...");
    expect(englishToMorse("@")).toBe(".--.-.");
  });

  it("should handle single characters", () => {
    expect(englishToMorse("a")).toBe(".-");
    expect(englishToMorse("d")).toBe("-..");
    expect(englishToMorse("z")).toBe("--..");
  });

  it("should handle numbers", () => {
    expect(englishToMorse("0")).toBe("-----");
    expect(englishToMorse("5")).toBe(".....");
    expect(englishToMorse("9")).toBe("----.");
  });

  it("should handle periods or full stops", () => {
    expect(englishToMorse(".")).toBe(".-.-.-");
  });

  it("should handle commas", () => {
    expect(englishToMorse(",")).toBe("--..--");
  });

  it("should handle uppercase characters", () => {
    expect(englishToMorse("HI")).toBe(".... ..");
    expect(englishToMorse("SOS")).toBe("... --- ...");
  });

  it("should handle lowercase characters", () => {
    expect(englishToMorse("hi")).toBe(".... ..");
    expect(englishToMorse("sos")).toBe("... --- ...");
  });

  it("should handle a mix of uppercase and lowercase characters and symbols", () => {
    expect(englishToMorse("h,I.")).toBe(".... --..-- .. .-.-.-");
    expect(englishToMorse("s0o!S")).toBe("... ----- --- -.-.-- ...");
  });
});
