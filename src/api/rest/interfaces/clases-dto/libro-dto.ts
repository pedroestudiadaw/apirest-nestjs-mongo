import {IsString} from 'class-validator';

export class LibroDto {

  @IsString()
  id : string;

  @IsString()
  titulo : string;

  @IsString()
  autor : string;

  @IsString()
  fecha : string;

}
