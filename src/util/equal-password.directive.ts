import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[equalPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EqualPasswordDirective,
    multi: true
  }]

})
export class EqualPasswordDirective implements Validator {
  @Input() equalPassword: string;
  validate(control: AbstractControl): {[key: string]: any} | null {
    const controlToCompare = control.parent.get(this.equalPassword);
    if(controlToCompare && controlToCompare.value != control.value){
      return { 'notEqual': true };
    }

    return null;
  }
}
