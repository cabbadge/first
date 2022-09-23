
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

const namberFilms=+prompt("Сколько фильмов вы уже посмотрели?", '');

const personal = {
    count: namberFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const   a= prompt('Один из последних посмотренных фильмов?', ''),
        b= prompt('На сколько оцените его?', '');
        // c= prompt('Один из последних посмотренных фильмов?', ''),
        // d= prompt('На сколько оцените его?', '');

    personal.movies[a] = b; 
    // personal.movies[c] = d; 

    console.log(personal);