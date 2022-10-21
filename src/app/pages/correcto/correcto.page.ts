import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/model/Respuesta';
import { Correo } from 'src/app/model/Correo';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
})
export class CorrectoPage implements OnInit {

  public respuesta: Respuesta;
  public correo: Correo

  constructor(private router: Router, private toastController: ToastController, private activeroute: ActivatedRoute) { 
    this.respuesta = new Respuesta('');
    this.respuesta.respuesta= '';

    this.activeroute.queryParams.subscribe(params => {       // Utilizamos expresión lambda
      if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras

        // Si tiene datos extra, se rescatan y se asignan a una propiedad
        this.respuesta= this.router.getCurrentNavigation().extras.state.respuesta;

      } else {
        this.router.navigate(['/restablecer']);
      }
    })
  }

  ngOnInit() {
  }
  public Contra(): string {
    if (this.respuesta.respuesta.trim() === 'gato'){
      return '1234'
    }
    if (this.respuesta.respuesta.trim() === 'juanito'){
      return 'qwer'   
    }
    if (this.respuesta.respuesta.trim() === 'valparaiso'){
      return 'asdf'
    }
  }

}
