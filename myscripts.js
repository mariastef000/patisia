function toggle() {
    var video1 = document.querySelector(".video1")
    video1.classList.toggle("active");
}

function toggle2() {
    var video2 = document.querySelector(".video2")
    video2.classList.toggle("active");
}

function toggle3() {
    var video3 = document.querySelector(".video3")
    video3.classList.toggle("active");
}
function toggle4() {
    var video4 = document.querySelector(".video4")
    video4.classList.toggle("active");
}
function toggle5() {
    var video5 = document.querySelector(".video5")
    video5.classList.toggle("active");
}
function toggle6() {
    var video6 = document.querySelector(".video6")
    video6.classList.toggle("active");
}
function toggle7() {
    var video7 = document.querySelector(".video7")
    video7.classList.toggle("active");
}
function toggle8() {
    var video8 = document.querySelector(".video8")
    video8.classList.toggle("active");
}
function toggle9() {
    var video9 = document.querySelector(".video9")
    video9.classList.toggle("active");
}
function toggle10() {
    var video10 = document.querySelector(".video10")
    video10.classList.toggle("active");
}
function playVi(){
    var videos = document.getElementsByTagName("video");
}

function stopVi(){
    const bannerVi = document.getElementById('bannerVi');
    var videos = document.querySelectorAll("iframe, video *:not(bannerVi)");
    const mapIm = document.getElementById('map_im');
    
	Array.prototype.forEach.call(videos, function (video) {
		if (video.tagName.toLowerCase() === 'video') {
			video.pause(); video.currentTime = 0;
		} else {
            mapIm.scrollIntoView();
			var src = video.src;
			video.src = src;
		}
	});
}

  $(document).mouseup(function (e)
  {
      var container = new Array();
      container.push($('#myPopup'));
      container.push($('#myPopup2'));
      
      $.each(container, function(key, value) {
          if (!$(value).is(e.target) 
              && $(value).has(e.target).length === 0) 
          {
              $(value).hide();
          }
      });
  });
