// https://snyk.io/blog/secure-javascript-url-validation/

export default function validateUrl(url: string) {
  try {
    new URL(url)
  } catch {
    return false
  }
  return true
}
