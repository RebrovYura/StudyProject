const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const lastMovie = prompt('Один из последний просмотренных фильмов?', '');
    const rateMovie = prompt('На сколько оцените его?', '');

    if (lastMovie != null && rateMovie != null && lastMovie != '' && rateMovie != '' && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = rateMovie;
    } else {
        i--;
    }
    
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (10 <= personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
