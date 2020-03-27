import { Injectable } from '@nestjs/common';
import { LibroDto } from '../interfaces/clases-dto/libro-dto';
import { Model } from 'mongoose';
import { InjectModel} from '@nestjs/mongoose';
import { LibroBd} from '../interfaces/libro-bd';

@Injectable()
export class RestService {
  //Creación de array para rellenar con la respuesta
  public librosDTO: LibroDto[];
  //Constructor del servicio con inyección del modelo de BD
  constructor(@InjectModel('LibroBD')
              private readonly modelo: Model<LibroDto>) {
    this.librosDTO = [];
  }
  async findAll(): Promise<LibroDto[]>{
    return await this.modelo.find().exec();
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
