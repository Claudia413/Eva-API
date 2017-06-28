// students-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const { Schema } = mongooseClient;

  const students = new Schema({
    name: { type: String, required: true },
    picture: { type: String, required: true },
    grades: { type: Array },
    batch: { type: Number},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  const batches = new Schema({
    number: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    students: [students]
  })

  return mongooseClient.model('students', students);
};
