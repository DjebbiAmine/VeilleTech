const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const InfoSchema = new Schema({
  title: {
    type: Schema.Types.Mixed,
    required: true
  },
  description: {
    type: Schema.Types.Mixed
   
  },
  link: {
    type: Schema.Types.Mixed,
    required: true
  },
  pubDate: {
    type: Schema.Types.Mixed
  }

  
},{strict: false});

module.exports = InfoCollection = mongoose.model('infos', InfoSchema);