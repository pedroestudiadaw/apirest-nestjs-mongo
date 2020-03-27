import { IsString} from 'class-validator';

export class LibroBd {

  @IsString()
  id: string;

  @IsString()
  titulo: string;

  @IsString()
  autor: string;

  @IsString()
  fecha: string;

}
