import { Module } from '@nestjs/common';
import { LibroController } from './rest/controllers/libro/libro.controller';
import { RestService } from './rest/services/rest.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from './rest/schemas/schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'LibroBD',
      schema: Schema }])],
  controllers: [LibroController],
  providers: [RestService]
})
export class ApiModule {}
