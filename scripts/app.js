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

	$(window).resize(function (){
		sizeGlows();
	});

	//project fading
	$('.project').on('mouseover', function (){
		$('.project').not(this).animate({
			opacity: .3
		}, {
			duration: 500,
			queue: false
		});
	});
	$('.project').on('mouseout', function (){
		$('.project').animate({
			opacity: 1
		}, {
			duration: 500,
			queue: false
		});
	});

	//project content
	var ourTubeContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>OurTube  <span class='text-muted'>  Web App</span></h2><p class='lead'><ul class='lead'><li>Allowed people to create youtube playlists together in real-time and watch the playlists</li><li>Used Node.js with websockets on server side</li><li>Implemented with Redis key-value server storage</li><li>Used simple bootstrap style on client side</li><li>Incorporated youtube API and loading and playing videos</li><li>Check out the website currently live: <a href='http://ourtubes.herokuapp.com/'>ourtubes.herokuapp.com</a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgOurtube' src='images/projects/content/ourtube.png'></div></div></div>";
	var cubeonContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>CubeOn  <span class='text-muted'>  iPhone Game</span></h2><p class='lead'><ul class='lead'><li>First of 13 iPhone apps developed in high school years</li><li>Downloaded over 20,000 times</li><li>Implemented using own game logic architecture</li><li>Includes 100 original and challenging puzzle levels</li><li>Has sadly become somewhat buggy with new iOS updates</li><li>Check out the app in the iTunes App store:<br> <a href='https://itunes.apple.com/us/app/cubeon/id327461601?mt=8'><img src='images/nav/getOnAppStore.png' class='itunes'/></a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgCubeon' src='images/projects/content/cubeon.png'></div></div></div>";
	var teamSnakeContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>Team Snake  <span class='text-muted'>  Web App</span></h2><p class='lead'><ul class='lead'><li>Currently a work in progress</li><li>Concept is a the classic snake game but each of 4 players control only one direction</li><li>Uses the rapid updating server technology in Firebase to quickly communicate game logic across players</li><li>Very low level game logic implementation</li><li>Partially conceived as a social experiment to learn how people can work together</li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgTeamsnake' src='images/projects/content/teamsnake.png'></div></div></div>";
	var cryptographyContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>Cryptography  <span class='text-muted'>  iPhone Utility</span></h2><p class='lead'><ul class='lead'><li>Allows users to encrypt images usign a password and send them to others safely</li><li>Implemented original encryption / decryption system by systematically scrambling pixels of image based on password</li><li>Image can be pasted in, selected from library, or taken within the app and after transformation can be emailed, texted, copied, or saved</li><li>Check out the app in the iTunes App store:<br> <a href='https://itunes.apple.com/us/app/cryptography/id506580555?mt=8'><img src='images/nav/getOnAppStore.png' class='itunes'/></a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgCryptography' src='images/projects/content/cryptography.png'></div></div></div>";
	var sortingContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>Sorting Algorithms <span class='text-muted'>  In Assembly</span></h2><p class='lead'><ul class='lead'><li>Developed several of the classic sorting algorithms in the very low level language of assembly, which is what many higher languages compile into</li><li>Includes a lot of very low level memory management and branching logic structures</li><li>Includes timing analysis for each algoritm for comparision analysis</li><li>Check out the documentation and file download <a href='http://sortingalgorithmsinassembly.weebly.com/'>here</a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgTeamsnake' src='images/projects/content/sorting.png'></div></div></div>";
	var iNibblesContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>iNibbles  <span class='text-muted'>  iPhone Game</span></h2><p class='lead'><ul class='lead'><li>Full featured classic snake game with 20 levels, each with their own twist to the classial mechanic</li><li>Individual music for each level</li><li>Developed all game logic for all levels</li><li>Check out the app in the iTunes App store:<br> <a href='https://itunes.apple.com/us/app/inibbles/id432043378?mt=8'><img src='images/nav/getOnAppStore.png' class='itunes'/></a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgCubeon' src='images/projects/content/inibbles.png'></div></div></div>";
	var videographerContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>Stabilized Gimbal <span class='text-muted'>  Full system</span></h2><p class='lead'><ul class='lead'><li>A stabilized gimal system that stays steady when moved around</li><li>Specked to attach underneath a quadcopter</li><li>Includes an IR sensor array to track an ir beacon target</li><li>Uses an arduino mega as well as a motor controller board to stabilize and track target</li><li>Code written in C++</li><li>Check out the full project <a href='http://quadcoptervideographer.weebly.com/'>here</a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgTeamsnake' src='images/projects/content/videographer.png'></div></div></div>";
	var boatContent = "<div class='container marketing'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>Boat Simulation <span class='text-muted'>  Mechanics model</span></h2><p class='lead'><ul class='lead'><li>A full simulation and analysis of the mechanics of a boat tipping</li><li>Includes accurate mechanics physiscs implementation</li><li>Models a full ship based on a 1812 US ship</li><li>Analysis of force needed to make ship tip over</li><li>Simulation written in MatLAB</li><li>Check out the full paper <a href='boatPaper'>here</a></li></ul></p></div><div class='col-md-5'><img class='featurette-image img-responsive' id='projectContentImgTeamsnake' src='images/projects/content/boat.png'></div></div></div>";

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

	$('#python').css('left', imageStartX);
	$('#python').css('top', imageStartY + 20);
	$('#python').css('height', imageHeight * .35);
	$('#python').css('width', imageWidth * .20);

	$('#objectivec').css('left', imageStartX + imageWidth * .185);
	$('#objectivec').css('top', imageStartY - imageHeight * .02);
	$('#objectivec').css('height', imageHeight * .31);
	$('#objectivec').css('width', imageWidth * .215);

	$('#ruby').css('left', imageStartX + imageWidth * .28);
	$('#ruby').css('top', imageStartY + imageHeight * .225);
	$('#ruby').css('height', imageHeight * .30);
	$('#ruby').css('width', imageWidth * .17);

	$('#java').css('left', imageStartX + imageWidth * .055);
	$('#java').css('top', imageStartY + imageHeight * .22);
	$('#java').css('height', imageHeight * .51);
	$('#java').css('width', imageWidth * .26);

	$('#java').css('left', imageStartX + imageWidth * .055);
	$('#java').css('top', imageStartY + imageHeight * .22);
	$('#java').css('height', imageHeight * .51);
	$('#java').css('width', imageWidth * .26);
	// $('#').css('left', imageStartX);
	// $('#').css('top', imageStartX);
	// $('#').css('width', imageWidth * 1);
	// $('#').css('height', imageHeight * 1);
}
