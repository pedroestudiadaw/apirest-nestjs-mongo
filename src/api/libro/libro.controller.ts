import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LibroDto} from '../clases-dto/libro-dto';

@Controller('api/libro')
export class LibroController {

  @Get()
  verLibreria(): string{
    return "ver libreria";
  }

  @Get('/:id')
  verLibroPorId(@Param('id') id): string{
    return "ver libro: " + id;
  }

  @Post()
  addLibro(@Body() respuesta: LibroDto): string{
    return "añadir libro: " + respuesta.id;
  }

  @Put()
  editarLibro(@Body() respuesta: LibroDto): string {
    return "editar libro: " + respuesta.id;
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
