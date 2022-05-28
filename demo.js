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
		expRes.send(finalResponse);