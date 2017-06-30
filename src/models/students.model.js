// students-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get("mongooseClient");

  const { Schema } = mongooseClient;

  const batchSchema = new Schema({
    number: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now }
  });

  const students = new Schema({
    name: { type: String, required: true },
    picture: { type: String, required: true },
    grades: { type: Array },
    batch: [batchSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model("students", students);
};
