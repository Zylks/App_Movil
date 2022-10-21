export class Correo {
    public CorreoUsuario = '';
    public respuesta = '';
  
    public validarNombreUsuario(): string {
      if (this.CorreoUsuario.trim() === '') {
        return 'Para ingresar al sistema debe ingresar su correo.';
      }
      return '';
    }
    public validarCorreo(): string {
        if (this.CorreoUsuario.trim() === 'atorres@duocuc.cl'){
          return'';
        }else if(this.CorreoUsuario.trim() === 'avalenzuela@duocuc.cl'){
          return'';
        }else if(this.CorreoUsuario.trim() === 'cfuentes@duocuc.cl'){
          return'';
      }else{
        return this.validarCorreo();
      }
  }
  public valRespuesta(): string{
    if (this.CorreoUsuario.trim() === 'atorres@duocuc.cl'){
      if (this.respuesta.trim() !== 'gato'){
        return 'Respuesta incorrecta'
      }
    }
    if (this.CorreoUsuario.trim() === 'avalenzuela@duocuc.cl'){
      if (this.respuesta.trim() !== 'juanito'){
        return 'Respuesta incorrecta'
      }
    }
    if (this.CorreoUsuario.trim() === 'cfuentes@duocuc.cl'){
      if (this.respuesta.trim() !== 'valparaiso'){
        return 'Respuesta incorrecta'
      }
    }
  }
}