import { cn } from "@/lib/utils";

describe("cn()", () => {
  it("joins class names", () => {
    expect(cn("flex", "items-center")).toBe("flex items-center");
  });

  it("resolves conditionals and drops falsy values", () => {
    const isHidden = false;

    expect(cn("flex", isHidden && "hidden", undefined, "gap-2")).toBe("flex gap-2");
  });

  it("de-duplicates conflicting Tailwind utilities, last one winning", () => {
    expect(cn("w-12", "w-14")).toBe("w-14");
    expect(cn("text-textDark", "text-textGreen")).toBe("text-textGreen");
  });

  it("keeps non-conflicting utilities from the same family", () => {
    expect(cn("w-12", "max-md:w-6")).toBe("w-12 max-md:w-6");
  });
});
