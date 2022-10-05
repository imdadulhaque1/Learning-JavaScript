let customObj = {
    name: "Imdadul Haque",
    phone: "01773964101",
    age: 24,
    anotherObj:{
        name: "Israt Jahan Maisha",
        age: 4,
        objValue: function(){
            console.log(`My name is ${this.name} and my age is ${this.age}`);
        }
    },
    objStudy:{
        uniName: "Daffodil International University",
        deptName: "Computer Science and Engineering",
        stdID: "171-15-1440",
        objDream:{
            sDream: "Study Abroad",
            sSubject: "Data Science",
            sHappy: "Research Article Publication",
            dreamValue: function(){
                console.log(this);
            }
        }

    }
}

// customObj.anotherObj.objValue()
// customObj.anotherObj.objValue.call(anotherObj)

// customObj.objStudy.objDream.dreamValue()  //It show the leading parents value
// customObj.objStudy.objDream.dreamValue.call(customObj)
// customObj.objStudy.objDream.dreamValue.call(customObj.objStudy.objDream)
// customObj.objStudy.objDream.dreamValue.call(customObj.objStudy.objDream)
customObj.objStudy.objDream.dreamValue.call(customObj.objStudy.objDream.sSubject[2])