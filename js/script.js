const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
const lastMovie = prompt('Один из последний просмотренных фильмов?', '');
const rateMovie = prompt('На сколько оцените его?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false
};

personalMovieDB.movies[lastMovie] = rateMovie;