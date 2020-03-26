import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LibroDto} from '../clases-dto/libro-dto';
import { RestService} from '../rest/rest.service';

@Controller('api/libro')
export class LibroController {

  //Creador del constructor para la conectar el servicio
  private libros: LibroDto[] = []
  constructor(private readonly restService: RestService) {
    this.libros = this.restService.getLibrosDtos();
  }

  //Rutas
  @Get()
  verLibreria(): LibroDto[] {
    return this.restService.getLibrosDtos();
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
