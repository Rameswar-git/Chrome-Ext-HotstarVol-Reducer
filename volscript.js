function runTimeoutVolumeReducer() {
  var startTime = new Date().getTime();
  var interval = setInterval(function () {
    if (new Date().getTime() - startTime > 120000) {
      console.log(
        "Unable to reduce volume :there might not be any video streaming"
      );
      clearInterval(interval);
      return;
    }
    if (document.querySelector("video") != null) {
      document.querySelector("video").volume = 0.1;
      console.log("volume reduced successfully");
      clearInterval(interval);
      return;
    } else {
      console.log(
        "video still not available in Timeout Interval---------------"
      );
    }
  }, 50);
}
window.addEventListener("popstate", function () {
  console.log('Back button Pressed........................');
  reduceVolume();
});
window.addEventListener("load", function () {
  console.log("window loaded..................");
  reduceVolume();
});

function reduceVolume(){
  setTimeout(function () {
    if (document.querySelector("video") != null) {
      document.querySelector("video").volume = 0.1;
      console.log("volume reduced successfully");
    } else {
      console.log(
        "video still not available during window load---------------"
      );
      runTimeoutVolumeReducer();
    }
  }, 1000);
}
