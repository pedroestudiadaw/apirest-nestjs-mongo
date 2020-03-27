import { IsString} from 'class-validator';

export class Libro {

  _id: string;

  @IsString()
  titulo: string;

  @IsString()
  autor: string;

  @IsString()
  fecha: string;

}
