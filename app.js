$( document ).ready(function() {
	sizeGlows();
});

$('.titleContainer').on('click', function (){
	$('html, body').animate({
		scrollTop: $(this).offset().top
	}, 700);
	$(this).html("<h1 class='center title' id='proficienciesTitle'>" + $(this).data('title') + "</h1>");
});

$( window ).resize(function() {
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

//project expansion
$('.project').click(function (event){
	event.preventDefault();
});

//front navigation
$('#navProficiencies').click(function(event){
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $('#proficiencyContainer').offset().top
	}, 700);
})

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

function sizeGlows(){
	var profPic = $('#langaugesAndPlatformsImg');
	// $('#python').position(profPic.position());
	imageStartX = ($(window).width() / 2) - (profPic.width() / 2);
	imageStartY = profPic.position().top;
	imageWidth = profPic.width();
	imageHeight = profPic.height();
	$('#python').css('left', imageStartX);
	$('#python').css('top', imageStartY + 20);
	$('#python').css('height', imageHeight * .33);
	$('#python').css('width', imageWidth * .17);

	// $('#').css('left', imageStartX);
	// $('#').css('top', imageStartX);
	// $('#').css('width', imageWidth * 1);
	// $('#').css('height', imageHeight * 1);
}

$('.dud').click( function (event){
	event.preventDefault();
});

$('.titleLink').click( function (event){
	event.preventDefault();
});
