require("dotenv").config();
var express = require("express");
var app = new express();
var request = require("request");
var server_port = process.env.PORT|| 80a;
const my_api_key = require("./api.js");
var api_url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=" + my_api_key;


app.listen(server_port, function () {

	console.log("Server started on port : " + server_port);
});

const one = process.env.HOME;
console.log(one);

app.get("/", function (_expReq, expRes) {
	// var finalResponse;
	request(
		{
		uri: api_url,
		method: 'GET'
	},
		function (_err, _res, body) {
			// console.log(body);
			var data = JSON.parse(body);

			var finalResponse = `
			<!DOCTYPE html>
			<html lang="en">
			
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>The network of news</title>
				<link rel="stylesheet" href="styles.css">
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
					integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA=="
					crossorigin="anonymous" referrerpolicy="no-referrer" />
					<style>* {
						padding: 0;
						margin: 0;
						box-sizing: border-box;
					  
					}
					
					body {
						background-size: cover;
						background-position: center;
						font-family: sans-serif;
						
					}
					
					
					.menu-bar {
						background: rgb(0, 100, 0);
						text-align: center;
						
					}
					
					.menu-bar ul {
						display: inline-flex;
						list-style: none;
						color: #fff;
					}
					
					.menu-bar ul li
					{
						width: 120px;
						margin: 15px;
						padding: 15px;
					}
					
					.menu-bar ul li a
					{
						text-decoration: none;
						color: #fff;
					}
					.active, .menu-bar ul li:hover
					{
						background: #2bab0d;
						border-radius: 3px;
					}
					.menu-bar .fa
					{
						margin-right: 8px;
					}
					.sub-menu-1
					{
						display: none;
						z-index: 9999;
					}
					.menu-bar ul li:hover .sub-menu-1
					{
						display: block;
						position: absolute;
						background: rgb(0, 100, 0);
						margin-top: 15px;
						margin-left: 15px;
					}
					.menu-bar ul li:hover .sub-menu-1 ul
					{
						display: block;
						margin: 10px;
					}
					.menu-bar ul li:hover .sub-menu-1 ul li
					{
					  width: 150px;
					  padding: 10px;
					  border-radius: 0;
					  text-align: left;
					  }
					  .searchBox
					  {
						  position: relative;
						  display: flex;
						  justify-content: center;
						  align-items: center;
						  text-decoration: none;
						  
						}
						.searchText
						{
						width: 0px;
						padding: 0px;
						border-radius: 25px;
						border: none;
						outline: none;
						transition: all 0.2s linear;
						
					}
					.searchBtn
					{
						width: 105px;
						height: 5px;
						
						text-decoration: none;
						color: #fff;
						
						
						right: auto;
						display: grid;
						place-items: center;
					}
					.searchBox:hover > .searchText
					{
						width: 225px;
						padding: 15px;
					}
					.main{
						
						margin: 2%;
					}
					
					.card{
						height : 10%;
						width: 20%;
						display: inline-block;
						box-shadow: 2px 2px 20px black;
						border-radius: 5px; 
						margin: 2%;
						overflow : hidden;
					}
					
					.image img{
						width: 100%;
						height: 250px;
						border-top-right-radius: 5px;
						border-top-left-radius: 5px;
						
						
						
					}
					
					.title{
						
						text-align: center;
						padding: 10px;
						
					}
					
					h1{
						font-size: 20px;
					}
					
					.des{
						padding: 3px;
						text-align: center;
						
						padding-top: 10px;
						border-bottom-right-radius: 5px;
						border-bottom-left-radius: 5px;
					}
					button{
						margin-top: 40px;
						margin-bottom: 10px;
						background-color: white;
						border: 1px solid black;
						border-radius: 5px;
						padding:10px;
					   }
					   button:hover{
						 background-color: black;
						 color: white;
						 transition: .5s;
						 cursor: pointer;
						}
						
						.searchBox i { color: rgb(0 100 0); padding: 0px 8px; }
						#searchBtn {
							margin-top: 5%;
							margin-left: 10px;
							margin-bottom: 5%;
							background-color: white;
							border: 1px solid black;
							border-radius: 5px;
							padding: 10px;
						}
						@media screen and (max-width: 650px) {
							.card {
							  width: 100%;
							  display: block;
							}
						  }
						</style>					  
						
						</head>
						
			<body>
				<header>
					<h1>The Network Of news</h1>
					<section>
						<link rel="stylesheet"
							href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
						<div class="menu-bar">
							<ul>
								<li class="active"><i class="fa fa-home"></i>Home</li>
								<li><i class="fa thin fa-newspaper"></i>category
									<div class="sub-menu-1">
										<ul>
											<li><a href="/category/general">General</a></li>
											<li><a href="/category/health">Health</a></li>
											<li><a href="/category/sports">Sport</a></li>
											<li><a href="/category/entertainment">Social media</a></li>
											<li><a href="/category/business">Business</a></li>
											<li><a href="/category/science">Science</a></li>
											<li><a href="/category/technology">Technology</a></li>
										</ul>
									</div>
								</li>
			
								<div class="searchBox">
								
									<input type="text" class="searchText" name="text" placeholder="Search.."
								
									<li><button id="searchBtn" onclick="onClicked()"><i class="fas fa-search"></i>search</button></li>
									 </div>
								<li><a href="#"><i class="fa fa-phone"></i>contact</a></li>
								<li><a href="#"><i class="fa fa-user"></i>About</a></li>
							</ul>
			
			
					</section>
			
					</header>
			
					<section style = "z-index=-9999 " >
						<marquee>
							<img src="https://5.imimg.com/data5/DR/NW/MY-45108437/newspaper-advertisement-all-india-500x500.jpg"
								alt=" Image" style="height:300px;"><br>
						</marquee>
					</section>
				<div class="main">`;

			data = data.articles;
			// console.log(data);
			for (var rec in data) {
				let title = data[rec].title;
				if(data[rec].urlToImage!= null){
						finalResponse += `<div class="card">

						<div class="image">
							<img
								src="${data[rec].urlToImage} " >
						</div>
						<div class="title">
							<h1>
							${data[rec].title}</h1>
						</div>
						<div class="des">
							<p>${data[rec].description.substring(0,50)+"....."}</p>
							<a href="${data[rec].url}" target="_blank"><button>Read More...</button></a>
						</div>
					</div>`;
					
				}

			}

			finalResponse += ` </div>
			<footer>
				<div class="left">
					<p>
						Copyright policy</p>
					<p>
						Privacy policy
					</p>
					<p>
						Terms and Conditions
					</p>
				</div>
		
		
			</footer>
		</body>
		<script>
function onClicked() {
  var text = document.getElementsByClassName("searchText")[0].value;
  if(text===""){
	  alert("Search Text is Empty");
	}
	else{ window.location.href = '/search/'+text;}
}
const input = document.querySelector(".searchText");
input.addEventListener("keyup", (event) => {
	var text = document.getElementsByClassName("searchText")[0].value;
	if (event.key === "Enter") {
		if(text===""){
			alert("Search Text is Empty");
		  }
		  else{ window.location.href = '/search/'+text;} 
	}
  });
</script>
		</html>`;
			expRes.send(finalResponse);
		});

});

app.get("/category/:id", function (req, res) {
	request(
		{
		uri: "https://newsapi.org/v2/top-headlines?country=in&category="+req.params.id+"&apiKey="+my_api_key,
		method: 'GET'
	},
		function (_err, _res, body) {
			// console.log(body);
			var data = JSON.parse(body);

			var finalResponse = `
			<!DOCTYPE html>
			<html lang="en">
			
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>The network of news</title>
				<link rel="stylesheet" href="styles.css">
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
					integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA=="
					crossorigin="anonymous" referrerpolicy="no-referrer" />
					<style>* {
						padding: 0;
						margin: 0;
						box-sizing: border-box;
					  
					  }
					  
					  body {
						background-size: cover;
						background-position: center;
						font-family: sans-serif;
					  
					  }
					  
					  .menu-bar {
						background: rgb(0, 100, 0);
						text-align: center;
					  
					  }
					  
					  .menu-bar ul {
						display: inline-flex;
						list-style: none;
						color: #fff;
					  }
					  
					  .menu-bar ul li
					  {
						width: 120px;
						margin: 15px;
						padding: 15px;
					  }
					  
					  .menu-bar ul li a
					  {
						text-decoration: none;
						color: #fff;
					  }
					  #active , .menu-bar ul li:hover
					  {
					  background: #2bab0d;
					  border-radius: 3px;
					  }
					  .menu-bar .fa
					  {
					  margin-right: 8px;
					  }
					  .sub-menu-1
					  {
						display: none;
					  }
					  .menu-bar ul li:hover .sub-menu-1
					  {
						display: block;
						position: absolute;
						background: rgb(0, 100, 0);
						margin-top: 15px;
						margin-left: 15px;
					  }
					  .menu-bar ul li:hover .sub-menu-1 ul
					  {
					  display: block;
					  margin: 10px;
					  }
					  .menu-bar ul li:hover .sub-menu-1 ul li
					  {
					  width: 150px;
					  padding: 10px;
					  border-radius: 0;
					  text-align: left;
					  }
					  .searchBox
					  {
						position: relative;
						display: flex;
						justify-content: center;
						align-items: center;
						text-decoration: none;
						
					  }
					  .searchText
					  {
						width: 0px;
						padding: 0px;
						border-radius: 25px;
						border: none;
						outline: none;
						transition: all 0.2s linear;
						
					  }
					  .searchBtn
					  {
						width: 105px;
						height: 5px;
						
						text-decoration: none;
						color: #fff;
					   
						
						right: auto;
						display: grid;
						place-items: center;
					  }
					  .searchBox:hover > .searchText
					  {
					  width: 225px;
					  padding: 15px;
					  }
					  .main{
					  
						margin: 2%;
					   }
					   
					   .card{
						   height : 470px;
							width: 20%;
							display: inline-block;
							box-shadow: 2px 2px 20px black;
							border-radius: 5px; 
							margin: 2%;
							overflow : hidden;
						   }
					   
					   .image img{
						 width: 100%;
						 border-top-right-radius: 5px;
						 border-top-left-radius: 5px;
						 
					   
						
						}
					   
					   .title{
						
						 text-align: center;
						 padding: 10px;
						 
						}
					   
					   h1{
						 font-size: 20px;
						}
					   
					   .des{
						 padding: 3px;
						 text-align: center;
						 padding-top: 10px;
						 border-bottom-right-radius: 5px;
						 border-bottom-left-radius: 5px;
					   }
					   button{
						 margin-top: 40px;
						 margin-bottom: 10px;
						 background-color: white;
						 border: 1px solid black;
						 border-radius: 5px;
						 padding:10px;
					   }
					   button:hover{
						 background-color: black;
						 color: white;
						 transition: .5s;
						 cursor: pointer;
					   }
					  .searchBox i{
						color: white;
						padding: 0px 8px;
					  }
					  .searchBox i { color: rgb(0 100 0); padding: 0px 8px; }
						#searchBtn {
							margin-top: 5%;
							margin-left: 10px;
							margin-bottom: 5%;
							background-color: white;
							border: 1px solid black;
							border-radius: 5px;
							padding: 10px;
						}
                    </style>					  
				
			</head>
			
			<body>
				<header>
					<h1>The Network Of news</h1>
					<section>
						<link rel="stylesheet"
							href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
						<div class="menu-bar">
							<ul>
								<li ><a href="/"><i class="fa fa-home"></i>Home</a></li>
								<li><i id = "active" class="fa thin fa-newspaper"></i>category
									<div class="sub-menu-1">
										<ul>
										<li><a href="/category/general">General</a></li>
										<li><a href="/category/health">Health</a></li>
										<li><a href="/category/sports">Sport</a></li>
										<li><a href="/category/entertainment">Social media</a></li>
										<li><a href="/category/business">Business</a></li>
										<li><a href="/category/science">Science</a></li>
										<li><a href="/category/technology">Technology</a></li>
										</ul>
									</div>
								</li>
								    <div class="searchBox">
									<input type="text" class="searchText" name="text" placeholder="Search.."
									<li><button id= "searchBtn" onclick="onClicked()"><i class="fas fa-search"></i>search</button></li> 
									</div>
								<li><a href="#"><i class="fa fa-phone"></i>contact</a></li>
								<li><a href="#"><i class="fa fa-user"></i>About</a></li>
							</ul>
			
			
					</section>
			
			
					<section>
						
					</section>
				</header>
				<div class="main">`;

			data = data.articles;
			// console.log(data);
			for (var rec in data) {

				if(data[rec].urlToImage!= null){
					finalResponse += `<div class="card">

				<div class="image">
					<img
						src="${data[rec].urlToImage}" >
				</div>
				<div class="title">
					<h1>
					${data[rec].title}</h1>
				</div>
				<div class="des">
					<p>${data[rec].description.substring(0,50)+"....."}</p>
					<a href="${data[rec].url}" target="_blank"><button>Read More...</button></a>
				</div>
			</div>`;
				}

			}

			finalResponse += ` </div>
			<footer>
				<div class="left">
					<p>
						Copyright policy</p>
					<p>
						Privacy policy
					</p>
					<p>
						Terms and Conditions
					</p>
				</div>
		
		
			</footer>
		</body>
		<script>
function onClicked() {
  var text = document.getElementsByClassName("searchText")[0].value;
  if(text===""){
	alert("Search Text is Empty");
  }
 else{ window.location.href = '/search/'+text;}
}
const input = document.querySelector(".searchText");
input.addEventListener("keyup", (event) => {
	var text = document.getElementsByClassName("searchText")[0].value;
	if (event.key === "Enter") {
		if(text===""){
			alert("Search Text is Empty");
		  }
		  else{ window.location.href = '/search/'+text;} 
	}
  });
</script>
		</html>`;
		// let text =document.getElementsByClassName('searchText').value
			res.send(finalResponse);
		});
	
});

app.get("/search/:id",function (req, res){
	request(
		{
		uri: "https://newsapi.org/v2/everything?q="+req.params.id+"&apiKey="+my_api_key,
		method: 'GET'
	},
		function (_err, _res, body) {
			// console.log(body);
			var data = JSON.parse(body);
   
			var finalResponse = `
			<!DOCTYPE html>
			<html lang="en">
			
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>The network of news</title>
				<link rel="stylesheet" href="styles.css">
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
					integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA=="
					crossorigin="anonymous" referrerpolicy="no-referrer" />
					<style>* {
						padding: 0;
						margin: 0;
						box-sizing: border-box;
					  
					  }
					  
					  body {
						background-size: cover;
						background-position: center;
						font-family: sans-serif;
					  
					  }
					  
					  .menu-bar {
						background: rgb(0, 100, 0);
						text-align: center;
					  
					  }
					  
					  .menu-bar ul {
						display: inline-flex;
						list-style: none;
						color: #fff;
					  }
					  
					  .menu-bar ul li
					  {
						width: 120px;
						margin: 15px;
						padding: 15px;
					  }
					  
					  .menu-bar ul li a
					  {
						text-decoration: none;
						color: #fff;
					  }
					  .active, .menu-bar ul li:hover
					  {
					  background: #2bab0d;
					  border-radius: 3px;
					  }
					  .menu-bar .fa
					  {
					  margin-right: 8px;
					  }
					  .sub-menu-1
					  {
						display: none;
					  }
					  .menu-bar ul li:hover .sub-menu-1
					  {
						display: block;
						position: absolute;
						background: rgb(0, 100, 0);
						margin-top: 15px;
						margin-left: 15px;
					  }
					  .menu-bar ul li:hover .sub-menu-1 ul
					  {
					  display: block;
					  margin: 10px;
					  }
					  .menu-bar ul li:hover .sub-menu-1 ul li
					  {
					  width: 150px;
					  padding: 10px;
					  border-radius: 0;
					  text-align: left;
					  }
					  .searchBox
					  {
						position: relative;
						display: flex;
						justify-content: center;
						align-items: center;
						text-decoration: none;
						
					  }
					  .searchText
					  {
						width: 0px;
						padding: 0px;
						border-radius: 25px;
						border: none;
						outline: none;
						transition: all 0.2s linear;
						
					  }
					  .searchBtn
					  {
						width: 105px;
						height: 5px;
						
						text-decoration: none;
						color: #fff;
					   
						
						right: auto;
						display: grid;
						place-items: center;
					  }
					  .searchBox:hover > .searchText
					  {
					  width: 225px;
					  padding: 15px;
					  }
					  .main{
					  
						margin: 2%;
					   }
					   
					   .card{
						   height : 470px;
							width: 20%;
							display: inline-block;
							box-shadow: 2px 2px 20px black;
							border-radius: 5px; 
							margin: 2%;
							overflow : hidden;
						   }
					   
					   .image img{
						 width: 100%;
						 border-top-right-radius: 5px;
						 border-top-left-radius: 5px;
						 
					   
						
						}
					   
					   .title{
						
						 text-align: center;
						 padding: 10px;
						 
						}
					   
					   h1{
						 font-size: 20px;
						}
					   
					   .des{
						 padding: 3px;
						 text-align: center;
						
						 padding-top: 10px;
							   border-bottom-right-radius: 5px;
						 border-bottom-left-radius: 5px;
					   }
					   button{
						 margin-top: 40px;
						 margin-bottom: 10px;
						 background-color: white;
						 border: 1px solid black;
						 border-radius: 5px;
						 padding:10px;
					   }
					   button:hover{
						 background-color: black;
						 color: white;
						 transition: .5s;
						 cursor: pointer;
					   }
					  .searchBox i{
						color: white;
						padding: 0px 8px;
					  }
					   #heading{
						font-family: arial, sans-serif;
						font-size: 30px;
						font-weight: bold;
						margin-top: 0px;
						margin-bottom: 1px;
					   }
</style>					  
				
			</head>
			
			<body>
				<header>
					<h1 id = "heading" >The Network Of news</h1>
					<section>
						<link rel="stylesheet"
							href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
						<div class="menu-bar">
							<ul>
								<li class="active"><a href="/"><i class="fa fa-home"></i>Home</a></li>
								<li><a href="#"><i class="fa fa-phone"></i>contact</a></li>
								<li><a href="#"><i class="fa fa-user"></i>About</a></li>
							</ul>
			
			
					</section>
			
			
					<section>
						
					</section>
				</header>
				<div class="main">`;

				// console.log(data);
				if(data.totalResults== 0){
					finalResponse += `<h1> No Results Found For ${req.params.id} </h1>`;
				}
				else{
				data = data.articles;
				for (var rec in data) {

					if(data[rec].urlToImage!= null){
						finalResponse += `<div class="card">
	
					<div class="image">
						<img
							src="${data[rec].urlToImage}" >
					</div>
					<div class="title">
						<h1>
						${data[rec].title}</h1>
					</div>
					<div class="des">
						<p>${data[rec].description.substring(0,50)+"....."}</p>
						<a href="${data[rec].url}" target="_blank"><button>Read More...</button></a>
					</div>
				</div>`;
					}
	
				}
			}

			finalResponse += ` </div>
			<footer>
				<div class="left">
					<p>
						Copyright policy</p>
					<p>
						Privacy policy
					</p>
					<p>
						Terms and Conditions
					</p>
				</div>
		
		
			</footer>
		</body>
	
		</html>`;
			res.send(finalResponse);
		});
});