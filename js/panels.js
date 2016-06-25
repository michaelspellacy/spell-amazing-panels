/* 
	TMP Worldwide - Elastic Panels
	Author:  Michael "Spell" Spellacy, Lead UI Developer <michael.spellacy@tmp.com>, TMP Worldwide LLC
*/

if ($(window).width() > 480) {

	$("html").attr("class", "js"); // Make template JS active

	// Panel Logic

	var durationtime = "medium";

	var config = {

		timeout: 1000 // number = milliseconds delay before onMouseOut    

	};

	var audioPlayer = $("audio");

	$(audioPlayer).hide();

	$("#panels li").hover(function() {

			$(this).children(".label").show("fast");

		}, function(test){

			$(this).children(".label").hide("fast");

		}

	);

	$(".label").hover(function() { // Needs Work

			audioPlayer.show("fast");

		}, function(test){

			audioPlayer.hide("fast");

		}

	);

	$("#panel-a").hoverIntent(function(config) {
		$("#panel-c").animate({width: "100px"},durationtime);
		$("#panel-b").animate({height: "200px"},durationtime);
		$("#panel-d").animate({width: "100px"},durationtime);
		$("#panel-a").animate({width: "400px", height: "404px"},durationtime);
	},
	function(config) {
		$("#panel-b").animate({height: "302px"},durationtime);
		$("#panel-c").animate({width: "200px"},durationtime);
		$("#panel-d").animate({width: "200px"},durationtime);
		$("#panel-a").animate({width: "300px", height: "302px"},durationtime);
	});

	$("#panel-b").hoverIntent(function(config) {
		$("#panel-a").animate({height: "182px"},durationtime);
		$("#panel-b").animate({height: "422px"},durationtime);
	},
	function(config) {
		$("#panel-b").animate({height: "302px"},durationtime);
		$("#panel-a").animate({height: "302px"},durationtime);
	});

	$("#panel-c").hoverIntent(function(config) {
		$("#panel-a").animate({width: "200px"},durationtime);
		$("#panel-d").animate({height: "98px"},durationtime);
		$("#panel-c").animate({width: "300px", height: "302px"},durationtime);
	},
	function(config) {
		$("#panel-a").animate({width: "300px"},durationtime);
		$("#panel-d").animate({width: "200px", height: "200px"},durationtime);
		$("#panel-c").animate({width: "200px", height: "200px"},durationtime);
	});

	$("#panel-d").hoverIntent(function(config) {
		$("#panel-a").animate({width: "100px"},durationtime);
		$("#panel-b").animate({width: "100px"},durationtime);
		$("#panel-c").animate({width: "400px", height: "100px"},durationtime);
		$("#panel-e").animate({width: "400px", height: "50px"},durationtime);
		$("#panel-d").animate({bottom: "54px", width: "400px", height: "450px"},durationtime);
		document.getElementById("audio-player").play(); // Needs work
	},
	function(config) {
		$("#panel-a").animate({width: "300px"},durationtime);
		$("#panel-b").animate({width: "300px"},durationtime);
		$("#panel-c").animate({width: "200px", height: "200px"},durationtime);
		$("#panel-e").animate({width: "200px", height: "200px"},durationtime);
		$("#panel-d").animate({bottom: "204px", width: "200px", height: "200px"},durationtime);
		document.getElementById("audio-player").pause(); // Needs Work
	});

	$("#panel-e").hoverIntent(function(config) {
		$("#panel-b").animate({width: "200px"},durationtime);
		$("#panel-d").animate({bottom: "306px", height: "100px"},durationtime);
		$("#panel-e").animate({width: "300px", height: "302px"},durationtime);
	},
	function(config) {
		$("#panel-b").animate({width: "300px"},durationtime);
		$("#panel-d").animate({bottom: "204px", height: "200px"},durationtime);
		$("#panel-e").animate({width: "200px", height: "200px"},durationtime);
	});

	$("#panel-f").hoverIntent(function(config) {
		$("#panel-c").animate({right: "204px", width: "100px"},durationtime);
		$("#panel-d").animate({right: "204px", width: "100px"},durationtime);
		$("#panel-f").animate({width: "200px"},durationtime);
	},
	function(config) {
		$("#panel-c").animate({right: "104px", width: "200px"},durationtime);
		$("#panel-d").animate({right: "104px", width: "200px"},durationtime);
		$("#panel-f").animate({width: "100px"},durationtime);
	});

	$("#panel-g").hoverIntent(function(config) {
		$("#panel-g").animate({width: "200px", height: "404px"},durationtime);
		$("#panel-d").animate({right: "204px", width: "100px"},durationtime);
		$("#panel-e").animate({right: "204px", width: "100px"},durationtime);
		$("#panel-f").animate({height: "200px"},durationtime);
	},
	function(config) {
		$("#panel-d").animate({right: "104px", width: "200px"},durationtime);
		$("#panel-e").animate({right: "104px", width: "200px"},durationtime);
		$("#panel-f").animate({height: "404px"},durationtime);
		$("#panel-g").animate({width: "100px", height: "200px"},durationtime);
	});

} // End If