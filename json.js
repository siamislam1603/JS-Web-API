console.log("Javascript object notation (JSON)");
const student = {
    id: 12,
    name: "Jamal",
    favSongs: ["Believer", "Unstoppable", "Hall of Fame"],
    friends: ["Rashid", "Hasan", "Jalal"],
};
const studentJSON = JSON.stringify(student); //convert it into json
console.log(studentJSON);
// {"id":12,"name":"Jamal","favSongs":["Believer","Unstoppable","Hall of Fame"] ,"friends":["Rashid","Hasan","Jalal"]}
const JSONToObj = JSON.parse(studentJSON);
console.log(JSONToObj);