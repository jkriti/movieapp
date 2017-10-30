

var app=angular.module("MoviesApp",[]);

app.controller("MovieController",function($scope,$http){
	//$scope.hello="HEllo from kriti";

	//alert("Hello");
	//alert($http);

	function myapifilms(response)
	{
		alert()
	}

	$http.json("{"Title":"Avatar","Year":"2009","Rated":"PG-13","Released":"18 Dec 2009","Runtime":"162 min","Genre":"Action, Adventure, Fantasy","Director":"James Cameron","Writer":"James Cameron","Actors":"Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang","Plot":"A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.","Language":"English, Spanish","Country":"UK, USA","Awards":"Won 3 Oscars. Another 85 wins & 128 nominations.","Poster":"https:'\'//images-na.ssl-images-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"83%"},{"Source":"Metacritic","Value":"83/100"}],"Metascore":"83","imdbRating":"7.8","imdbVotes":"944,150","imdbID":"tt0499549","Type":"movie","DVD":"22 Apr 2010","BoxOffice":"$749,700,000","Production":"20th Century Fox","Website":"http://www.avatarmovie.com/","Response":"True"}")

	//.success(function(response){

	//	alert(response);
	//})


	var movies = [
	{	title : "Avtar",rating:"PG-13",year:2009,plot:"Come cool blue guys re-enact Dancing with Wolves"},
	{	title : "Star Wars v11",rating:"PG-13",year:2015,plot:"Plot Unknown"},
	{	title : "Star Trek",rating:"PG-13",year:2013,plot:"Citizen What is your name"},

	];

	$scope.movies = movies;

//	$scope.removeMovie=function(index){
		//console.log("remove movie" + index);

//	}

	$scope.removeMovie=function(movie){
		console.log("remove movie");
		var index = $scope.movies.indexOf(movie);
		console.log(index);
		$scope.movies.splice(index,1);		

	}

	$scope.selectMovie = function(movie){
		//alert(movie.title);
		//check if getting that movie instance

		$scope.movie=movie;
		//it ll populate the form
		//and because of refernce whatwva happens to input happens to object

	}

	$scope.addMovie=function(){
		//alert("Add movie");
		//alert($scope.movie);
		//alert($scope.movie.title);
		var newMovie = {
			title : $scope.movie.title,rating:$scope.movie.rating,year:$scope.movie.year,plot:$scope.movie.plot
		};

		$scope.movies.push(newMovie);
	}

	$scope.updateMovie=function(){

		//alert($scope.movie.title);
	}

});