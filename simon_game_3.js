var list_1 = [];
var list_2 = [];
var list_3 = [];
var start = false;
var level = 0;
var i = 0;

function soundPlay (value){
	switch(value){
		case "green":
			sound = new Audio("sounds/green.mp3");
			sound.play();
			break;
		case "red":
			sound = new Audio("sounds/red.mp3");
			sound.play();
			break;
		case "yellow":
			sound = new Audio("sounds/yellow.mp3");
			sound.play();
			break;
		case "blue":
			sound = new Audio("sounds/blue.mp3");
			sound.play();
			break;
	}
}

function background(){
	$("body").addClass("animation-bg");
	new Audio("sounds/wrong.mp3").play();
	setTimeout(function(){
		$("body").removeClass("animation-bg");
	} ,100)
	
}

function AddAnimation(value){
	$("."+value).addClass("animation");
	setTimeout(function(){
		$("."+value).removeClass("animation");
	} ,100);
}

function decesion(){

	var rand = (Math.random())*10;

	if (rand>=0 && rand <=2.5){
		color = "green";
		list_1.push(color);
		AddAnimation(color);
		next(color);
		console.log(color);
		
		

	}else if(rand>=2.6 && rand <= 5.0){
		color = "red";
		list_1.push(color);
		AddAnimation(color);
		next(color);
		console.log(color);
		
		

	}else if(rand>=5.1 && rand <= 7.5){
		color = "yellow";
		list_1.push(color);
		AddAnimation(color);
		next(color);
		console.log(color);
		
	}else{
		color = "blue";
		list_1.push(color);
		AddAnimation(color);
		next(color);
		console.log(color);
	}
}

function next(){
	level++;
	$(".heading").text("Level"+" "+level);
	start = true;
	list_2 = [];
	console.log(list_1);
	
}



$("body").keydown(function(event){
	if (event.key === "A" || event.key === "a"){
		decesion();
	}
});

$(".btn-1").click(function(){
	if (start){
		
		var button = $(this).attr("id");
		list_2.push(button);
			
		if (list_1[i] === list_2[i]){
			AddAnimation(button);
			soundPlay(button);
			i++;
			
		}else{
			background();
			level = 0;
			$(".heading").text("Press A to Continue");
			start=false;
			console.log("fail");
			list_1=[];

			
		}if(list_1.length === list_2.length){
			if (list_1[list_1.length-1] === list_2[list_2.length-1]){
				i = 0;
				decesion();
			}
		}
	}
})