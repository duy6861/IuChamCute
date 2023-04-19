// var promise = new Promise((resovle,reject)=>{
//     reject({
//         id:1,
//         name:"dang"
//     });
// });
// promise
// .then((ten)=>{
// console.log(ten.name)
// })
// .catch((ten)=>{
// console.log(ten.name)
// })
// .finally(()=>{
//   console.log("Done")  
// })
// var Count = document.getElementById('hai')
//  var cou =60;
// var timeID
// const countDown = ()=>{
// timeID = setInterval(() => {
   
//   Count.innerHTML=cou -=1;
//   console.log(Count.innerHTML)
// }, 1000);
// }
// const countStop =()=>{
//   clearInterval(timeID)
// }
// class Fish {
//   constructor(habitat, length) {
//     this.habitat = habitat
//     this.length = length
//   }
  
//   renderProperties(element) {
//     element.innerHTML = JSON.stringify(this)
//   }
// }

// class Trout extends Fish {
//   constructor(habitat, length, variety) {
//     super(habitat, length)
//     this.variety = variety
//   }
  
//    renderPropertiesWithSuper(element) {
//     element.className="green" 
//     super.renderProperties(element);
//   }
// }
b =1000;
console.log(b)
const numbers = [175, 50, 25];
var total = numbers.reduce((resuilt, prod)=> { 
  return resuilt + prod
},200)
document.getElementById("demo").innerHTML = total;

const sum =(so)=>{
return so + 3
}
console.log(sum(4))

var b