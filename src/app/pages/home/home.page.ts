import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Animation, AnimationController} from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { AfterViewInit, ElementRef, OnInit, ViewChild } from '@angular/core';

import { BarcodeScanner, SupportedFormat } from '@capacitor-community/barcode-scanner';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit,AfterViewInit{
  result = null;
  scanActivate= false;
  escaneando: boolean = false;
  @ViewChild('titulo', { read: ElementRef, static: true}) titulo: ElementRef;
  @ViewChild('bienvenido', { read: ElementRef, static: true}) bienvenido: ElementRef;
  @ViewChild('desarrolladores', { read: ElementRef, static: true}) desarrolladores: ElementRef;
  
  
  public usuario: Usuario;


  
  constructor(
    private activeroute: ActivatedRoute
  , private router: Router
  , private alertController: AlertController
  , private animationController: AnimationController
  , private loadingController: LoadingController) {
    this.router.navigate(['home']);


    
    //-------------------------------



    this.activeroute.queryParams.subscribe(params => {      
  if (this.router.getCurrentNavigation().extras.state) { 

    
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;

  } else {
    
  

    
  }
});
}

//------------------------------------------
ngOnInit() {

}
public ngAfterViewInit(): void {
  const animation = this.animationController
    .create()
    .addElement(this.titulo.nativeElement)
    .iterations(Infinity)
    .duration(10000)
    .fromTo('transform', 'translate(-80%)', 'translate(100%)')
    //.fromTo("color", "red", "green")
    
  


    const animation2 = this.animationController
    .create()
    .addElement(this.bienvenido.nativeElement)
    .iterations(Infinity)
    .duration(1000)
    .fromTo("color", "red", "green", )



    const animation3 = this.animationController
    .create()
    .addElement(this.desarrolladores.nativeElement)
    .iterations(Infinity)
    .fill('none')
    .duration(4000)
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '1' },
      { offset: 0.1, transform: 'scale(1.4)', opacity: '0.3' },
      { offset: 0.2, transform: 'scale(1)', opacity: '1' }
    ]);


  animation.play();
  animation2.play();
  animation3.play();
}

async checkPermission() {
  return new Promise(async (resolve) => {
    const status = await BarcodeScanner.checkPermission({ force: true });
    if (status.granted) {
      resolve(true);
    } else if (status.denied) {
      const alert = await this.alertController.create({
        header: 'no hay permiso',
        message: 'por favor permite el acceso a la camara en tu configuracion',
        buttons: [{
          text: 'No',
          role: 'Cancelar'
        },
        {
          text: 'abrir configuracion',
          handler: () =>{
            BarcodeScanner.openAppSettings();
            resolve(false);

          }
        }
      ]
      })
    }
  });
}

async comenzarEscaneo() {
  const allowed = await this.checkPermission();
  if (allowed) {
    this.escaneando = true;
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE] });
    if (result.hasContent) {
      this.result = result.content
      this.escaneando = false;
      alert(result.content);
    } 
    else {
      alert('No fue posible encontrar datos de código QR');
    }
  } 
  else {
    alert('No fue posible escanear, verifique que la aplicación tenga permiso para la cámara');
  }
}

detenerEscaneo() {
  BarcodeScanner.stopScan();
  this.escaneando = false;
}

ionViewWillLeave() {
  this.detenerEscaneo();
}












segmentChanged($event) {
  this.router.navigate(['home/' + $event.detail.value]);






}

















}
