import { swapObjectKVP } from "./swapObjectKVP";

xdescribe("Test cases to for function swaps key value pairs in an object", () => {
  it("should throw error if no arguments", () => {
    const noArgsError = new Error("No args found");
    expect(() => swapObjectKVP()).toThrowError(noArgsError);
  });

  it("should return an object with kvps swapped", () => {
    expect(swapObjectKVP({a: ".-"})).toMatchObject({".-": "a"});
    expect(swapObjectKVP({"?": "..--.."})).toMatchObject({"..--..": "?"});
    expect(swapObjectKVP({9: "----."})).toMatchObject({"----.": "9"});
    expect(swapObjectKVP({_: "..--.-"})).toMatchObject({"..--.-": "_"});
  });

});