Laboratorio Formularios Angular
Crear un nuevo proyecto ng new angular-forms
Importar ReactiveFormsModule en el app.module
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
A continuación añadimos en nuestro app.component el FormGroupy el FormBuilder para crear nuestro objeto reactivo. Vemos que cada FormControl lleva un valor por defecto vacío y unas validaciones como requerido y de tipo email para el usuario.
export class AppComponent {
  formGroup: FormGroup;

  constructor (private _builder: FormBuilder) {
    this.formGroup = this._builder.group({
      usuario: ['', [Validators.email, Validators.required]],
      contrasena: ['', Validators.required]
    })
  }

}
En el template añadimos el formulario HTML. Podemos notar que cada input lleva el nombre del formControlName asignado en el paso anterior y adicionalmente añadimos [disabled]="!formGroup.valid" en el botón de Submit para prevenir que se inicie sesión si el formulario no es válido.
<form [formGroup]="formGroup">
  <label>Usuario</label>
  <input name="usuario" formControlName="usuario">
  <label>Contraseña</label>
  <input name="contrasena" type="password" formControlName="contrasena">
  <input type="submit" value="Iniciar Sesión" [disabled]="!formGroup.valid">
</form>
El siguiente paso es crear un método llamado onSubmit en nuestro componente.
  onSubmit(formulario: any) {
    alert(`
      Usuario: ${formulario.usuario}
      Contrasena: ${formulario.contrasena}
    `);
  }
Adicionamos el método submit al formulario <form [formGroup]="formGroup" (submit)="onSubmit(formGroup.value)">
Finalmente añadimos al archivo app.components.scss algo de estilos para visualizar mejor nuestra aplicación
form {
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-bottom: 20px;
  }
}
Corremos nuestra aplicación con ng serve
Visualizaremos el formulario con las 3 validaciones.
El usuario es requerido
El usuario es de tipo Email
La contraseña es requerida
