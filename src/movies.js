// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const howManySpielberg = moviesArray.filter(movies => {
        return movies.director === 'Steven Spielberg';
    });
    return howManySpielberg.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const movieRating = moviesArray.reduce((sum, movie) += sum + movie.score, 0)
    const averageScore = movieRating / moviesArray.length
};
const average = scoresAverage(moviesArray);
console.log(average);


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movies => movie.genre.includes('Drama'));

    const scoreDrama = moviesArray.reduce((sum, movie) += sum + movie.score, 0);
    const averageDrama = scoreDrama / moviesArray.length
    return averageDrama;
}

const averageRatingDrama = dramaMovieRating(moviesArray);
console.log(averageRatingDrama);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.slice().sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });

    return sortedMovies;
}
const sortedMovies = orderByYear(moviesArray);
console.log(sortedMovies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const sortedMovies = moviesArray.map(movie => movie.title).sort((a, b) => a.localeCompare(b));
    const top20Titles = sortedMovies.slice(0, 20);

    return top20Titles;
}
const top20Titles = orderAlphabetically(moviesArray);
console.log(top20Titles);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
