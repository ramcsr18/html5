function showMenuNav(){
	var oMenuNav = document.getElementById("menunav")
	if(oMenuNav.className === "topnav"){
		oMenuNav.className += " responsive"
	}else{
		oMenuNav.className = "topnav"
	}
}