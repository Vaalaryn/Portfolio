
function openPage(pageName, elmnt, myclass) {
    var i, tabcontent, tablinks, x;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByTagName("BUTTON");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('activeOrange', 'activeBleu', 'activeViolet','activeRouge','activeVert','activeButton');
        tablinks[i].classList.add('tablink');
    }
    document.getElementById(pageName).style.display = "block";
	document.getElementsByTagName("BODY")[0].classList.remove('activeOrangebody', 'activeBleubody', 'activeVioletbody','activeRougebody','activeVertbody');
	document.getElementsByTagName("BODY")[0].classList.add(myclass+"body");
	document.getElementsByTagName("HR")[0].classList.remove('activeOrangehr', 'activeBleuhr', 'activeViolethr','activeRougehr','activeVerthr');
	document.getElementsByTagName("HR")[0].classList.add(myclass+"hr");
    x = document.getElementsByClassName("lien");
    for (i = 0; i < x.length; i++) {	
		x[i].classList.remove('activeOrangelien', 'activeBleulien', 'activeVioletlien','activeRougelien','activeVertlien');
		x[i].classList.add(myclass+"lien");
    }
	elmnt.classList.remove('tablink');
	elmnt.classList.add(myclass, 'activeButton');
	closeNav();
}

document.getElementById("defaultOpen").click();

var countDownDate = new Date("Jun 30, 2020 18:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    /*var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);*/

    document.getElementById("timer").innerHTML = days + " Jours";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Fortmation terminé";
    }
}, 1000);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    
}