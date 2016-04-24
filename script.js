document.addEventListener("DOMContentLoaded", function() {
    var controller = new ScrollMagic.Controller({
    	globalSceneOptions: {
		}
	});

	// get all slides
	var slides = document.querySelectorAll("section.panel");
	var halfwayTrigger = document.querySelectorAll("section.panel .halfway-trigger");
	var slideText = document.querySelectorAll("section.panel h3");


	// create scene for every slide
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: slides[i],
				triggerHook: 'onLeave'
			})
			.setPin(slides[i])
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}


	// var scene1 = new ScrollMagic.Scene({triggerElement: "#step-away-panel"})
	// 	.setPin("#monitor")
	// 	.addIndicators() // add indicators (requires plugin)
	// 	.addTo(controller);


	// for (var i=0; i<slides.length; i++) {
	// 	new ScrollMagic.Scene({
	// 			triggerElement: slides[i + 1]
	// 		})
	// 		.setPin(slideText[i])
	// 		.addIndicators("slide text") // add indicators (requires plugin)
	// 		.addTo(controller);
	// }


	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: slides[i],
				duration: "50%",
				triggerHook: 0.2
			})
			.setTween(slideText[i], 1, {opacity: 1}) // trigger a TweenMax.to tween
			.addTo(controller);
	}

	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: slides[i + 1],
				duration: "20%",
				triggerHook: .3
			})
			.setTween(slideText[i], 1, {opacity: 0}) // trigger a TweenMax.to tween
			.addTo(controller);
	}


	new ScrollMagic.Scene({
			triggerElement: slides[2],
			duration: "100%",
			triggerHook: .1
		})
		.setTween(document.querySelector("#laptop"), 1, {left: "80%", width: "65%", top: "80%"}) // trigger a TweenMax.to tween
		.addTo(controller);




	// // build tween
	// var tween1 = TweenMax.to("#laptop", 0.5, {scale: 0.3, top: "-8%"});

	// // build scene and set duration to window height
	// var scene = new ScrollMagic.Scene({triggerElement: slides[2], duration: "10%"})
	// 				.setTween(tween1)
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);


	// build tween
	var tween2 = TweenMax.to("#whiten-laptop", 0.5, {opacity: 1});

	// build scene and set duration to window height
	var scene2 = new ScrollMagic.Scene({triggerElement: slides[1], duration: "200%", triggerHook: 'onLeave'})
					.setTween(tween2)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	// build tween
	var tween3 = TweenMax.to("#whiten-monitor", 0.5, {opacity: 1});

	// build scene and set duration to window height
	var scene3 = new ScrollMagic.Scene({triggerElement: slides[3], duration: "200%", triggerHook: 'onLeave'})
					.setTween(tween3)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);


	// build tween
	var tween4 = TweenMax.to("html", 0.5, {background: "#000000"});

	// build scene and set duration to window height
	var scene4 = new ScrollMagic.Scene({triggerElement: slides[4], duration: "200%", triggerHook: 'onLeave'})
					.setTween(tween4)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	// build tween
	var tween5 = TweenMax.to("#whiten-monitor", 0.5, {background: "#000000"});

	// build scene and set duration to window height
	var scene5 = new ScrollMagic.Scene({triggerElement: document.querySelector("#step-away-panel"), duration: "100%", triggerHook: onLeave})
					.setTween(tween5)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);


	// // build tween
	// var tween3 = TweenMax.to("#laptop", 0.5, {opacity: 0});

	// // build scene and set duration to window height
	// var scene = new ScrollMagic.Scene({triggerElement: slides[1], duration: "150%"})
	// 				.setTween(tween3)
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);
});