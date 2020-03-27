import * as mongoose from 'mongoose';

export const Schema = new mongoose.Schema({
  id: String,
  titulo: String,
  autor: String,
  fecha: String,
});