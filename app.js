//TODO add css stylesheet  


//  list of movie data objects  
const movieList = [];
let currId = 1;
let ratingsSorted;
let movieSorted;

//handle form submit 
$('form').on('submit', event => {
    event.preventDefault();

    //save values of input fields 
    let $movie = $('#movie').val();
    let $rating = $('#rating').val();

    //create and save movie data object 
    let movieData = {'movie': $movie, 'rating': $rating, 'id': currId};
    updateMovieList(movieData);

    addMovie(movieData);

    //clear input fields 
    $('#movie').val('');
    $('#rating').val('');

    //increment curId
    currId++;
});

//handle click for movie removal  
$('#container').on('click', 'button', function() {
    // remove corresponding movie data from memory
    deleteData();
    
    //Remove from DOM 
    $(this).parent().remove();
});

// Handle click for movie sort 
$('#sort > #movie').on('click', () => {
    //sort the movieList 
    sortByMovie();

    //update the DOM 
    $('#container').empty();
    for (let movie of movieList){
        addMovie(movie);
    }

})

// Handle click for ratings sort  
$('#sort > #rating').on('click', () => {
    sortByRating();
        
    //update the DOM 
    $('#container').empty();
    for (let movie of movieList){
        addMovie(movie);
    }
});

//add movie to movieList 
const updateMovieList = (movieData) => {
    movieList.push(movieData);
}

//addMovie: Accepts movie value and rating value. Adds to the DOM 
const addMovie = (movieData) => {
    // select container
    const $container = $('#container');

    //create a div 
    const $movieDiv = $('<div>')
    $movieDiv.attr('id', movieData.id)

    //create h2 and p with inner text
    const $h2 = $('<h2>').text(movieData.movie);
    let $star = $('<i>')
    $star.addClass('fa fa-star-o');
    const $p = $('<p>').html(movieData.rating + ' / 10 ');
    $p.append($star);
    const $btn = $('<button>').text('Remove');
    //append to new div 
    $movieDiv.append($h2).append($p).append($btn);

    //append div to container 
    $('#container').append($movieDiv);
};

// ratings sort funciton 
const sortByRating = () => {
    if (ratingsSorted !== 'descending'){
        movieList.sort(function(a,b){
            return b.rating - a.rating
        });
        ratingsSorted = 'descending';
    }
    else if (ratingsSorted !== 'ascending'){
        movieList.sort(function(a,b){
            return a.rating - b.rating
        });
        ratingsSorted = 'ascending';
    }
}

// movie sort function 
const sortByMovie = () => {
    if (movieSorted !== 'descending'){
        movieList.sort(function(a,b){
            let x = a.movie.toLowerCase();
            let y = b.movie.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        movieSorted = 'descending';
    }
    else if (movieSorted !== 'ascending'){
        movieList.sort(function(a,b){
            let x = a.movie.toLowerCase();
            let y = b.movie.toLowerCase();
            if (x < y) {return 1;}
            if (x > y) {return -1;}
            return 0;
        });
        movieSorted = 'ascending';
    };
}

// helper to delete data from movieList 
const deleteData = () => {
    let idxToRemove = movieList.findIndex(movie => movie.id === +$(this).closest('div').attr('id'));
    movieList.splice(idxToRemove, 1);
}

