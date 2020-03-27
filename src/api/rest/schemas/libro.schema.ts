import * as mongoose from 'mongoose';

export const LibroSchema = new mongoose.Schema({
  //id de base mongo se puede prescindir
  _id: String,
  //datos del esquema
  titulo: String,
  autor: String,
  fecha: String,
});