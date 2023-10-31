export default class User {
    constructor(email,name){
        this._id=email;
        this._name=name;
    }
    greeeting(){
        return `Hi,my name is ${this._name} Julius`;
    }
}