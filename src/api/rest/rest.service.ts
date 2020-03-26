import { Injectable } from '@nestjs/common';
import { LibroDto } from '../clases-dto/libro-dto';

@Injectable()
export class RestService {
  //Creación de array para rellenar con la respuesta
  public librosDTO: LibroDto[];
  //Constructor del servicio
  constructor() {
    this.librosDTO = [];
  }
  //Método para obterner el contendio
  getLibrosDtos(){
    return this.librosDTO;
  }
  //Método para la inserción
  addLibro(libroDto: LibroDto){
    this.librosDTO.push(libroDto);
  }

}
