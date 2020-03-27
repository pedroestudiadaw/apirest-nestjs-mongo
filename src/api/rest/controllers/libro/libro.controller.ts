import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LibroDto} from '../../interfaces/clases-dto/libro-dto';
import { RestService} from '../../services/rest.service';
import { LibroBd} from '../../interfaces/libro-bd';

@Controller('api/rest/libro')
export class LibroController {
/*
  //Creador del constructor para la conectar el servicio sin BD
  private libros: LibroDto[] = [];
  constructor(private readonly restService: RestService) {
    this.libros = this.restService.getLibrosDtos();
  }
*/
  //constructor para conectar el servicio con BD
  constructor(private restService: RestService) { }
/*
  //Rutas
  //GET sin llamada BS - básico
  @Get()
  verLibreria(): LibroDto[] {
    return this.restService.getLibrosDtos();
  }
   */
  @Get()
  async findAll(): Promise<LibroDto[]>{
    return await this.restService.findAll();
  }

  @Get('/:id')
  verLibroPorId(@Param('id') id): LibroDto[]{
    return LibroDto[id];
  }

  @Post()
  addLibro(@Body() respuesta: LibroDto): LibroDto{
    this.restService.addLibro(respuesta);
    return respuesta;
  }

  @Put('/:id')
  editarLibro(@Body() respuesta: LibroDto, @Param('id') idLibro): string {
    return "editar libro: " + respuesta.id + " - número libro: " + idLibro;
  }

  @Delete()
  eliminarLibreria(): string{
    return "Eliminar libreria";
  }

  @Delete('/:id')
  eliminarLibro(@Param('id') id): string{
    return  "Eliminado libro: " + id;
  }
}
