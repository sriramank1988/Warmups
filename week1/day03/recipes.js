
//Recipes
var recipe = {
    title : 'Mole',
    serves : 2,
    ingredients : ['cinnamon','cumin','cocoa']
}
    console.log(recipe.title);
    console.log('Serves: ' + recipe.serves);
    console.log('Ingredients :')
    for ( var index = 0; index < recipe.ingredients.length ; index++){
        console.log(recipe.ingredients[index])
    }
    
//Books
var books = [
    {
        title : 'The hobbit',
        author : 'J.R.R Tolkien',
        isRead : false
    }, 
    {
        title : 'Angels and Demons',
        author : 'Dan Brown',
        isRead : true
    }
];
for(i=0;i<books.length;i++){
    if(books[i].isRead){
        console.log(books[i].title + ' is already read');
    }
    else{
        console.log(books[i].title + ' needs to be read')
    }
}

//IMDB
var movie = {
    title : 'Matrix',
    duration : '2 hours',
    stars : ['neo','trinity','keanu reeves']
}
function printmovie(movie){
    console.log(movie.title + ' lasts for ' + movie.duration + ' Star: ' + movie.stars )
}
printmovie(movie);