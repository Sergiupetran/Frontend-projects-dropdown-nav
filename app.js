const features = document.querySelector(".features-ul");
const company = document.querySelector(".company-ul");
features.addEventListener("click", function(){
	var Fcontent = document.querySelector(".features");
	var fup = document.querySelector(".up-first");
	var Fdown = document.querySelector(".down-first");
	if(fup.style.display === "inline-block"){
		fup.style.display = "none";
	}else{
		fup.style.display = "inline-block";
	}
	if(Fdown.style.display === "none"){
		Fdown.style.display = "inline-block";
	}else{
		Fdown.style.display = "none";
	}
	if(Fcontent.style.display === ""){
		Fcontent.style.display = "inline-block";
	}else{
		Fcontent.style.display = "";
	}
});
company.addEventListener("click", function(){
	var Ccontent = document.querySelector(".company");
	var Sdown = document.querySelector(".down-second");
	var sup = document.querySelector(".up-second");
	if(sup.style.display === "inline-block"){
		sup.style.display = "none";
	}else{
		sup.style.display = "inline-block";
	}
	if(Sdown.style.display === "none"){
		Sdown.style.display = "inline-block";
	}else{
		Sdown.style.display = "none";
	}
	if(Ccontent.style.display === ""){
		Ccontent.style.display = "inline-block";
	}else{
		Ccontent.style.display = "";
	}
});
const open = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");
const titles = document.querySelector(".titles");
const buttons = document.querySelector(".buttons");
const container = document.querySelector(".main-container");
open.addEventListener("click",function(){
    if(titles.style.width === "250px"){
    	titles.style.width = "0px";
    }else{
    	titles.style.width = "250px";
    }
    if(buttons.style.display === "block"){
        buttons.style.display = "none";
    }else{
    	buttons.style.display = "block";
    }
    if(open.style.display === "none"){
    	open.style.display = "block";
    }else{
    	open.style.display = "none";
    }
    if(close.style.display === "block"){
    	close.style.display = "none";
    }else{
    	close.style.display = "block";
    }
    if(container.style.backgroundColor === "rgba(0,0,0,0.5)"){
    	container.style.backgroundColor = "rgba(0,0,0,0.0)"
    }else{
    	container.style.backgroundColor = "rgba(0,0,0,0.5)"
    }
});
close.addEventListener("click", function(){
    if(titles.style.width === "0px"){
    	titles.style.width = "250px";
    }else{
    	titles.style.width = "0px";
    }
    if(buttons.style.display === "none"){
        buttons.style.display = "block";
    }else{
    	buttons.style.display = "none";
    }
    if(open.style.display === "block"){
    	open.style.display = "none";
    }else{
    	open.style.display = "block";
    }
    if(close.style.display === "none"){
    	close.style.display = "block";
    }else{
    	close.style.display = "none";
    }
    if(container.style.backgroundColor === "rgba(0,0,0,0.0)"){
    	container.style.backgroundColor = "rgba(0,0,0,0.5)"
    }else{
    	container.style.backgroundColor = "rgba(0,0,0,0.0)"
    }
});