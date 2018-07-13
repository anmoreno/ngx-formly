import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { FormlyNsFormFieldModule } from '@ngx-formly/nativescript/form-field';
import { FormlyFieldText } from './text-field.type';

@NgModule({
  declarations: [FormlyFieldText],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,

    FormlyNsFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'text-field',
          component: FormlyFieldText,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FormlyNsTextFieldModule { }
