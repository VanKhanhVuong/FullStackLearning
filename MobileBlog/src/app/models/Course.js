const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");

const Course = new Schema(
  {
    name: {
      type: String,
      maxLength: 255,
      minLength: 1,
      required: [true, "Please enter course name"],
    },
    description: {
      type: String,
      maxLength: 600,
      minLength: 1,
      required: [true, "Please enter course name"],
    },
    image: {
      type: String,
      maxLength: 255,
      minLength: 1,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true, // Automatically generated timestamps
  }
); // Time

// Add Mongoose-delete plugin to automatically set deletedAt and updatedAt fields
Course.plugin(
  mongooseDelete, {
    deletedAt: true,
    overrideMethods: "all",
  }
);

module.exports = mongoose.model("Course", Course);
