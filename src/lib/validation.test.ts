import { describe, expect, it } from "vitest";
import { isValidEmail } from "./validation";

describe("isValidEmail", () => {
  it.each(["user@example.com", "  user@example.com  ", "first.last@sub.domain.org"])("accepts %j", (value) => {
    expect(isValidEmail(value)).toBe(true);
  });

  it.each(["", "user", "user@", "@example.com", "user@example", "us er@example.com"])("rejects %j", (value) => {
    expect(isValidEmail(value)).toBe(false);
  });
});
