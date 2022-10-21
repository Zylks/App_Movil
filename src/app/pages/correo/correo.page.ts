import { Component, OnInit } from '@angular/core';
// Las clases Router y NavigationExtras son necesarias para que la página login le pase
// el nombre de usuario a la página home
import { Router, NavigationExtras } from '@angular/router';
// La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos
import { ToastController } from '@ionic/angular';
import { Correo } from 'src/app/model/Correo';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {

  public correo: Correo;
  /*
    Para poder trabajar con Router y poder navegar hacia la página "home", debemos primero pasar como
    parámetro e instanciar un objeto de la clase "Router". Fijarse que el tipo de dato, que se pasa en el constructor
    es "Router" con mayúscula, porque se trata de una clase y éstas parten con letra mayúscula,
    mientras que "router" con minúscula es el objeto de esa clase, que usaremos para ejecutar el método "navigate".
  */
  constructor(private router: Router, private toastController: ToastController) {
    this.correo = new Correo();
    this.correo.CorreoUsuario = '';
  }

  public ngOnInit(): void {

    /*
      Las siguientes 3 líneas de código sirven para lo siguiente:
        Caso 1: Si las comentas, la página quedará lista para ingresar el nombre de usuario y la password
        Caso 2: Si dejas las instrucciones sin comentar, entonces entrará inmediatamente a la página home,
          usando el usuario por defecto "cgomezvega" con la password "123". Lo anterior es muy útil
          para el caso en que ya quedó lista la página de login y me interesa probar las otras páginas,
          de este modo se saltará el login y no tendrás que estar digitando los datos todo el tiempo.
    */
    // this.usuario.nombreUsuario = 'cgomez';
    // this.usuario.password = '5678';
    // this.ingresar();
  }

  public ingresar(): void {

    if(!this.validarCorreo(this.correo)) {
      return;
    }

    this.mostrarMensaje('¡Bienvenido!');

    /*
      Se declara e instancia un objeto de la clase NavigationExtras, para poder pasarle parámetros a la página home.
      Al objeto json "state" se le asigna un objeto con nombre de clave "login" y el valor "this.login", de modo que
      le pase la cuenta de usuario y su password a la página home.

      Nótese que al enviar this.login, realmente se está enviando los valores que el usuario digitó en las cajas de input,
      pues gracias a la directiva [(ngModel)]="login.usuario", el programa sabe que hay una relación directa de unión entre
      el valor de la propiedad login.usuario y el valor del control gráfico que lleva este mismo nombre.
    */
    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.correo
      }
    };
    this.router.navigate(['/restablecer'], navigationExtras); // Navegamos hacia el Home y enviamos la información extra
  }

  /*
    Usaremos validateModel para verificar que se cumplan las validaciones de los campos del formulario
  */
  public validarCorreo(usuario: Correo): boolean {

    const mensajeError = usuario.validarCorreo();

    if (mensajeError) {
      this.mostrarMensaje(mensajeError);
      return false;
    }

    return true;
  }

  /**
   * Muestra un toast al usuario
   *
   * @param mensaje Mensaje a presentar al usuario
   * @param duracion Duración el toast, este es opcional
   */
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }

}

