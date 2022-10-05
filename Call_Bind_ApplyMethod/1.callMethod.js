let customObj = {
    name: "Imdadul Haque",
    uniName: "Daffodil International University",
    age: 24,
    anotherObj:{
        name: "Israt Jahan Maisha",
        age: 4,
        objValue: function(){
            console.log(`My name is ${this.name} and my age is ${this.age}`)
        }
    }
}

customObj.anotherObj.objValue()
// customObj.anotherObj.objValue.call(customObj)