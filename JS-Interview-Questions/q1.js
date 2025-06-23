/* The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. 
Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses 
(Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) 
based on the length of their names.*/

/* an array containing student objects */
let students = [
    { firstName: "Magnus", age: 32 },
    { firstName: "Gukesh", age: 19 },
    { firstName: "Pragnanada", age: 20 },
    { firstName: "Sam", age: 45 },
    { firstName: "Harmanpreeth", age: 23 },
    { firstName: "Krishnaprasad", age: 50 },
    { firstName: "Ranganath", age: 55 }
]

/* a user difined function to allocate student objects to houses */
function allocateHouses(students) {

    let houseAllocation = {
        gryffinder: [],
        huffelpuff: [],
        ravenclaw: [],
        slytherin: [],
    }

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.firstName.length > 12) {
            houseAllocation.slytherin.push(student);
        }
        if (student.firstName.length >= 8 && student.firstName.length < 12) {
            houseAllocation.ravenclaw.push(student);
        }
        if (student.firstName.length >= 6 && student.firstName.length < 8) {
            houseAllocation.huffelpuff.push(student)
        }
        if (student.firstName.length >= 0 && student.firstName.length < 6) {
            houseAllocation.gryffinder.push(student)
        }
    }

    return houseAllocation;
}

let houseAllocation = allocateHouses(students);

console.log(houseAllocation);
