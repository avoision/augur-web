var firstScreen,
	currentScreen,
	totalScreens = 31,
	screenPath = 'img/'
	screenFilename = 'augurScreen_',
	screenFileType = '.png',
	clickable = false
	taglines = [
		'It\'s like <em>Oblique Strategies</em>, but powered by crazy people.',
		'It\'s like a Magic 8-Ball for the Internet.',
		'It\'s like having unlimited fortune cookies (with typos).',
		'It\'s like a free, unlicensed, emotionally unstable therapist.'
	];

function showTagline() {
	var tagLength = taglines.length;
	var randomTag = Math.round(Math.random() * (tagLength-1));
	$('.tagline').html(taglines[randomTag]);
};

function init() {
	showTagline();
	firstScreen = Math.round(Math.random() * totalScreens) + 1;
	setTimeout(fadeHome, 2000);
};

function fadeHome() {
	$('.screen').animate({
		opacity: 0,
	}, 700, function() {
		currentScreen = firstScreen;
		$('.screen img').attr('src', '');
		showLogo();
	});
};

function showLogo() {
	$('.logo img').fadeIn(650);

	setTimeout(showScreen, 900);
};

function showScreen() {
	var screenNum;
	if (currentScreen < 10) {
		screenNum = "0" + currentScreen;
	} else {
		screenNum = currentScreen;
	}

	$('.screen img').attr('src', screenPath + screenFilename + screenNum + screenFileType);
	$('.screen').fadeTo(700, 1, function() {
		clickable = true;
	});
};

function hideScreen() {
	clickable = false;
	
	$('.screen').fadeOut(700, function() {
		currentScreen += 1;
		if (currentScreen > totalScreens) {
			currentScreen = 1;
		};
		showScreen();
	})
};


$(document).ready(function() {
    init();

    $('.screen').click(function() {
    	hideScreen();
    })
});