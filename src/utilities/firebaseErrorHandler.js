const firebaseErrorHandler = (error) => {
  if (error.code === "auth/email-already-in-use") {
    return "An account already exists with this email.";
  } else if (error.code === "auth/invalid-email") {
    return "Invalid email format. Please check your email address.";
  } else if (error.code === "auth/operation-not-allowed") {
    return "Email/password accounts are not enabled. Please contact support.";
  } else if (error.code === "auth/weak-password") {
    return "Password is too weak. Please use a stronger password.";
  } else if (error.code === "auth/missing-email") {
    return "Please provide an email address.";
  } else if (error.code === "auth/missing-password") {
    return "Please provide a password.";
  } else if (error.code === "auth/invalid-credential") {
    return "Invalid credentials. Please try again.";
  } else if (error.code === "auth/network-request-failed") {
    return "Network error. Please check your internet connection.";
  } else if (error.code === "auth/too-many-requests") {
    return "Too many requests. Please try again later.";
  } else if (error.code === "auth/internal-error") {
    return "Internal error. Please try again later.";
  } else if (error.code === "auth/user-disabled") {
    return "This user account has been disabled.";
  } else if (error.code === "auth/user-not-found") {
    return "No user found with this email.";
  } else if (error.code === "auth/wrong-password") {
    return "Incorrect password. Please try again.";
  } else if (error.code === "auth/popup-closed-by-user") {
    return "Sign-in popup was closed before completing the sign-in.";
  } else if (error.code === "auth/cancelled-popup-request") {
    return "Popup sign-in request was cancelled. Please try again.";
  } else if (error.code === "auth/popup-blocked") {
    return "Popup was blocked by the browser. Please allow popups and try again.";
  } else if (error.code === "auth/account-exists-with-different-credential") {
    return "An account already exists with the same email but different sign-in method.";
  } else {
    // fallback for any unhandled error
    return `Unexpected error: ${error.message}`;
  }
};

export default firebaseErrorHandler;
