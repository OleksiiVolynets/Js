/*console.log("Helo Javascript");
console.error("Helo Javascript");
console.warn("Helo Javascript");*/
/*let num=5;
console.log(num);
let some_new="Result";
num=7
console.log(some_new+" "+num+"!")
const number=10;
console.log(number)
let ishascar=true;
num="10";
console.log(num)
let k=5;
let p="7";
let c=k+p;
console.log(c)*/

//Математичн дії
// let num1=15;
// let num2=7;
// let res=num1-num2;
// console.log("Result:"+res)//перший варіант
// console.log("Result:"+(num1+num2))//другий варіант
// console.log("Result:"+(num1-num2))
// console.log("Result:"+(num1*num2))
// console.log("Result:"+(num1/num2))
// console.log("Result:"+(num1%num2))
// let num3=5;
// let num4=Number("10");
// console.log(num3+num4);
// num1+=10;
// num1--;
// console.log(num1)
// let pi=Math.PI;
// console.log(pi);
// console.log(Math.abs(-9));
// console.log(Math.max(1,7,11,3));

//Умовні оператори
// let num=15;
// let ishascar=true
// if(16==num || ishascar){
//     console.log("Yess");
//     console.log("Yes, he has a car")
//     } 
//&&=and
//||=or

// let text="word";
// if(text=="some"){
//     console.log("True");
// }
// else if(text=="word"){
//     console.log("else if");
// }
// else if(text!="text"){
//     console.log("else if");
// }
// else{
//     console.log("Hipe")
// }

//Оператор switch
// let word="red"
// switch(word){
//     case "new": 
//         console.log("Var is new");
//         break;
//     case 5:
//         console.log("word is 5");
//         break;
//     case "capibara":
//         console.log("word is capibara");
//         break;
//     default:
//         console.log("word is unknown");
//         break;
//}

//Масиви даних
//let data=new Array(4,6,2) перший спосіб
// let data=[3,7,8,9.8,"Word",true];// другий спосіб
// data[0]="Some";
// console.log(data.length);
// console.log(data[0]);

// let matrix=[[5,7,8],[2,3,5],[9,6,1]];
// console.log(matrix[0][2])

//Цикли
// for(let i =100; i>10;i/=2){
//     console.log(i);
// }

// let i=0
// while(i<15){
//     console.log(i)
//     i+=2
// }

// let x=100;
// do{
//     console.log(x);
//     x/=2
// }while(x>10);

//додаткові оператори
// for(let i=10;i>0;i--){
//     if(i==2) {break;}

//     if(i%2==0){continue;}
//     console.log(i)
// }

//цикли і масиви
// let nums=[5,7,4,9,2,3.7];
// for(i=0;i<nums.length;i++) {
//     nums[i]*=2
//     console.log("Element is"+" "+ nums[i])
// }

//Функціональні вікна
//alert("It's muffin time");
// let data=confirm("Are you 18 years old ");
// console.log(data);
// if(data==false){
//     alert("Що вам не подобається")
// }
// let user=prompt("Як вас звати","James");
// if(user==null){
//     alert("Ви нічого не ввели ")
// }
// else{console.log(user)}

//Функції
// function print(word){
//     console.log(word+"!");
//}
// print("Hello");
// let some = "New text";
// print(some);
// function suma(a,b){
//     if(a!=null && b!=null){
//         let res=Number(a)+Number(b);
//         print("Result "+res)
//     }
//     else{
//         alert("Error")
//     }
    
// }
// let user1=prompt("Enter 1 number: ",0);
// let user2=prompt("Enter 2 number: ",0);
// suma(user1,user2);

// function licz(num){
//     let suma=0
//     for(i=0;i<num.length;i++){
//     suma+=num[i];
// }
// return suma
// }
// let nums=[5,4,2,8]
// let nums2=[3,8,9,10,6]
// let sum1=licz(nums)
// console.log(sum1)
// let sum2=licz(nums2)
// console.log(sum2)

//Події та обробник подій у JavaScript
// function btnClick(){
//     alert("Message")
// }
// let counter=0;
// function btn(el){
//     counter++;
//     el.innerHTML="Count"+counter;
// }

// function user(t){
//     if(t.value=="font"){
//         t.style.fontSize="20px";
//     }
//     else if(t.value=="color"){
//         t.style.color="red";
//     }
//     else if(t.value="bg"){
//         t.style.backgroundColor="blue"
//     }
// }

//Робота з HTML
// let block=document.getElementById("some-block");
// block.innerHTML="Hello <b>World</b>"
// block.style.color="red"
// block.style.backgroundColor="black"
// block.className="block"

// console.log(block.className)

// document.getElementById("para").innerHTML="New text";


//let spans=document.getElementsByTagName("span");
// let spans=document.getElementsByClassName("el_span")
// for(let i=0;i<spans.length;i++){
//     spans[i].style.fontSize="30px"
//     spans[i].title=spans[i].innerText+"!"
// }

//Робота з формами
// function checkForm(el){
//     let username=el.username.value;
//     var email=el.email.value;
//     let pass=el.password.value;
//     let gender=el.gender.value;
//     let error=""
//     if(username.length<2){
//         error="Name is too short"
//     }
//     else if(email.length<2){
//         error="Email is too short"
//     }
//     else if(!email.includes("@")){
//         error="Email doesn't have"
//     }
//     else if(pass.length<2){
//         error="Pass is too short"
//     }
//     else if(gender==null || gender==""){
//         error="You need to choose gender"
//     }
//     if(error!=""){
//         document.getElementById("error").innerText=error;
//         return false;
//     }
//     document.getElementById("error").innerText="";
//     window.location="https://itproger.com"
//     return false;
// }

//Інтервали і таймери
// let a=setInterval(my_func,1000);
// let counter=0

// function my_func(){
//   document.getElementById("timer").innerHTML="Counter"+counter;
//   counter++  
// }

// function stopInterval(){
//     //clearInterval(a)
//     clearTimeout(timerid)
// }

// setInterval(function(){
//     console.log("sec...")
// },1000)

// let timerid=setTimeout(function(){
//     alert("Message")
// },7000)

//Створення об'єктів

// setInterval(function(){
// let date= new Date();
// let c="Time: "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
// document.getElementById("time").innerHTML=c;},1000)
//date.setHours(23);

// Функції для масиву
// let arr=[5,7,8,9,2,3,4,1,6];
// console.log(arr.sort().reverse());   

// let user=prompt("Enter films: ");   
// let films=user.split(",")
// console.log(films.join("-"))

// Класи
class Person{
    name=""
    age=0
    bio=""
    constructor(name,age,bio){
        this.name=name;
        this.age=age;
        this.bio=bio;
    }

    info(){
        console.log("Person "+this.name+" Age "+this.age+" Bio "+this.bio)
    }
}
// let alex=new Person() without constructor
// alex.name="Alex"
// alex.age=25
// alex.bio="Some text"
let alex=new Person("Alex",25,"Some text")

let bob=new Person()
bob.name="Bob"
bob.age=30
bob.bio="Some  new text"
alex.info()