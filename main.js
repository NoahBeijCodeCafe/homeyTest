async function activateLights() {
  // No VITE_ prefix needed here!
  // We just call our internal /api route.
  await fetch("./api/trigger-webhook", {
    method: "POST",
    body: JSON.stringify({ scene: "movie-mode" }),
  });

  console.log("Request sent to our secure backend!");
}



const lightbtn = document.getElementById("light-btn");
lightbtn.addEventListener("click", activateLights())