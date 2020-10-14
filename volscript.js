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
window.addEventListener("load", function () {
  console.log("window loaded..................");
  setTimeout(function(){
    if (document.querySelector("video") != null) {
        document.querySelector("video").volume = 0.1;
        console.log("volume reduced successfully");
      } else {
        console.log("video still not available during window load---------------");
        runTimeoutVolumeReducer();
      }
  },1000)
});

// document.addEventListener("readystatechange", function () {
//     console.log("documment ready..................");
//     if (document.querySelector("video") != null) {
//         document.querySelector("video").volume = 0.7;
//         console.log("volume reduced successfully");
//       } else {
//         console.log("video not available during readystatechange---------------");
//       }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     console.log("documment loaded..................");
//     if (document.querySelector("video") != null) {
//         document.querySelector("video").volume = 0.4;
//         console.log("volume reduced successfully");
//       } else {
//         console.log("video not available during DOMContentLoaded---------------");
//       }
// });

// window.onload = function () {
//   // chrome.windows.getCurrent(function (currentWindow) {
//   //   chrome.tabs.query({active: true, windowId: currentWindow.id},
//   //                     function(activeTabs,videosData) {
//   //                         console.log(JSON.stringify("Hello"));
//   //         console.log(JSON.stringify(videosData));
//   //         console.log(JSON.stringify(activeTabs));
//   //   });
//   // });
//   if (document.querySelector("video") != null) {
//     document.querySelector("video").volume = 0.1;
//     console.log("volume reduced successfully");
//   } else {
//     console.log("video still not vav---------------");
//   }
// };
