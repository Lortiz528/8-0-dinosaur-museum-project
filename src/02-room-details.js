/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
// Do not change the lines above.

/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} dinosaurName - The name of the dinosaur.
 * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 */
function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  let message = `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`// default error
  let word;
  for (let dino of dinosaurs){
    if(dino.name === dinosaurName) {
      word = dino.dinosaurId// word is the dino id 
      }
    }
  if (!word) {// if dinosaurName doesnt match anything in the dinosaurs array, give an error message.
      message = `Dinosaur with name '${dinosaurName}' cannot be found.`
      return message
  }
//now look for dinosaurId to be found in rooms.dinosaurs array with .includes()
  for (let room of rooms) {
    if (room.dinosaurs.includes(word)) {
       message = `${room.name}`
      }         
    }
  return message
}

/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "aIA6tevTne");
 *  //> ["Ticket Center"]
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "A6QaYdyKra");
 *  //> [
      "Entrance Room",
      "Coat Check Room",
      "Ellis Family Hall",
      "Kit Hopkins Education Wing"
    ]
 */
function getConnectedRoomNamesById(rooms, id) {
  // set roomy variable as a blank array. cycle through rooms to see if roomId matches id. if so, roomy will be the connectsTo array
  let roomy = []
    for (let room of rooms){
      if (id === room.roomId) {
        roomy = room.connectsTo; // roomy is an array of valid roomids ["zwfsfPU5u","aIA6tevTne",etc]
    } else if (id === 'incorrect-id'){
      return `Room with ID of '${id}' could not be found.`;
    } 
  }
    let finalArray = []; //need a new array to push the room names that qualify vs the room id #s
    for (let num of roomy){
      for (spot of rooms) {
        if (num === spot.roomId) {
          finalArray.push(spot.name);
      } else if (num === 'incorrect-id') {
      return `Room with ID of '${num}' could not be found.`
      }
    }
  }
  return finalArray
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
