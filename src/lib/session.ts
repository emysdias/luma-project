/**
 * Minimal mock session for the challenge. There is no backend: a successful
 * login just stores the email in sessionStorage so the UI can react to it.
 */
export const SESSION_KEY = "luma:session";

export type Session = {
  email: string;
  signedInAt: string;
};

export function saveSession(email: string): Session {
  const session: Session = { email, signedInAt: new Date().toISOString() };
  window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}
