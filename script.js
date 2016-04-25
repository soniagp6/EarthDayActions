document.addEventListener("DOMContentLoaded", function() {
    var controller = new ScrollMagic.Controller();

	// get all slides
	var pinnedItems = document.querySelectorAll(".pinned");
	var pinTriggers = document.querySelectorAll(".pin");
	var textElements = document.querySelectorAll("h3");
	var textPins = document.querySelectorAll(".textpin");
	var textFadePins = document.querySelectorAll(".fadetext");
	var whitenElements = document.querySelectorAll(".whiten");
	var whitenTriggers = document.querySelectorAll(".whiten-trigger");
	var internalText = document.querySelectorAll(".internal-text");
	var internalImage = document.querySelectorAll(".internal-image");
	var internalTextPins = document.querySelectorAll(".internal-text-pin");


	// create pin for every item
	for (var i=0; i<pinnedItems.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: pinTriggers[i],
				triggerHook: .05
			})
			.setPin(pinnedItems[i])
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}

	for (var i=0; i<textElements.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: textPins[i],
				duration: "80%",
				triggerHook: .3
			})
			.setTween(textElements[i], 1, {opacity: 1}) // trigger a TweenMax.to tween
			.addTo(controller);
	}

	for (var i=0; i<textElements.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: textPins[i],
				duration: "80%",
				triggerHook: .3
			})
			.setTween(textElements[i], 1, {opacity: 1}) // trigger a TweenMax.to tween
			.addTo(controller);
	}

	for (var i=0; i<internalText.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: internalTextPins[i],
				duration: "80%",
				triggerHook: .3
			})
			.setTween(internalText[i], 1, {opacity: 1}) // trigger a TweenMax.to tween
			.addTo(controller);
	}

	for (var i=0; i<internalImage.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: document.querySelector(".internal-image-pin"),
				duration: "80%",
				triggerHook: .3
			})
			.setTween(internalImage[i], 1, {opacity: 1}) // trigger a TweenMax.to tween
			.addTo(controller);
	}

	for (var i=0; i<textElements.length - 1; i++) {
		new ScrollMagic.Scene({
				triggerElement: textFadePins[i], 
				duration: "30%",
				triggerHook: 0.3
			})
			.setTween(textElements[i], 1, {opacity: 0}) // trigger a TweenMax.to tween
			.addTo(controller);
	}


	new ScrollMagic.Scene({
			triggerElement: document.querySelector(".shrink-laptop"),
			duration: "100%",
			triggerHook: .1
		})
		.setTween(document.querySelector(".laptop-svg"), 1, {top: "+=60%", width: "30%", right: "-35%"}) // trigger a TweenMax.to tween
		.addTo(controller);



	for (var i=0; i<whitenElements.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: whitenTriggers[i], 
				duration: "200%",
				triggerHook: 0.3
			})
			.setTween(whitenElements[i], 1, {opacity: 1}) // trigger a TweenMax.to tween
			.addTo(controller);
	}

	new ScrollMagic.Scene({
			triggerElement: document.querySelector(".shrink-monitor"),
			duration: "100%",
			triggerHook: .1
		})
		.setTween(document.querySelector("#monitor-svg"), 1, {top: "+=55%", width: "40%"}) // trigger a TweenMax.to tween
		.addTo(controller);


	for (var i=0; i<whitenElements.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: document.querySelector("#darken-trigger"), 
				duration: "100%",
				triggerHook: 0.3
			})
			.setTween(whitenElements[i], 1, {fill: "#000000"}) // trigger a TweenMax.to tween
			.addTo(controller);
	}

	// // build tween
	// var tween3 = TweenMax.to("#whiten-monitor", 0.5, {opacity: 1});

	// // build scene and set duration to window height
	// var scene3 = new ScrollMagic.Scene({triggerElement: slides[3], duration: "200%", triggerHook: 'onLeave'})
	// 				.setTween(tween3)
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);


	// // build tween
	// var tween4 = TweenMax.to("html", 0.5, {background: "#000000"});

	// // build scene and set duration to window height
	// var scene4 = new ScrollMagic.Scene({triggerElement: slides[4], duration: "200%", triggerHook: 'onLeave'})
	// 				.setTween(tween4)
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);

	// // build tween
	// var tween5 = TweenMax.to("#whiten-monitor", 0.5, {background: "#000000"});

	// // build scene and set duration to window height
	// var scene5 = new ScrollMagic.Scene({triggerElement: document.querySelector("#step-away-panel"), duration: "100%", triggerHook: onLeave})
	// 				.setTween(tween5)
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);


	// // build tween
	// var tween3 = TweenMax.to("#laptop", 0.5, {opacity: 0});

	// // build scene and set duration to window height
	// var scene = new ScrollMagic.Scene({triggerElement: slides[1], duration: "150%"})
	// 				.setTween(tween3)
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);
});