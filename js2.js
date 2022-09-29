"use strict";

// let number = 5;
//  const leftBorserWith =1;
//  number=10;
//  console.log(number);


// const answers=[];
// answers[0]=prompt("Как тебя зовут?");
// answers[1]=prompt("Получить уведомление?");
// answers[2]=prompt("Сколько тебе лет?");

// document.write(answers);

// const category=('toys');
// console.log('привет '+ category);

// const namberFilms=+prompt("Сколько фильмов вы уже посмотрели?", '');

// const personal = {
//     count: namberFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false
// };

// const   a= prompt('Один из последних посмотренных фильмов?', ''),
//         b= prompt('На сколько оцените его?', '');
//         c= prompt('Один из последних посмотренных фильмов?', ''),
//         d= prompt('На сколько оцените его?', '');

//     personal.movies[a] = b; 
//     // personal.movies[c] = d; 

//     console.log(personal);

// num =78;
// switch(num){
//     case 40:
//     console.log('Error');
//     break;
//     case 60:
//         console.log('Error');
//         break;
//     case 78:
//     console.log('okey');
//     break;
// }

    // let num= 50;

    // while (num <= 55){
    //     console.log(num);
    //    num++;
    // }

    // do{
    //     console.log(num);
    //    num++;
    // }
    // while (num<=55);


// for(let i = 1; i<10; i++){
//     if(i===6){
//         // break;
//         continue;
//     }
//     console.log(i);
// }








// let num=20;
// function showFirstMessage(text){
//     console.log(text);
//    num=10;
// }

// showFirstMessage('hello');
// console.log(num);



// function spans(a,b){
//     return(a+b);

// }
//  console.log(spans(13,79));


// const str="Test sher ping";
// console.log(str.toLocaleLowerCase());
// console.log(str.indexOf("sh"));
// console.log(str.toLocaleUpperCase());
// console.log(str.slice(5, 10));
// console.log(str.substring(5,10));
// console.log(str.substr(5,7));












//  let numberFilms;

//  function start(){
//     numberFilms=+prompt("Сколько фильмов вы уже посмотрели?", '');

//     while(numberFilms ==''|| numberFilms==null|| isNaN(numberFilms) ){
//         numberFilms=+prompt("Сколько фильмов вы уже посмотрели?", '');
//     }
//  }
//  start();

//     const personal = {
//         count: numberFilms,
//         movies:{},
//         actors:{},
//         genres:[],
//         privat: false
//     };

    

//     function personalLevel(){
//         console.log(personal);

//         if (personal.count<10){
//             console.log("Нуб");
//         } else if(personal =>10 && personal.count <30){
//             console.log("Нормально нормально");
//         }
//         else if(personal.count > 30){
//             console.log("Ты киноман");
//         } else{
//             console.log("Произошла ошибка");
//         }
//     }
//     personalLevel();

//     function remeberfimlms(){
//         for(let i=0; i<2;i++){
//             const   a= prompt('Один из последних посмотренных фильмов?', ''),
//                     b= prompt('На сколько оцените его?', '');
    
//                if(a != null && b !=null && a !=''  && b !='' && a.length<50){
//                     personal.movies[a]=b;
//                     console.log('Да');
//                 } else{
//                     console.log('Error');
//                     i--;
//                 }
//         }
//     }
//     // remeberfimlms();

//     function showMyDB(hidden){
//         if(!hidden){
//             console.log(personal);
//         }
//     }
//     showMyDB(personal.privat);

//     function writeYourGenres(){
//         for (let i=1; i<=3; i++){
//             personal.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
//         }
//     }
    // writeYourGenres();



// function learnjs(lang, callback){
//     console.log(`Я учу:${lang}`);
//     callback();

// }
// function done() {
//     console.log('Я прошел урок!');
// }
// learnjs('Javascript', done);



// const options={
//     name:'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
<<<<<<< HEAD
//     },
//     makeTest: function(){
//         console.log(`test`);
//     }
// };
// options.makeTest();
// // delete options.name;
// console.log(options);
// let caunter=0;
// for (let key in options){
    
//     if( typeof(options[key]) ===`object`){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }

// }

// console.log(Object.keys(options).length);
=======
//     }
// };
// // delete options.name;
// // console.log(options);

// for (let key in options){
//     if( typeof(options[key])){

//     }
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);

// }



// let arr =[1,45,25,78];
// // arr.shift();
// // arr.push();
// // arr.pop();
// // for (let i=0; i<=arr.length; i++){
// //     console.log(arr[i]);
// // }
// // for(let value of arr){
// //     console.log(value);
// // }

// arr.forEach(function( item,i,arr){
//     console.log(`${i} :${item} внутри массива ${arr}`);
// });


// const str= prompt('Массивы');
// const massiv= str.split(', ');

// console.log(massiv.join('; '));

// function copy(mailObj){
//     let objCopy={};
//     let key;
//     for (key in mailObj){
//         objCopy[key]=mailObj[key];
//     }
//     return objCopy;
// }

// const numbers ={
//     a:2,
//     s:4,
//     q:{
//         w:8,
//         e:10
//     }
// };
// const newNumber = copy(numbers);
// newNumber.a=11;
// newNumber.q.w=7;
// console.log(newNumber);
// console.log(numbers);

// const add= {
//     d:17,
//     t:20
// }

// const clone = Object.assign({}, add);
// clone.d=30;
// console.log(add);
// console.log(clone);

// const oldArray =[`a`,`d`,`c`];
// const newArray= oldArray.slice();
// newArray[1]=`fsdjg`;
// console.log(oldArray);
// console.log(newArray);

// const video = [`youtube`, 'vimeo', 'rutube'],
//         blogs = ['wordress', 'livejournal', 'blogger'],
//         internet = [...video,...blogs, 'vk'];

// console.log(internet);

// function log(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num =[2,5,7];
// log(...num);

// const array=['a','b'];

// const newAarray = [...array];
// console.log(newAarray);

// const q = {
//     one:1,
//     two:2
// };

// const newObj = {...q};
>>>>>>> 84c0ba9622b29a31af055bc98d69ec8136c5961d
