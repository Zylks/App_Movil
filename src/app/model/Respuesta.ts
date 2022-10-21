export class Respuesta {

    public respuesta ='';


constructor(
    respuesta: string,
)
{
    this.respuesta = respuesta

}

public contra(): string {
    if (this.respuesta.trim() === 'gato'){
        return '1234'
    }
    if (this.respuesta.trim() === 'juanito'){
        return 'Alberto Valenzuela Nuñez'   
    }
    if (this.respuesta.trim() === 'valparaiso'){
        return 'Carla Fuentes Gonzalez'
    }
}

}