$( document ).ready(function() {

	$('#langaugesAndPlatformsImg').click(function(){
		sizeGlows();
	});

	$('#projectPageTop').hide();
	$('#projectPageBottom').hide();

	$('.titleContainer').on('click', function (){
		$('html, body').animate({
			scrollTop: $(this).offset().top
		}, 700);
	}); 

	//proficiency glow
	$(window).resize(function (){
		sizeGlows();
	});

	// $(document).bind('mousemove', function(e){
	// 	$('#proficiencyFloater').css({
	// 		left:  e.pageX - $('#proficiencyFloater').width() / 2,
	// 		top:   e.pageY + 20
	// 	});
	// });

	$('#langaugesAndPlatformsImg').on('mouseover', function (){
		sizeGlows();
	});

	$('.proficiencyPiece').fadeTo(1,.01);
	
	$('.proficiencyPiece').on('mousemove', function (e){
		$('#proficiencyFloater').css({
			left:  e.pageX - $('#proficiencyFloater').width() / 2,
			top:   e.pageY + 20
		});
	});

	$('.proficiencyPiece').on('mouseover', function (e){
		$('#proficiencyFloater').animate({
			opacity: 1
		}, {
			duration: 400,
			queue: false
		});
		$(this).animate({
			opacity: 1
		}, {
			duration: 200,
			queue: false
		});
	});

	$('.proficiencyPiece').on('mouseout', function (){
		$('#proficiencyFloater').animate({
			opacity: 0,
		}, {
			duration: 400,
			queue: false,
		});

		$(this).animate({
			opacity: .1
		}, {
			duration: 200,
			queue: false
		});
	});

	//individual proficiency content
	$('.proficiencyPiece#python').on('mouseover', function(){
		$('#proficiencyFloater').html('<h4>I have worked with python in class at Olin, including a final project. I use it primarily for coding challenges / algorithms, as well as statistical analysis.</h4>');
	});
	$('.proficiencyPiece#java').on('mouseover', function(){
		$('#proficiencyFloater').html('<h4>I used java full time for several months, developing Android app with complex object and data structures. One of my most proficient languages.');
	});

	$('.proficiencyPiece#objectivec').on('mouseover', function(){
		$('#proficiencyFloater').html('<h4>What I used to write my 13 iPhone applications in over the course of a couple of years. Full understanding of several caveats such as blocks.</h4>');
	});
	$('.proficiencyPiece#ruby').on('mouseover', function(){
		$('#proficiencyFloater').html("<h4>Explored independently for use with the powerful rails framework. Worked with it for a couple of weeks on random projects and gained appreciate for its mostly unique style.</h4>");
	});
	$('.proficiencyPiece#javascript').on('mouseover', function(){
		$('#proficiencyFloater').html('<h4>One of my favorite langagues. Full understanding of a multitude of features, including object structures and its interesting treatment of functions.</h4>');
	});
	$('.proficiencyPiece#htmlcss').on('mouseover', function(){
		$('#proficiencyFloater').html('<h4>Basic building blocks for other frameworks. Very familar with its simple structure and available markup properties. Used to write the site you see here.</h4>');
	});
	$('.proficiencyPiece#c').on('mouseover', function(){
		$('#proficiencyFloater').html('<h4>Used as primary language for a semester long programming class. Thorough appreciation for its multitude of low level features and design choices.</h4>');
	});
	$('.proficiencyPiece#android').on('mouseover', function(){
		$('#proficiencyFloater').html('<h4>Worked on android full time for several months. Full experience with majority of features including activities, views, xml layout, asynchronous loading and file caching.</h4>');
	});
	$('.proficiencyPiece#ios').on('mouseover', function(){
		$('#proficiencyFloater').html('<h4>Used to write 13 iPhone apps. Full understanding of its model, view, controller setup. Experienced with basic layout system and behavior for both game and utility applications.</h4>');
	});
	$('.proficiencyPiece#nodejs').on('mouseover', function(){
		$('#proficiencyFloater').html('<h4>Currently my favorite server side framework and what I used to host this site. Used to create a couple projects using express and websockets integration, as well as npm for package mangement.</h4>');
	});
	$('.proficiencyPiece#rails').on('mouseover', function(){
		$('#proficiencyFloater').html('<h4>Experienced with through rapid prototyping of ideas. Able to use many of the frameworks features, including rake tasks, migrations, and scaffold creation from command line.</h4>');
	});
	$('.proficiencyPiece#backbone').on('mouseover', function(){
		$('#proficiencyFloater').html('<h4>Excellent javascript client side organizer for complex website views and model content. Fully experienced with view and model oriented configuration, as well as server fetching of model data.</h4>');
	});
	$('.proficiencyPiece#jquery').on('mouseover', function(){
		$('#proficiencyFloater').html('<h4>What was used to create a lot of features of this website. Experienced with a multitude of properties and functions, as well as ajax and promises setup and use.</h4>');
	});
	$('.proficiencyPiece#ember').on('mouseover', function(){
		$('#proficiencyFloater').html('<h4>Experienced with ember app setup and configuration for nested, real-time updating views, including handlebars templating. Experienced with model, view, controller structure and interactions.</h4>');
	});

	//project fading
	$('.project').on('mouseover', function (){
		$('.project').not(this).animate({
			opacity: .2
		}, {
			duration: 200,
			queue: false
		});
	});
	$('.project').on('mouseout', function (){
		$('.project').animate({
			opacity: 1
		}, {
			duration: 200,
			queue: false
		});
	});	

	//project content
	var ourTubeContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>OurTube  <span class='text-muted'>  Web App</span></h2><p class='lead'><ul class='lead'><li>Allowed people to create youtube playlists together in real-time and watch the playlists</li><li>Used Node.js with websockets on server side</li><li>Implemented with Redis key-value server storage</li><li>Used simple bootstrap style on client side</li><li>Incorporated youtube API and loading and playing videos</li><li>Check out the website currently live: <a href='http://ourtubes.herokuapp.com/'>ourtubes.herokuapp.com</a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgOurtube' src='images/projects/content/ourtube.png'></div></div></div>";
	var cubeonContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>CubeOn  <span class='text-muted'>  iPhone Game</span></h2><p class='lead'><ul class='lead'><li>First of 13 iPhone apps developed in high school years</li><li>Downloaded over 20,000 times</li><li>Implemented using own game logic architecture</li><li>Includes 100 original and challenging puzzle levels</li><li>Has sadly become somewhat buggy with new iOS updates</li><li>Check out the app in the iTunes App store:<br> <a href='https://itunes.apple.com/us/app/cubeon/id327461601?mt=8'><img src='images/nav/getOnAppStore.png' class='itunes'/></a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgCubeon' src='images/projects/content/cubeon.png'></div></div></div>";
	var teamSnakeContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>Team Snake  <span class='text-muted'>  Web App</span></h2><p class='lead'><ul class='lead'><li>Currently a work in progress</li><li>Concept is a the classic snake game but each of 4 players control only one direction</li><li>Uses the rapid updating server technology in Firebase to quickly communicate game logic across players</li><li>Very low level game logic implementation</li><li>Partially conceived as a social experiment to learn how people can work together</li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgTeamsnake' src='images/projects/content/teamsnake.png'></div></div></div>";
	var cryptographyContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>Cryptography  <span class='text-muted'>  iPhone Utility</span></h2><p class='lead'><ul class='lead'><li>Allows users to encrypt images usign a password and send them to others safely</li><li>Implemented original encryption / decryption system by systematically scrambling pixels of image based on password</li><li>Image can be pasted in, selected from library, or taken within the app and after transformation can be emailed, texted, copied, or saved</li><li>Check out the app in the iTunes App store:  <a href='https://itunes.apple.com/us/app/cryptography/id506580555?mt=8'><img src='images/nav/getOnAppStore.png' class='itunes'/></a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgCryptography' src='images/projects/content/cryptography.png'></div></div></div>";
	var sortingContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>Sorting Algorithms <span class='text-muted'>  In Assembly</span></h2><p class='lead'><ul class='lead'><li>Developed several of the classic sorting algorithms in the very low level language of assembly, which is what many higher languages compile into</li><li>Includes a lot of very low level memory management and branching logic structures</li><li>Includes timing analysis for each algoritm for comparision analysis</li><li>Check out the documentation and file download <a href='http://sortingalgorithmsinassembly.weebly.com/'>here</a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgSorting' src='images/projects/content/sorting.png'></div></div></div>";
	var iNibblesContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>iNibbles  <span class='text-muted'>  iPhone Game</span></h2><p class='lead'><ul class='lead'><li>Full featured classic snake game with 20 levels, each with their own twist to the classial mechanic</li><li>Individual music for each level</li><li>Developed all game logic for all levels</li><li>Check out the app in the iTunes App store:<br> <a href='https://itunes.apple.com/us/app/inibbles/id432043378?mt=8'><img src='images/nav/getOnAppStore.png' class='itunes'/></a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgINibbles' src='images/projects/content/inibbles.png'></div></div></div>";
	var videographerContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>Stabilized Gimbal <span class='text-muted'>  Full system</span></h2><p class='lead'><ul class='lead'><li>A stabilized gimal system that stays steady when moved around</li><li>Specked to attach underneath a quadcopter</li><li>Includes an IR sensor array to track an ir beacon target</li><li>Uses an arduino mega as well as a motor controller board to stabilize and track target</li><li>Code written in C++</li><li>Check out the full project <a href='http://quadcoptervideographer.weebly.com/'>here</a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgVideographer' src='images/projects/content/videographer.png'></div></div></div>";
	var boatContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>Boat Simulation <span class='text-muted'>  Mechanics model</span></h2><p class='lead'><ul class='lead'><li>A full simulation and analysis of the mechanics of a boat tipping</li><li>Includes accurate mechanics physiscs implementation</li><li>Models a full ship based on a 1812 US ship</li><li>Analysis of force needed to make ship tip over</li><li>Simulation written in MatLAB</li><li>Check out the full paper <a href='boatPaper'>here</a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgBoat' src='images/projects/content/boat.png'></div></div></div>";

	$('#ourtubeProject').click(function(event){
		event.preventDefault();
		$('#projectPageTop').html(ourTubeContent);
	});
	$('#cubeonProject').click(function(event){
		event.preventDefault();
		$('#projectPageTop').html(cubeonContent);
	});
	$('#teamsnakeProject').click(function(event){
		event.preventDefault();
		$('#projectPageTop').html(teamSnakeContent);
	});
	$('#cryptographyProject').click(function(event){
		event.preventDefault();
		$('#projectPageTop').html(cryptographyContent);
	});
	$('#sortingProject').click(function(event){
		event.preventDefault();
		$('#projectPageBottom').html(sortingContent);
	});
	$('#inibblesProject').click(function(event){
		event.preventDefault();
		$('#projectPageBottom').html(iNibblesContent);
	});
	$('#videographerProject').click(function(event){
		event.preventDefault();
		$('#projectPageBottom').html(videographerContent);
	});
	$('#boatProject').click(function(event){
		event.preventDefault();
		$('#projectPageBottom').html(boatContent);
	});
	sizeGlows();

	$('#projectPageTop').hide();
	$('.project.top').click(function (event){
		event.preventDefault();
		$('#projectPageTop').slideDown();
	});
	var projectOpened = 0;
	var whichLineProjectOpen = 0;
	$('.project.top').click(function (event){
		event.preventDefault();
		//the slide up and down
		if(projectOpened === 0){
			$('#projectPageTop').slideDown();
			$('html, body').animate({
				scrollTop: $(this).offset().top
			}, 700);

			projectOpened = this;
			whichLineProjectOpen = 1;
			// $('#projectUpArrow').css('left', $(this).position().left + ($(this).width() / 2) + 6);
			// $('#projectUpArrow').css('top', $(this).position().top + $(this).height() + 85);
		}else{
			if(projectOpened === this){
				$('#projectPageTop').slideUp();
				projectOpened = 0;
				whichLineProjectOpen = 0;
				// $('#projectUpArrow').hide();
			}else{
				// $('#projectUpArrow').css('left', $(this).position().left + ($(this).width() / 2) + 6);
				// $('#projectUpArrow').css('top', $(this).position().top + $(this).height() + 85);
				if(whichLineProjectOpen == 2){
					$('#projectPageTop').slideDown(function(){
						// $('#projectUpArrow').show();
					});
					$('#projectPageBottom').slideUp();
					whichLineProjectOpen = 1;
				}
				projectOpened = this;
			}
		}
	});

	$('.project.bottom').click(function (event){
		event.preventDefault();
		//the slide up and down
		if(projectOpened === 0){
			$('#projectPageBottom').slideDown(function(){
				// $('#projectUpArrow').show();
			});
			$('html, body').animate({
				scrollTop: $(this).offset().top
			}, 700);
			projectOpened = this;
			whichLineProjectOpen = 2;
			// $('#projectUpArrow').css('left', $(this).position().left + ($(this).width() / 2) + 6);
			// $('#projectUpArrow').css('top', $(this).position().top + $(this).height() + 35);
		}else{
			if(projectOpened === this){
				$('#projectPageBottom').slideUp();
				projectOpened = 0;
				whichLineProjectOpen = 0;
				// $('#projectUpArrow').hide();
			}else{
				if(whichLineProjectOpen == 1){
					var projectHex = this;
					$('#projectPageTop').slideUp(function(){
						// $('#projectUpArrow').css('left', $(projectHex).position().left + ($(projectHex).width() / 2) + 6);
						// $('#projectUpArrow').css('top', $(projectHex).position().top + $(projectHex).height() + 35);
					});
					$('#projectPageBottom').slideDown(function(){

					});
					whichLineProjectOpen = 2;
				}else{
					// $('#projectUpArrow').css('left', $(this).position().left + ($(this).width() / 2) + 6);
					// $('#projectUpArrow').css('top', $(this).position().top + $(this).height() + 35);
				}
				projectOpened = this;
			}
		}
	});

	//front navigation
	$('#navProficiencies').click(function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $('#proficiencyContainer').offset().top
		}, 700);
	});

	$('#navProjects').click(function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $('#projectsContainer').offset().top
		}, 700);
	})

	$('#navWork').click(function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $('#workContainer').offset().top
		}, 700);
	})

	$('#navEducation').click(function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $('#educationContainer').offset().top
		}, 700);
	})

	//scroll to top:
	$(window).scroll(function() {
		if($(window).scrollTop() > 200) {	
			$("#backToTop").fadeIn(250);
		} else {	
			$("#backToTop").fadeOut(250);
		}
	});

	$("#backToTop").on("click",function(){
		$("html, body").animate({
			scrollTop: 0
		},1000);
	});

	$('.dud').click( function (event){
		event.preventDefault();
	});

	$('.titleLink').click( function (event){
		event.preventDefault();
	});
});

function sizeGlows(){
	var profPic = $('#langaugesAndPlatformsImg');
	// $('#python').position(profPic.position());
	imageStartX = ($(window).width() / 2) - (profPic.width() / 2);
	imageStartY = profPic.position().top;
	imageWidth = profPic.width();
	imageHeight = profPic.height();

	$('#python').css('left', imageStartX- imageWidth * .002);
	$('#python').css('top', imageStartY + imageHeight * .034);
	$('#python').css('height', imageHeight * .345);
	$('#python').css('width', imageWidth * .205);

	$('#objectivec').css('left', imageStartX + imageWidth * .185);
	$('#objectivec').css('top', imageStartY - imageHeight * .01);
	$('#objectivec').css('height', imageHeight * .3);
	$('#objectivec').css('width', imageWidth * .215);

	$('#ruby').css('left', imageStartX + imageWidth * .28);
	$('#ruby').css('top', imageStartY + imageHeight * .225);
	$('#ruby').css('height', imageHeight * .30);
	$('#ruby').css('width', imageWidth * .17);

	$('#java').css('left', imageStartX + imageWidth * .06);
	$('#java').css('top', imageStartY + imageHeight * .22);
	$('#java').css('height', imageHeight * .51);
	$('#java').css('width', imageWidth * .245);

	$('#javascript').css('left', imageStartX + imageWidth * .27);
	$('#javascript').css('top', imageStartY + imageHeight * .503);
	$('#javascript').css('height', imageHeight * .473);
	$('#javascript').css('width', imageWidth * .292);

	$('#htmlcss').css('left', imageStartX + imageWidth * .03);
	$('#htmlcss').css('top', imageStartY + imageHeight * .668);
	$('#htmlcss').css('height', imageHeight * .335);
	$('#htmlcss').css('width', imageWidth * .278);

	$('#c').css('left', imageStartX + imageWidth * .44);
	$('#c').css('top', imageStartY + imageHeight * .138);
	$('#c').css('height', imageHeight * .237);
	$('#c').css('width', imageWidth * .143);

	$('#android').css('left', imageStartX + imageWidth * .53);
	$('#android').css('top', imageStartY + imageHeight * .071);
	$('#android').css('height', imageHeight * .448);
	$('#android').css('width', imageWidth * .34);

	$('#nodejs').css('left', imageStartX + imageWidth * .51);
	$('#nodejs').css('top', imageStartY + imageHeight * .505);
	$('#nodejs').css('height', imageHeight * .25);
	$('#nodejs').css('width', imageWidth * .42);

	$('#backbone').css('left', imageStartX + imageWidth * .54);
	$('#backbone').css('top', imageStartY + imageHeight * .711);
	$('#backbone').css('height', imageHeight * .13);
	$('#backbone').css('width', imageWidth * .315);

	$('#jquery').css('left', imageStartX + imageWidth * .53);
	$('#jquery').css('top', imageStartY + imageHeight * .80);
	$('#jquery').css('height', imageHeight * .165);
	$('#jquery').css('width', imageWidth * .34);

	$('#ios').css('left', imageStartX + imageWidth * .788);
	$('#ios').css('top', imageStartY + imageHeight * .003);
	$('#ios').css('height', imageHeight * .613);
	$('#ios').css('width', imageWidth * .283);

	$('#rails').css('left', imageStartX + imageWidth * .878);
	$('#rails').css('top', imageStartY + imageHeight * .527);
	$('#rails').css('height', imageHeight * .22);
	$('#rails').css('width', imageWidth * .116);

	$('#ember').css('left', imageStartX + imageWidth * .81);
	$('#ember').css('top', imageStartY + imageHeight * .675);
	$('#ember').css('height', imageHeight * .305);
	$('#ember').css('width', imageWidth * .19);

}
