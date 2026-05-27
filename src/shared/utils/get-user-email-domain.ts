export function getUserEmailDomain(
  email: string
) {
  return email.split("@")[1] ?? "";
}
