let numberOfFilms;

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovie = prompt('Один из последний просмотренных фильмов?', '');
        const rateMovie = prompt('На сколько оцените его?', '');

        if (lastMovie != null && rateMovie != null && lastMovie != '' && rateMovie != '' && lastMovie.length < 50) {
            personalMovieDB.movies[lastMovie] = rateMovie;
        } else {
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (10 <= personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }

}

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`, ''));
    }
}

// start();
// rememberMyFilms();
// detectPersonalLevel();
// showMyDB();
writeYourGenres();