import { ErrorLogger } from "./logger";

// Extracts the error message from the error object
type ErrorWithMessage = {
  message: string;
  response?: {
    data?: {
      message: string;
    };
  };
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>).message === "string"
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

function getErrorMessage(error: unknown) {
  const Error = toErrorWithMessage(error);

  return (
    (Error.response && Error.response.data && Error.response.data.message) ||
    Error.message ||
    Error.toString()
  );
}

const HandleError = (
  action: string,
  error: unknown,
  alert: boolean = false
) => {
  const message = getErrorMessage(error);
  ErrorLogger(`${action} failed: ${message}`);

  if (alert) {
    //send email to admin
  }

  return {
    error: true,
    message,
  };
};

export default HandleError;
