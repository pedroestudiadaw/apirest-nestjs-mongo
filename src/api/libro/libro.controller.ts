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
