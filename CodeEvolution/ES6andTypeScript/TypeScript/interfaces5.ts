//interface use to describe paticular type and u can specify properties

interface Persone{
    fname: string;
    lname: string;
    age: number;
}

let employee1: Persone = {
    fname: 'Nidhi',
    lname: 'Verma',
    age: 30
}

//error
// let employee1: Persone = {
//     fname: 'Nidhi',
//     lname: 'Verma',
// }

//make property optional : use ?

interface Student{
    fname: string;
    lname: string;
    id?: number;
}

let student1: Student = {
    fname: 'Nidhi',
    lname: 'Verma',
    id: 1123
}

let student2: Student = {
    fname: 'Nidhi',
    lname: 'Verma',
    //now ? make id to optonal
}