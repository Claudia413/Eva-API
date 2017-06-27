// groups-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  //const mongoose = require('mongoose')
  const mongooseClient = app.get('mongooseClient');

  const { Schema } = mongooseClient;

  const studentSchema = new Schema({
    // _id: { type: Number },
    name: { type: String, required: true },
    picture: { type: String, required: true },
    grades: { type: Array },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  const groups = new Schema({
    groupNumber: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    students: [studentSchema]
  });

  // const student = mongoose.model('student', studentSchema)

  return mongooseClient.model('groups', groups);
};
