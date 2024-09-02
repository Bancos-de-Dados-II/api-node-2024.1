const mongoose = require('../database/mongoose');
const {Schema} = mongoose;
const { randomUUID } = require('crypto');

const ocorrenciaSchema = new Schema({
  _id: {
    type: 'UUID',
    default: () => randomUUID()
  },
  titulo: String,
  descricao: String,
  tipo: {
    type: String,
    enum: ['Assalto', 'Sequestro', 'Homicídio', 'Outros']
  },
  data: {
    type: Date,
    default: new Date()
  },
  localizacao: {
    type: {
      type: String, 
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

ocorrenciaSchema.index(
  {titulo: 'text', descricao:'text'},
  {default_language: 'pt', weights:{titulo:2, descricao:1}}
);

const Ocorrencia = mongoose.model('ocorrencias', ocorrenciaSchema);

module.exports = Ocorrencia;