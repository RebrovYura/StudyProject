const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    start: function () {
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов Вы уже посмотрели?', '').trim();
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const lastMovie = prompt('Один из последний просмотренных фильмов?', '').trim();
            const rateMovie = prompt('На сколько оцените его?', '').trim();

            if (lastMovie != null && rateMovie != null && lastMovie != '' && rateMovie != '' && lastMovie.length < 50) {
                this.movies[lastMovie] = rateMovie;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (10 <= this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    toggleVisibleMyDB: function () {
        if (this.private) {
            this.private = false;
        } else {
            this.private = true;
        }
    },
    showMyDB: function () {
        if (!this.private) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let favGenres = prompt(`Ваш любимый жанр под номером ${i}`, '');
            
            if (favGenres !== null && favGenres != '') {
                this.genres.push(favGenres);
            } else {
                i--;
            }

        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
