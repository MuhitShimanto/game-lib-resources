export default function validatePassword(password) {
  if (password.length < 8) {
    return { valid: false, msg: "Password must be at least 8 characters long." };
  }

  if (!/[a-z]/.test(password)) {
    return { valid: false, msg: "Password must contain at least one lowercase letter." };
  }

  if (!/[A-Z]/.test(password)) {
    return { valid: false, msg: "Password must contain at least one uppercase letter." };
  }

  if (!/\d/.test(password)) {
    return { valid: false, msg: "Password must contain at least one number." };
  }

  if (!/[:@$!%*?&]/.test(password)) {
    return { valid: false, msg: "Password must contain at least one special character (@, $, !, %, *, ?, &)." };
  }

  return { valid: true, msg: "" };
}
