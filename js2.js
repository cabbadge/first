
    'use strict';

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












 let numberFilms;

 function start(){

    while(numberFilms ==''|| numberFilms==null|| isNaN(numberFilms) ){
        numberFilms=+prompt("Сколько фильмов вы уже посмотрели?", '');
    }
 }
 start();

    const personal = {
        count: numberFilms,
        movies:{},
        actors:{},
        genres:[],
        privat: false
    };

    

    function personalLevel(){
        console.log(personal);

        if (personal.count<10){
            console.log("Нуб");
        } else if(personal =>10 && personal.count <30){
            console.log("Нормально нормально");
        }
        else if(personal.count > 30){
            console.log("Ты киноман");
        } else{
            console.log("Произошла ошибка");
        }
    }
    // personalLevel();

    function remeberfimlms(){
        for(let i=0; i<2;i++){
            const   a= prompt('Один из последних посмотренных фильмов?', ''),
                    b= prompt('На сколько оцените его?', '');
    
                if(a != null && b !=null && a !=''  && b !='' && a.length<50){
                    personal.movies[a]=b;
                    console.log('Да');
                } else{
                    console.log('Error');
                    i--;
                }
        }
    }
    // remeberfimlms();

    function showMyDB(hidden){
        if(!hidden){
            console.log(personal);
        }
    }
    showMyDB(personal.privat);

    function writeYourGenres(){
        for (let i=1; i<=3; i++){
            personal.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }
    writeYourGenres();