let imdadul = {
    name: "Imdadul Haque",
    dob: 1997,
    age: function(currentYear){
        console.log(`${this.name} is ${currentYear - this.dob} years old!`)
    }
}
let maisha = {
    name: "Israt Jahan Maisha",
    dob: 2018
}
// imdadul.age(2022)
imdadul.age.call(maisha, 2022)