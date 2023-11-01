//web api Storage
const myArrray=["eat","sleep","code"];
 const myObbj={
    name:"Julius",
    hobbie:["eat","sleep","code"],
    logName:function(){
        console.log(this.name);
    }
 };
 myObbj.logName();
 sessionStorage.setItem("mySessionStore",myArrray);
 localStorage.setItem("myLocalStore",JSON.stringify("myArrray") )
 const localData=JSON.parse(localStorage.getItem("myLocalStore"));
 console.log(localData);
 //index specifying
 const key=localStorage.key(0);
 console.log(key);
 // MODULE
 import playGuitar from "./guitar.js";
 import { shredding,plucking } from "./guitar.js";
 console.log(playGuitar());
 console.log(shredding());
 console.log(plucking());
 //renaming fuction
 import { shredding as Shred,plucking as Fingerplucked } from "./guitar.js";
 console.log(Shred());
 console.log(Fingerplucked());
 //example 2
 import User from "./user.js";
 const me = new User("email@email.com,julius" );
 console.log(me);
 console.log(me.greeeting());
 // higher order function
 import { posts } from "./paste.js";
 posts.forEach(post => {
    console.log(post);
 })
 //console.clear();
 const filteredPosts=posts.filter(posts=>{
   return posts.userId===1
 });
 console.log(filteredPosts);
 const mappedPosts=filteredPosts.map(post=>{return post.id*6});
 console.log(mappedPosts)
 const reducePostsValue=mappedPosts.reduce( (sum,post)=>{return sum + post;}
 );
 console.log(reducePostsValue);
 //fetch /async/await
 const myPromise=new Promise((resolve, reject) => {
   const error=true;
   if (error) {
      resolve("Yes!resolved the promise!")
   } else {
      reject("No!rejected the promise!")
   }
 });console.log(myPromise);
 //to get value out of promise using thennable
 myPromise
 .then(value=> {
  return value + "love coding man";
 })
 .then(newValue =>{
   console.log(newValue)
 })
 .catch(err=> {  
   console.error(err);
 });
 const myNextPromise=new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve("myNextPromise")
   }, 2000);
 });
 myNextPromise
 .then(value=>{
   console.log(value);
 });
 myPromise
 .then(value=>{
   console.log(value);
 });
 // pending state
 const users=
 fetch("https://jsonplaceholder.typicode.com/users");
 console.log(users);
 fetch("https://jsonplaceholder.typicode.com/users")
 .then(response=>{
return response.json();
})
.then(data=>{
   data.forEach(user=>{
      console.log(user);
   });
});
// aysn await using to prevent thennable overuse
const myCoolFunction=async()=>{
   const response=await fetch("https://jsonplaceholder.typicode.com/users");
   const jsonUserData=await response.json();
  console.log(jsonUserData);
   return jsonUserData;
};
myCoolFunction();
/*const anotherFunction=aysn()=>{
   const data=await myCoolFunction();
   console.log(data)
} 
anotherFunction();*/
//Work flow function
const getAllUserEmail=async()=>{
   const response=await fetch("https://jsonplaceholder.typicode.com/users");
   const jsonUserData=await response.json();
   const userEmailArray=jsonUserData.map(user=>{
      return user.email;
      })
   /*   console.log(userEmailArray);
}
      getAllUserEmail();*/
      postToWebPage(userEmailArray);}
      const postToWebPage=(data)=>{
         console.log(data)
      }
      getAllUserEmail();
      //fetching second parameter 
      const getDadJoke=async()=>{
         const response=await fetch("https://icanhazdadjoke.com/",{
            method:"GET",
            headers:{
               accept:"application/json"
            }
         }
        )
         const jsonJokeData=await response.json();
      console.log(jsonJokeData);
      console.log(jsonJokeData.joke);
      };
      getDadJoke();
      //example posting
   const jokeObject={
         id: "ljqzkVKJtrc",
         joke:"How do you get two whales in a car? Start in England and drive West."  
      }
      const postData=async(jokeObj)=>{
         const response= await fetch("https://httpbin.org//post",{
            method:"post",
            headers:{
               "content-type":"application/json"
            },
            body:JSON.stringify(jokeObj)
         });
         const jsonResponse=await response.json();
         console.log(jsonResponse);
      };
      postData(jokeObject);
      /*//example 2
      const requestJoke=async(firstName,lastName)=>{
         const response=await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)    
         const jsonResponse=await response.json(); 
         console.log(jsonResponse.value.joke);
      }
      requestJoke("Chuck","Norris");
      
      //Abstructing to Actual Functions
      const getDataFromForm =()=>{
         const requestObj={
            firstName:"Jet",
            lastName:"Li",
            categories:["nerdy"]
         };
         return requestObj;
      }

      const buildRequestUrl=(requestData)=>{
         return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=&{requestData.categories}`;
      };
      const requestJoke=async(url)=>{
         const response= await fetch(url);
         const jsonResponse= await response.json();
         const joke=jsonResponse.value.joke;
         postJokeToPage(joke);}
         const postJokeToPage=(joke)=>{
            console.log(joke);
         }
         const processJokeRequest=async()=>{
            const requestData=getDataFromForm()
         ;
         const requestUrl=buildRequestUrl(requestData);
         await requestJoke(requestUrl);
         console.log(finished)
         }
         processJokeRequest(); */

         

         

      