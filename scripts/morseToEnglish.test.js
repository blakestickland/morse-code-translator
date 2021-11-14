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


  it("should handle special characters", () => {
    expect(morseToEnglish("-.-.--")).toBe("!");
    expect(morseToEnglish("..--..")).toBe("?");
    expect(morseToEnglish(".-...")).toBe("&");
    expect(morseToEnglish(".--.-.")).toBe("@");
  });

  it("should handle single characters", () => {
    expect(morseToEnglish(".-")).toBe("a");
    expect(morseToEnglish("-..")).toBe("d");
    expect(morseToEnglish("--..")).toBe("z");
  });

  it("should handle numbers", () => {
    expect(morseToEnglish("-----")).toBe("0");
    expect(morseToEnglish(".....")).toBe("5");
    expect(morseToEnglish("----.")).toBe("9");
  });

  it("should handle periods or full stops", () => {
    expect(morseToEnglish(".-.-.-")).toBe(".");
  });

  it("should handle commas", () => {
    expect(morseToEnglish("--..--")).toBe(",");
  });

  it("should handle spaces", () => {
    expect(morseToEnglish(".... .. / .... ..")).toBe("hi hi");
    expect(morseToEnglish("... --- ... / .... ..")).toBe("sos hi");
  });

  it("should handle a mix of alphanumeric characters and symbols", () => {
    expect(morseToEnglish(".... --..-- .. .-.-.-")).toBe("h,i.");
    expect(morseToEnglish("... ----- --- -.-.-- ...")).toBe("s0o!s");
  });
});
