require("dotenv").config();
var express = require("express");
var app = new express();
var request = require("request");
const path = require('path');
var https =require("axios");

var server_port = process.env.PORT|| 80;
const my_api_key = require("./api.js");
const { rmSync } = require("fs");
var api_url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=" + my_api_key;


app.listen(server_port, function () {
	console.log("Server started on port : " + server_port) ; 
	console.log("http://localhost:"+server_port ) ; 
});

//Static Files for the site 
app.use(express.static(__dirname+'/public'));

// const one = process.env.HOME;
// console.log(__dirname);

app.get("/", function (_expReq, expRes) {
	// var finalResponse;

https.get(api_url).then(res => {
	var data = res.data;
	var finalResponse = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>The News Nation</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
                integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="stylesheet" href="/style.css">	
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />		  
                    </head>
        <body>
            <header>
            <section>
            <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <div class="menu-bar">
            <h1 id="news">The News Nation</h1>
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
                            <li><a href="/about"><i class="fa fa-user"></i>About</a></li>
                        </ul>
        
        
                </section>
        
                </header>
        
                <section  id ="marq"style = "z-index:-9999;margin-top: 125px; " >
                    <marquee>
                        <img src="https://5.imimg.com/data5/DR/NW/MY-45108437/newspaper-advertisement-all-india-500x500.jpg"
                            alt=" Image" style="height:300px;">
                            <h1 style="font-size:30px">Breaking News</h1><br>
                    </marquee>
                </section>
            <div class="main">`;
            
            data = data.articles;
            // console.log(data);
        for (var rec in data) {
            // console.log(rec);
            if(data[rec].urlToImage!= null && data[rec].description != null && data[rec].title != null && data[rec].url != null ){
                    finalResponse += `<div class="card">
                    <div class="card-heading">
                    <h1>
                    ${data[rec].source.name ?? "Unknown"}</h1>
                </div>
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
            <div class="bottom">
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
    <script src="/script.js"></script>
    </html>`;
	expRes.send(finalResponse);
}).catch(err => {
	console.log('Error: ', err.message);
});	

});

app.get("/category/:id", function (req, expRes) {
	https.get("https://newsapi.org/v2/top-headlines?country=in&category="+req.params.id+"&apiKey="+my_api_key).then(
		res=>{
			var data = res.data;
			data = data.articles;

			var finalResponse = `
			<!DOCTYPE html>
			<html lang="en">
			
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>The News Nation</title>
				<link rel="stylesheet" href="styles.css">
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
					integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA=="
					crossorigin="anonymous" referrerpolicy="no-referrer" />
					<link rel="stylesheet" href="/style.css">
					<link rel="icon" type="image/svg+xml" href="/favicon.svg" />					  
				
			</head>
			
			<body>
				<header>
					<section>
						<link rel="stylesheet"
							href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
							<div class="menu-bar">
							<h1 id="news">The News Nation</h1>
							<ul>
								<li ><a href="/"><i class="fa fa-home"></i>Home</a></li>
								<li class="active"><i class="fa thin fa-newspaper"></i>category
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
								<li><a href="/about"><i class="fa fa-user"></i>About</a></li>
							</ul>
			
			
					</section>
			
			
					<section>
						
					</section>
				</header>
				<div class="main">`;

			for (var rec in data) {

				if(data[rec].urlToImage!= null && data[rec].description != null && data[rec].title != null && data[rec].url != null ){
					finalResponse += `<div class="card">
					<div class="card-heading">
						<h1>
						${data[rec].source.name ?? "Unknown"}</h1>
					</div>
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
				<div class="bottom">
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
		<script src="/script.js"></script>
		</html>`;
		// let text =document.getElementsByClassName('searchText').value
		expRes.send(finalResponse);}
	).catch(err => {
		console.log('Error: ', err.message)}

	);
	
	
});

app.get("/search/:id",function (req, expRes){
	https.get("https://newsapi.org/v2/everything?q="+req.params.id+"&apiKey="+my_api_key).then(
     res =>{
		var data = res.data; 
		var finalResponse = `
	 <!DOCTYPE html>
	 <html lang="en">
	 
	 <head>
		 <meta charset="UTF-8">
		 <meta http-equiv="X-UA-Compatible" content="IE=edge">
		 <meta name="viewport" content="width=device-width, initial-scale=1.0">
		 <title>The News Nation</title>
		 <link rel="stylesheet" href="styles.css">
		 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
			 integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA=="
			 crossorigin="anonymous" referrerpolicy="no-referrer" />
			 <link rel="stylesheet" href="/style.css">
			 <link rel="icon" type="image/svg+xml" href="/favicon.svg">						  
		 
	 </head>
	 
	 <body>
		 <header>
			 <h1 id = "heading" >The News Nation</h1>
			 <section>
				 <link rel="stylesheet"
					 href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
				 <div class="menu-bar">
					 <ul>
						 <li class="active"><a href="/"><i class="fa fa-home"></i>Home</a></li>
						 <li><a href="#"><i class="fa fa-phone"></i>contact</a></li>
						 <li><a href="/about"><i class="fa fa-user"></i>About</a></li>
					 </ul>
	 
	 
			 </section>
	 
	 
			 <section>
				 
			 </section>
		 </header>`;
		 if(data.totalResults== 0){
			 finalResponse += `<div id="notFound"><h1> No Results Found For <p style="color: rgb(0,100,0);font-size:26px">${req.params.id}</p></h1></div>`;
		 }
		 else{
		 data = data.articles;
		 finalResponse += `<div class="main">`;
		 for (var rec in data) {

			 if(data[rec].urlToImage!= null && data[rec].description != null && data[rec].title != null && data[rec].url != null ){
				 finalResponse += `<div class="card">

			 <div class="image">
			 <div class="card-heading">
				 <h1>
				 ${data[rec].source.name ?? "Unknown"}</h1>
			 </div>
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
		 <div class="bottom">
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
 expRes.send(finalResponse);}
	).catch(err => {
		console.log('Error: ', err.message)});

	
});

/// about page [end-point]

app.get("/about",function (req,res){
	res.sendFile(path.join(__dirname+"/views/about_page.html"));
});