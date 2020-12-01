const util = require("util");
const fs = require("fs");

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv1 = require("uuid/v1");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {

  read() {
    return readFileAsync("db/db.json", "utf8");
  }

  write(notes) {
    return writeFileAsync("db/db.json", JSON.stringify(notes));
  }

  // DEFINE A FUNCTION getNotes(). INSIDE THE FUNCTION ...
  // 1. CALLS read() TO READ DATA FROM THE FILE AND CONVERT THE DATA 
  //    FROM THE FILE INTO AN ARRAY OF OBJECTS USING JSON.parse() AND STORE IT TO A VARIABLE
  // 2. THEN RETURN THE ARRAY TO THE CALLER
  // 3. IF THE DATA IS EMPTY THEN RETURN AN EMPTY ARRAY TO THE CALLER
  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;

      // If notes isn't an array or can't be turned into one, send back a new empty array
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }

      return parsedNotes;
    });
  }

  // DEFINE A FUNCTION, addNote(note), WHICH TAKES A SINGLE NOTE AS INPUT PARAMETER
  // INSIDE THE FUNCTION ...
  // 1. DESTRUCTURE TITLE AND TEXT PROPERTIES FROM note THE INPUT PARAMETER
  // 2. IF EITHER TITLE OR TEXT PROPERTY IS EMPTY, IT WILL JUST THROW THE ERROR AS EXCEPTION
  // 3. CREATE A NEW NOTE OBJECT, newNote, to STORE TITLE, TEXT, AND ID (BY CALLING uuidv1()) PROPERTIES
  // 4. GET ALL THE NOTES BY CALLING this.getNote() METHOD AND STORE THE RETURN DATA TO A VARIALBLE notes
  // 5. USING notes AND newNote TO CREATE A NEW ARRAY OF NOTE OBJECTS
  // 6. WRITE THE NEW ARRAY OF NOTE OBJECTS TO THE FILE BY CALLING this.write(THE-NEW-NEW-ARRAY-OF-NOTE-OBJECTS)
  // 7. RETURN THE NEW NOTE TO THE CALLER

  addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }

    // Add a unique id to the note using uuid package
    const newNote = { title, text, id: uuidv1() };

    // Get all notes, add the new note, write all the updated notes, return the newNote
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }

  // DEFINE A FUNCTION removeNote(id) WHICH TAKES ID OF THE NOTE AS INPUT PARAMETER
  // INSIDE THE FUNCTION ...
  // 1. GET ALL NOTES BY CALLING this.getNotes() AND REMOVE THE NOTE WITH THE GIVEN ID BY CALLING 
  //    ARRAY FILTER METHOD
  // 2. WRITE THE FILTERED NOTES TO THE FILE BY CALLING this.write(FILTERED-NOTES-ARRAY)
  removeNote(id) {
    // Get all notes, remove the note with the given id, write the filtered notes
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }
}

module.exports = new Store();
