import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup: FormGroup;

  constructor (private _builder: FormBuilder) {
    this.formGroup = this._builder.group({
      usuario: ['', [Validators.email, Validators.required]],
      contrasena: ['', Validators.required]
    })
  }
  onSubmit(formulario: any) {
    alert(`
      Usuario: ${formulario.usuario}
      Contrasena: ${formulario.contrasena}
    `);
  }

}
