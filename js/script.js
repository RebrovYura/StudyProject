const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', ''); // Стоило сразу преобразовать в число
// используя унарный знак +

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastMovieA = prompt('Один из последний просмотренных фильмов?', ''),
        rateMovieA = prompt('На сколько оцените его?', ''),
        lastMovieB = prompt('Один из последний просмотренных фильмов?', ''),
        rateMovieB = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovieA] = rateMovieA;
personalMovieDB.movies[lastMovieB] = rateMovieB;