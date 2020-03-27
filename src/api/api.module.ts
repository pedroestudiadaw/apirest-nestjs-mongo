import { Module } from '@nestjs/common';
import { LibroController } from './rest/controllers/libro/libro.controller';
import { RestService } from './rest/services/rest.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LibroSchema } from './rest/schemas/libro.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Libro',
      schema: LibroSchema,
      collection: 'librobd'}])],
  controllers: [LibroController],
  providers: [RestService]
})
export class ApiModule {}
