import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isValidPhoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';

    // Expresión regular: Debe comenzar con '+' seguido de 7 a 15 dígitos
    const isValid = /^\+\d{7,15}$/.test(value);

    return isValid ? null : { isValidPhoneNumber: true };
  };
}
