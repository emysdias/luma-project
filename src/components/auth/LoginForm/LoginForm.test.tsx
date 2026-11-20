import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SESSION_KEY } from "@/lib/session";
import { LoginForm } from "./LoginForm";

const push = vi.fn();
vi.mock("next/navigation", () => ({ useRouter: () => ({ push }) }));

describe("LoginForm", () => {
  it("shows validation errors and focuses the first invalid field", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    await user.type(screen.getByLabelText("Email"), "not-an-email");
    await user.click(screen.getByRole("button", { name: /log in/i }));

    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
    expect(screen.getByText(/must have at least 8 characters/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toHaveFocus();
    expect(window.sessionStorage.getItem(SESSION_KEY)).toBeNull();
  });

  it("toggles password visibility", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    const password = screen.getByLabelText("Password");

    expect(password).toHaveAttribute("type", "password");
    await user.click(screen.getByRole("button", { name: "Show password" }));
    expect(password).toHaveAttribute("type", "text");
  });

  it("stores a session and redirects after a valid submit", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<LoginForm />);

    await user.type(screen.getByLabelText("Email"), "user@example.com");
    await user.type(screen.getByLabelText("Password"), "supersecret");
    await user.click(screen.getByRole("button", { name: /log in/i }));

    await vi.advanceTimersByTimeAsync(800);
    expect(await screen.findByText(/welcome back/i)).toBeInTheDocument();
    expect(JSON.parse(window.sessionStorage.getItem(SESSION_KEY)!).email).toBe("user@example.com");

    await vi.advanceTimersByTimeAsync(1200);
    expect(push).toHaveBeenCalledWith("/");
    vi.useRealTimers();
  });
});
