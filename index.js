$(document).ready(()=>{
	$(".showCase").show();
	$('.loader').hide();  
	$("#exampleModalCenter").hide();   
	$('#inputTitle, #searchTitle').show();
	$('#inputID, #searchID').hide();
	$(".modalbtn").click(()=>{
		location.reload();
	});
	$(".main-Content").hide();


	//Navigation bar
 	 	$("#title").click(()=>{
		$('#inputTitle, #searchTitle').show();
		$('#inputID, #searchID').hide();
			});

	$("#imdbID").click(()=>{
		$('#inputID, #searchID').show();
		$('#inputTitle, #searchTitle').hide();
		
	});



		$("#searchTitle").click(()=>{
		if($('#inputTitle').val() == ''){
			alert("Please enter Movie Title.");
		}
		else
		{
			let myTitle = document.getElementById("inputTitle").value;
			console.log(myTitle);
			//console.log("hello");
			getresponse(myTitle, 1);
			$('#inputTitle').val('');
		}
		
	});

			$("#searchID").click(()=>{
		if($('#inputID').val() == '')
		{
			alert("Please enter Movie ID.")
		}
		else{
			let myID = document.getElementById("inputID").value;
			console.log(myID);
			getresponse(myID, 2);
			$('#inputID').val('');
		}
	});


	let getresponse = (x, num) =>

	{
			console.log("function");
			let link ="";

			if(x !== undefined && num == 1)
			{ 
				link+=`https://www.omdbapi.com/?t=${x}&apikey=3fcf6962`;
				console.log("title link")
			}
			else if(x !== undefined && num == 2)
			{
				link+=`https://www.omdbapi.com/?i=${x}&apikey=3fcf6962`;
			}
			else{}

		$.ajax({
		type:"GET",
		url:link,
		async:true,				

		success: (response) => {
				if(response.Response !== "False") {
                    
                    console.log("True");
                    $(".showCase").hide();
                    $(".main-Content").show();

					
									if(response.Title !== undefined && response.Title !== null) {
							
											$('.movie-name').text(response.Title);
							
										}
							
									else{}
								
									if(response.Genre !== undefined && response.Genre !== null)
										{
											$(".genre").text(response.Genre);
										}
									else{}
		
									if(response.Rated !== undefined && response.Rated !== null)
										{
											$(".rating").text(response.Rated);
										}
									else{}

										
									if(response.Actors !== undefined && response.Actors !== null)
										{
											$(".actors").text(response.Actors);
										}
									else{}

											
									if(response.Plot !== undefined && response.Plot !== null)
										{
											$(".plot").text(response.Plot);
										}
									else{}

									if(response.imdbID !== undefined && response.imdbID !== null)
										{
											$(".imdbId").text(response.imdbID);
										}
									else{}
									
									if(response.Director !== undefined && response.Director !== null)
										{
											$(".movieDirector").text(response.Director);
										}
									else{}
										
									if(response.Year !== undefined && response.Year !== null)
										{
											$(".yearReleased").text(response.Released);
										}
									else{}
										
									if(response.imdbRating !== undefined && response.imdbRating !== null)
										{
											$(".imdbRating").text(response.imdbRating);
										}
									else{}
									
									if(response.Metascore !== undefined && response.Metascore !== null)
										{
											$(".metascore").text(response.Metascore);
										}
									else{}
										
									if(response.Poster !== undefined && response.Poster !== null)
										{
											$("#moviePoster").attr('src',response.Poster);
										}
									else{}
									
									if(response.Poster == undefined && response.Poster == null)
										{
											$("#moviePoster").attr('src',dummy.jpg);
										}
							else{}
						}
						else{
							$(".main-Content").hide();
							$("#exampleModalCenter").modal('show');
							
						}
					},




					timeout:9000,//in milliseconds

					


					error: (request, errorType, errorMessage) => {
						console.log("error caught");
						 if(errorType==="timeout")
						  	{
						 	alert("Request timed out.");      
				        	} 
				        else {
				            console.log("success");
				        	}
					},

					


					beforeSend: () => {
						$('.loader').show();
						},

					complete : () => {
						$('.loader').hide();
			        	}



		});


	}
});