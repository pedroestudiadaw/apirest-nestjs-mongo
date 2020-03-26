import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('api/libro')
export class LibroController {

  @Get()
  verLibreria(): string{
    return "ver libreria";
  }
  @Post()
  addLibro(): string{
    return "añadir libro";
  }
  @Put()
  editarLibro(): string{
    return "editar libro";
  }
  @Delete()
  eliminarLibreria(): string{
    return "Eliminar libreria";
  }
}
