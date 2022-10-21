import { Component, OnInit } from '@angular/core';
// Las clases Router y NavigationExtras son necesarias para que la página login le pase
// el nombre de usuario a la página home
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
// La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos
import { ToastController } from '@ionic/angular';
import { Respuesta } from 'src/app/model/Respuesta';
import { Correo } from 'src/app/model/Correo';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  public correo: Correo;
  public respuesta: Respuesta;

  constructor(private router: Router, private toastController: ToastController, private activeroute: ActivatedRoute) {
    this.respuesta = new Respuesta('');
    this.respuesta.respuesta= '';
    this.correo = new Correo();
    this.correo.CorreoUsuario = '';

    this.activeroute.queryParams.subscribe(params => {       // Utilizamos expresión lambda
      if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras

        // Si tiene datos extra, se rescatan y se asignan a una propiedad
        this.correo= this.router.getCurrentNavigation().extras.state.usuario;

      } else {
        /*
          Si no vienen datos extra desde la página anterior, quiere decir que el usuario
          intentó entrar directamente a la página home sin pasar por el login,
          de modo que el sistema debe enviarlo al login para que inicie sesión.
        */
        this.router.navigate(['/correo']);
      }
    })
  }
 

  public ngOnInit(): void {

  }

  public ingresar(): void{
    if(!this.validarUsuario(this.respuesta)){
      return;
    }

}

public validarUsuario(respuesta:Respuesta): boolean {

  const navigationExtras: NavigationExtras = {
    state: {
    respuesta: this.respuesta

    }
  }
  this.router.navigate(['/restablecer'], navigationExtras); 

    if (this.correo.CorreoUsuario.trim() === 'atorres@duocuc.cl'){
      if (this.respuesta.respuesta.trim() === 'gato'){
        this.router.navigate(['/correcto'], navigationExtras);

        return false;
      }}
    if (this.correo.CorreoUsuario.trim() === 'avalenzuela@duocuc.cl'){
      if (this.respuesta.respuesta.trim() === 'juanito'){
        this.router.navigate(['/correcto'], navigationExtras);
        return false;
      }}
    if (this.correo.CorreoUsuario.trim() === 'cfuentes@duocuc.cl'){
      if (this.respuesta.respuesta.trim() === 'Valparaiso'){
        this.router.navigate(['/correcto'], navigationExtras);
        return false;
      }}
    if (this.respuesta.respuesta.trim() !== ''){
      this.router.navigate(['/incorrecto']);
      return false;}
    else{
      this.mostrarMensaje('Ingrese informacion porfavor');
      return true;
    }
  }
  
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }
  public nombres(): string {
    if (this.correo.CorreoUsuario.trim() === 'atorres@duocuc.cl'){
      return 'Ana Torres Leiva'
    }
    if (this.correo.CorreoUsuario.trim() === 'avalenzuela@duocuc.cl'){
      return 'Alberto Valenzuela Nuñez'   
    }
    if (this.correo.CorreoUsuario.trim() === 'cfuentes@duocuc.cl'){
      return 'Carla Fuentes Gonzalez'
    }
  }

  public valRestablecer(): string {
    if (this.correo.CorreoUsuario.trim() === 'atorres@duocuc.cl'){
      return '¿Nombre de su mascota?'
    }
    if (this.correo.CorreoUsuario.trim() === 'avalenzuela@duocuc.cl'){
      return '¿Nombre de su mejor amigo/a?'   
    }
    if (this.correo.CorreoUsuario.trim() === 'cfuentes@duocuc.cl'){
      return '¿Lugar de nacimiento de su madre?'
    }
  }
}


