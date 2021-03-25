import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    error.path != null ?
    validationErrors[error.path] = error.message : null;
  });

  return validationErrors;
}
