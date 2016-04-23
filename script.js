document.addEventListener("DOMContentLoaded", function() {
    var controller = new ScrollMagic.Controller({
    	globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	// get all slides
	var slides = document.querySelectorAll("section.panel");
	var halfwayTrigger = document.querySelectorAll("section.panel .halfway-trigger");
	var slideText = document.querySelectorAll("section.panel h3");


	// create scene for every slide
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: slides[i]
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


	// for (var i=0; i<slides.length; i++) {
	// 	new ScrollMagic.Scene({
	// 			triggerElement: halfwayTrigger[i + 1],
	// 			duration: "50%"
	// 		})
	// 		.setTween(slideText[i], 1, {opacity: 1}) // trigger a TweenMax.to tween
	// 		.addIndicators("halfwayTrigger") // add indicators (requires plugin)
	// 		.addTo(controller);
	// }

	// // create scene for every slide
	// for (var i=0; i<slides.length - 1; i++) {
	// 	new ScrollMagic.Scene({
	// 			triggerElement: slides[i],
	// 			duration: "100%"
	// 		})
	// 		.setTween(slideText[i], 1, {opacity: 0}) // trigger a TweenMax.to tween
	// 		.addIndicators() // add indicators (requires plugin)
	// 		.addTo(controller);
	// }



	// // build tween
	// var tween1 = TweenMax.to("#laptop", 0.5, {scale: 0.3, top: "-8%"});

	// // build scene and set duration to window height
	// var scene = new ScrollMagic.Scene({triggerElement: slides[2], duration: "10%"})
	// 				.setTween(tween1)
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);


	// // build tween
	// var tween2 = TweenMax.to(".whiten", 0.5, {opacity: 1});

	// // build scene and set duration to window height
	// var scene = new ScrollMagic.Scene({triggerElement: slides[0], duration: "80%"})
	// 				.setTween(tween2)
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