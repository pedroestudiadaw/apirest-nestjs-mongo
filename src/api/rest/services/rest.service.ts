import { Body, Injectable } from '@nestjs/common';
import { LibroDto } from '../interfaces/clases-dto/libro-dto';
import { Model } from 'mongoose';
import { InjectModel} from '@nestjs/mongoose';
import { Libro} from '../interfaces/clases-mongo/libro';

@Injectable()
export class RestService {
  //Creación de array para rellenar con la respuesta
  public librosDTO: LibroDto[];

  //Constructor del servicio con inyección del modelo de BD
  constructor(@InjectModel('Libro')
              private readonly modelo: Model<Libro>) {
    this.librosDTO = [];
  }
  //Método para obterner el contendio
  getLibrosDtos(){
    return this.librosDTO;
  }
  /*
  //Método para la inserción - Básico
  addLibro(libroDto: LibroDto){
    this.librosDTO.push(libroDto);
  }

   */
  //Métodos para la búsqueda con mongo
  async findAll(): Promise<Libro[]>{
    return await this.modelo.find().exec();
  }
  //Método para la inserción con mongo
  async crearLibro(libro: Libro): Promise<Libro>{
    const libroCreado = new this.modelo(libro);
    return await libroCreado.save();
  }
  //Método para mostrar
  async findById(id: string): Promise<Libro>{
    return await this.modelo.findById(id);
  }
  //Método para actualizar
  async upDateById(id: string, respuesta: Libro): Promise<Libro>{
    const cambios = { titulo: respuesta.titulo, autor: respuesta.autor, fecha: respuesta.fecha};
    await this.modelo.updateOne({_id : id}, cambios);
    return await this.modelo.findById(id);
  }
  //Método eliminar un libro
  async delete(id: string): Promise<Libro>{
    const libroEliminado = await this.modelo.findById(id);
    await this.modelo.findOneAndRemove({_id : id });
    return libroEliminado;
  }
}
