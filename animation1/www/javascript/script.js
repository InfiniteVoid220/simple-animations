(function (window, document) { 

function grow(){
	var hidenCircles = document.getElementsByClassName("hiden");

	while(hidenCircles.length){
		hidenCircles[0].style.animationDelay = "4s";
		hidenCircles[0].classList.add("show");
		hidenCircles[0].classList.remove("hiden");

	}
}

var show = document.getElementById("show");

show.addEventListener('click', function(){
       grow();
})

})(window, document);
