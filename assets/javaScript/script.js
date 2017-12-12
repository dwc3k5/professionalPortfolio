var currentPage = "meet";
$(document).ready(function(){
  phaseOne();
  meetMeIn();
});

$(document).on("click", "#introBtn", function(){
  console.log("buttonhit");
  $("#leftCont" ).attr("class", "animated fadeOutLeft");
  $("#rightCont").attr("class", "animated fadeOutRight");
  $("#introBtn").attr("class", "animated fadeOutUp ghostBtn");
  meetMeOut();
  phaseTwo();
});

$(document).on("click", "#meetMe", function(){
  meetMeIn();
  mainOut();
});

$(document).on("click", "#left2", function(){
  portfolioIn();
  mainOut();
});

$(document).on("click", "#left3", function(){
  contactIn();
  mainOut();
});

$(document).on("click", "#right1", function(){
  resumeIn();
  mainOut();
});

$(document).on("click", "#right3", function(){
  latestIn();
  mainOut();
});

$(document).on("click", "#back", function(){
  console.log("hit");
  switch(currentPage){
    case "port":
      portfolioOut();
      break;
    case "resume":
      resumeOut();
      break;
    case "meet":
      meetMeOut();
      break;
    case "contact":
      contactOut();
      break;
    case "latest":
      latestOut();
      break;
  }
  phaseTwo();

});


function mainOut(){
  $("#left1").attr("class", "lTabs animated fadeOutLeft");
  $("#left2").attr("class", "lTabs animated fadeOutLeft");
  $("#left3").attr("class", "lTabs animated fadeOutLeft");
  $("#right1").attr("class", "rTabs animated fadeOutRight");
  $("#right2").attr("class", "rTabs animated fadeOutRight");
  $("#right3").attr("class", "rTabs animated fadeOutRight");
  $("#back").attr("class", "lTabs animated fadeInLeft");
}

function meetMeIn(){
  $("#mainImgCont").attr("class", " animated fadeIn");
  $("#mainBio").attr("class", "animated fadeIn");
  currentPage = "meet";
}
function meetMeOut(){
  $("#mainImgCont").attr("class", " animated fadeOut");
  $("#mainBio").attr("class", "animated fadeOut");
  $("#back").attr("class", "lTabs animated fadeOutLeft");
}

function portfolioIn(){
  $("#portItem1").attr("class", "portfolio animated fadeInDown");
  $("#portItem2").attr("class", "portfolio animated fadeInDown");
  $("#portItem3").attr("class", "portfolio animated fadeInDown");
  $("#portItem4").attr("class", "portfolio animated fadeInDown");
  currentPage = "port";
}

function portfolioOut(){
  $("#portItem1").attr("class", "portfolio animated fadeOutUp");
  $("#portItem2").attr("class", "portfolio animated fadeOutUp");
  $("#portItem3").attr("class", "portfolio animated fadeOutUp");
  $("#portItem4").attr("class", "portfolio animated fadeOutUp");
  $("#back").attr("class", "lTabs animated fadeOutLeft");
}

function contactIn(){
  $("#contact").attr("class", "animated fadeIn");
  currentPage = "contact";
}

function contactOut(){
  $("#contact").attr("class", "animated fadeOut");
  $("#back").attr("class", "lTabs animated fadeOutLeft");
}

function resumeIn(){
  $("#resume").attr("class", "animated fadeInDown");
  currentPage = "resume";
}

function resumeOut(){
  $("#resume").attr("class", "animated fadeOutUp");
  $("#back").attr("class", "lTabs animated fadeOutLeft");
}

function latestIn(){
  $("#latest").attr("class", "animated fadeIn");
  currentPage = "latest";
}

function latestOut(){
  $("#latest").attr("class", "animated fadeOut");
  $("#back").attr("class", "lTabs animated fadeOutLeft");
}

function phaseOne(){setTimeout(function(){
  $("#leftCont" ).attr("class", "animated fadeInDown");
  $("#rightCont").attr("class", "animated fadeInDown");
  $("#introBtn").attr("class", "animated fadeInDown ghostBtn");
  console.log("completed");
},1000);}

function phaseTwo(){setTimeout(function(){
  $("#left1").attr("class", "lTabs animated fadeInLeft");
  $("#left2").attr("class", "lTabs animated fadeInLeft");
  $("#left3").attr("class", "lTabs animated fadeInLeft");
  $("#right1").attr("class", "rTabs animated fadeInRight");
  $("#right2").attr("class", "rTabs animated fadeInRight");
  $("#right3").attr("class", "rTabs animated fadeInRight");
},500);}
