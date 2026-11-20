import { describe, expect, it } from "vitest";
import { cn } from "./cn";
import { omit } from "./omit";
import { SESSION_KEY, saveSession } from "./session";

describe("cn", () => {
  it("joins truthy class names and skips falsy ones", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });
});

describe("omit", () => {
  it("returns a copy without the given keys", () => {
    const source = { a: 1, b: 2, c: 3 };
    expect(omit(source, ["a", "c"])).toEqual({ b: 2 });
    expect(source).toEqual({ a: 1, b: 2, c: 3 });
  });
});

describe("saveSession", () => {
  it("stores the email in sessionStorage", () => {
    const session = saveSession("user@example.com");
    expect(JSON.parse(window.sessionStorage.getItem(SESSION_KEY)!)).toEqual(session);
    expect(session.email).toBe("user@example.com");
  });
});
