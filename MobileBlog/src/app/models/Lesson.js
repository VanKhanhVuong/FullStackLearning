const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");

const Lesson = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        maxLength: 255,
        minLength: 1
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

Lesson.plugin(
    mongooseDelete, { 
        deletedAt: true, 
        overrideMethods: "all" 
    }
);

module.exports = mongoose.model("Lesson", Lesson);