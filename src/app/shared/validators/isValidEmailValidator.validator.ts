import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isValidEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';

    const match = String(value)
      .toLowerCase()
      .match(
        /^[\w.-]+@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      return match ? null : { isValidEmail: true };
  };
}
