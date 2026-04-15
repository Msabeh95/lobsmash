/**
 * Base URL for the LobSmash app (Clerk sign-in/up). Override per environment via NEXT_PUBLIC_APP_URL.
 */
export function getAppUrl(): string {
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, "");
  }
  return "https://app.lobsmash.com";
}

export function appSignInUrl(): string {
  return `${getAppUrl()}/sign-in`;
}

export function appSignUpUrl(): string {
  return `${getAppUrl()}/sign-up`;
}
