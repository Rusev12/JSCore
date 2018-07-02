class Some{
    constructor(name){
        this._name = name;
    }

    name(){
        this._name = "enw";
        return this._name
    }

    get Name(){
        return this._name
    }
}
let arr = [];
let obj = new Some('SSS');
let obj2 = new Some('aasdad');
arr.push(obj);
arr.push(obj2);
let names = [];
console.log(names)
for (let obj1 of arr) {
   let nameObj = obj1.Name;
   names.push(nameObj)
}
names.sort((a , b) => a.localeCompare(b))
console.log(names);