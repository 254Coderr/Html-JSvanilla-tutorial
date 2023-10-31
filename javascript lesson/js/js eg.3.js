
//Loops
let myFavoured= 5;
while (myFavoured<14) {
    console.log(myFavoured);
    myFavoured++
}
// do while
do{
    console.log(myFavoured);
}while (myFavoured<14);
//for loop
for (let i = 0; i <=10; i++) {
    console.log(i);
    
}
let name ="Julius Magomere";
for (let i = 0; i <name.length; i++) {
    console.log(name.charAt(i))
    
}
/* 
let named= "Julius Magomere";
let counter=0;
let myLetter;
while (true) {
    myLetter= named[counter];
    console.log(myLetter);
    if(myLetter==="g")break;
    counter++;
    
}
*/
//continue keyword
let nameds= "Julius Magomere";
let counter=0;
let myLetter;
while (counter<=10) {
    myLetter= nameds[counter];
    if (counter===1){
        counter +=2;
        continue;
    }if (myLetter==="g")break;
    counter++;
    console.log(counter)
}
// functions declaration synthax
function sum(num1,num2) {
    if(num2=== undefined){
        return num1+num1;
    }
    return num1+num2;
}
console.log(sum(4,40))
//getting User function
function getUserNameFromEmail(email){
    return email.slice(0,email.indexOf("@"));
}
console.log(getUserNameFromEmail("randomUser@randomEmail.com"));
//0r Anonynimous Function
const getUsersNameFromEmail= function(email){
return email.slice(0,email.indexOf("@"));
} 
console.log(getUsersNameFromEmail("makojulius@randomEmail.com"));
//or Arrow function
const getUserNamesFromEmail= (email)=>{
    return email.slice(0,email.indexOf("@"));
}
    console.log(getUserNamesFromEmail("makojulius@randomEmail.com"));
// another examole
const toProperCase =(name)=> {
    return name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase();
};
console.log(toProperCase("juLIus"))
// Initialize
//global scope
var x= 2 // function scoped
let g= 4 //gloabl svoped
const z=5 //global scoped
console.log(`global: ${x}`);
console.log(`global:${g}`);
console.log(`global: ${z}`);
//local scope
function myfunction(){
    console.log(`local.function: ${x}`);
    console.log(`local.function:${g}`);
    console.log(`local.function: ${z}`);
{
    console.log(`local.block: ${x}`);
console.log(`local.block:${g}`);
console.log(`local.block: ${z}`);
}
}
myfunction();
// Arrays data Structure jvs
const myArray= [];
myArray[0]="Julius";
myArray[1]=2022;
myArray[2]=false;
//addding more data to array
myArray.push("school","code")
//removing data
myArray.pop();//removes added codes
console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length-1]);
console.log(myArray[3])
//adding data infront of an Array unshift
myArray.unshift("magomere");
console.log(myArray);
//removing data infront shift
myArray.shift();
console.log(myArray);
// splice deleting
myArray.splice(1,1);
console.log(myArray);
myArray.splice(1,0,true);
console.log(myArray)
myArray.splice(1,2,true);
console.log(myArray)
//reversing then slicing
const ourArray = ["A","B","C","D","F"];
const newArray= ourArray.reverse().slice(2);
console.log(newArray);
//joining to make a string
const yourArray = ["A","B","C","D","F"];
const newString = yourArray.join();
console.log(newString);
//Nesting
const equipShelfFootBall=["ball","net","gloves","short"];
const equipShelBasketBall=["shoes","shirt","cap","socks"];
const clotheShelfFootBall=["boots","water","kit","watch"];
const clotheShelfBasketBall=["markers","glucose","jersey","sneakers"];
console.log(equipShelfFootBall[3])//single dimensin reference
console.log(clotheShelfBasketBall[2])//single dimensin reference
const equipDept=[equipShelBasketBall,equipShelfFootBall];
const clothDept= [clotheShelfFootBall,clotheShelfBasketBall]
console.log(equipDept[0][2]);//double dimension
console.log(equipDept[1][3])// same as line134 code
const sportStore= [equipDept,clothDept]
console.log(sportStore[0][0][2])//triple dimension
//Class Building a class to accept a parameter
class pizza{
    constructor(pizzaType){
        this.type=pizzaType;
        this.size="medium"
        this.crust="original";
    }
    bake(){
        console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust Pizza`)
    };
}

const myPizza= new pizza("pepporoni");
myPizza.bake();
//Get and setter metgod
/*class pizza{
    constructor(pizzaType){
        this.type=pizzaType;
        this.size="medium"
        this.crust="original";
    }
    get crust () {
        return this.crust}
            set crust(pizzaCrust){
                this.crust=pizzaCrust;
            }
        
    bake() {
        console.log(`Baking a ${this.size}${this.crust}${this.type}crust Pizza`)
    }
    const myPizza = new pizza("pepperoni");
    myPizza.set Crust("thin");
    myPizza.bake();
    console.log(myPizza.getCrust())
}*/
class hamburger{
    constructor(hamburgerSize){
        this.size=hamburgerSize
        this.original="original"
    }
    get crust(){
        return this.crust
    }
    set crust(hamburgerCrust){
        this.crust=hamburgerCrust;
    }

    }
    class specialityHamburger extends hamburger{
        constructor(hamburgerSize){
            super(hamburgerSize);
            this.type="is a nicely cooked"
        }
        slice(){
        console.log(`ours ${this.type} ${this.size} hambuger with 2 pieces!`);
        }
}
const mySpeciality= new specialityHamburger("medium");
mySpeciality.slice();
//Factory function in-inside the scope of the code block
function breadFactory(breadSize){
    const crust="original";
    const size= breadSize;
    return{
        bake:()=>console.log(`Baking a ${size} ${crust} crust Bread`)

    };
    }
const myBread= breadFactory("small");
myBread.bake();
//public and private fileds in classes
class cake{
    crust="original"
    #ingredient="traditional"
    #size;
    constructor(cakeSize){
        this.#size=cakeSize;
    }
    get crust(){
        return this.crust;
    }
    set crust(cakeCrust){
        this.crust= cakeCrust;
    }
    hereYouGo(){
        console.log(`Here is your ${this.crust} ${this.#ingredient} sweet ${this.#size} cake.`)
    }
}
const myCake= new cake("large");
    myCake.hereYouGo();
    console.log(myCake.crust)//public field
    console.log(myCake.ingredient)//private field undefined
    
    // Objects
    const anotherObj={
        alive:true,
        answer:42,
        hobbies:["eat","sleep","code"],
        beverage:{morning:"coffee",
        afternoon:"Iced tea"}
            
        
     };
     console.log(anotherObj.answer)
     console.log(anotherObj.hobbies[1])
     console.log(anotherObj.beverage.morning)
     console.log(anotherObj["alive"])
     //object methods
     const vehicle={
        wheels:4,
        engine:function(){
            return "vvrrooom!"
        }
        };
    const truck=Object.create(vehicle)
     truck.dooors=2,
     console.log(truck);
     console.log(truck.wheels);
     console.log(truck.engine());
     //key and value in object
     const p={
        a:"baaaddegvtce",
        f:"tfdnujrtiokw"
     }
     console.log(Object.keys(p))
     console.log(Object.values(p))
//Destructuring Object
const {a,f}=p
console.log(f)
// JSON
const myObj={
    name:"Julius Magomere",
    hobbies:["eat","code","code"],
    hello: function () {
        console.log("Hello world!")
    }
}
console.log(myObj);
console.log(myObj.name);
console.log(typeof myObj);
myObj.hello();
//stringifying JSON does NOT send functions
const sendJSON=JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);//parsing or receiving json
const  receiveJSON=JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);

//Jvs Error and Error handling; sythax,reference,typeof
const makeError=()=>{
    try{
        const name="Julius"
        name="mago"
    }catch(err){
        console.log(err);
        console.table(err);
        console.error(err);
        console.warn(err)
    }
}
makeError();
//custom error
const makeEror=()=> {
try {
    throw new customEror("This is a custom Error!")
} catch (error) {
    console.log(error.stack)
}}
makeEror();
function customEror(message){
    this.message=message;
    this.name="custom error";
    this.stack=`${this.name} ${this.message}`}
    //example2
    madeError=()=>{
        let i=1;
        while(i<=6){
            try {
             if(i/2 !==3){
                throw new Error("odd number");
             }
             console.log("even number")
            }
               
            catch (error) {
                console.log(error.stack);
            }
            finally{console.log("...finally!.");
            i++}
        };}
        madeError();
    //DOM Document object Models
    //selcting view html collection
   const view1=document.getElementById("view1");
   console.log(view1)
   //selcecting view nodelist
const view2=document.querySelectorAll("#view2")
console.log(view2)
const divs=view1.querySelectorAll("div");
console.log(divs)
const sameDivs=view1.getElementsByTagName("divs");
console.log(sameDivs)
const evenDivs=view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
// navigating the dom
const navText=document.querySelector("nav h1");
console.log(navText)
navText.textContent="Hello World!"
const navBar=document.querySelector("nav");
navBar.innerHTML='<h1>Hello!</h1><p>This should align right</p>';
console.log(navBar)
navBar.style.justifyContent="center-spacing";
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].nextElementSibling);
//or
console.log(evenDivs[3].previousElementSibling);
//adding and removing dom
/*
view1.style.display="none";
view2.style.display="flex";
view2.style.flexDirection="row";
view2.style.flexWrap="wrap"
view2.style.margin="10px";
while(view2.lastChild){
    view2.lastChild.remove();
}
const createDiv=(parent,iter)=>{
    const newDiv=document.createElement("div");
    newDiv.textContent=iter;
    newDiv.style.backgroundColor="black";
    newDiv.style.width="100px";
    newDiv.style.margin="10px";
    newDiv.style.justifyContent="center";
    newDiv.style.alignItems="center";
    newDiv.style.display="flex";
    parent.append(newDiv);
}
createDiv(view2,someView);

// JVS Event Listeners
const view =document.querySelector("#view2");
const div= view.querySelector("div");
const h2=div.querySelector("h2");
const doSomething=()=>{
    alert("doing someting")
};
h2.addEventListener("click,doSomething,false")
h2.removeEventListener("click,doSomething,false")

//ready statechange -eg event listener
document.addEventListener("readyStateChange",(event)=>{
    if(event.target.readyStateChange==="complete"){
        console.log("readyState:complete");
        initApp();
    }
}
)
const initApp=()=>{
    const view= document.querySelector("#view2");
    const div= view.querySelector("div");
    const h2= div.querySelector("h2");
    view.addEventListener("click", (event)=>{
        view.style.backgroundColor="purple";
    });
    div.addEventListener("click",(event)=>{
div.style.backgroundColor="blue"
    });
    h2.addEventListener("click",(event)=>
{
    event.target.textContent="clicked";
})

}
initApp();
*/

