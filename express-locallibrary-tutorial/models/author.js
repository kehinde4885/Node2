// author schema code

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const { DateTime } = require("luxon");

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

//Virtual for author's full namr
AuthorSchema.virtual("name").get(function () {
  //To avoid errors in cases where an author does not have either
  // full name or first name
  // We want to make sure we handle the exception by returning
  // an empty string for that case

  let fullname = "";

  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }

  return fullname;
});

//Virtual for authors url
AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual("lifespan").get(function () {
  //"this" means tHis model(Author)

  const dob = this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED)
    : "NA";
  const dod = this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)
    : "Present";

  const lifespan = `${dob} - ${dod}`;

  return lifespan;
});

AuthorSchema.virtual("date_of_birth_formatted").get(function () {
  return this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED)
    : "NA";
});

AuthorSchema.virtual("date_of_death_formatted").get(function () {
  return this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)
    : "Present";
});

AuthorSchema.virtual("date_of_death_yyyy_mm_dd").get(function () {
  return this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toISODate()
    : "Present";
});

AuthorSchema.virtual("date_of_birth_yyyy_mm_dd").get(function () {
  return this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth).toISODate()
    : "Present";
});


// Export model
module.exports = mongoose.model("Author", AuthorSchema);
