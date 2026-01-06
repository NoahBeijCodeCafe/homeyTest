async function activateLights() {
  console.log("Requesting lamp toggle...");
  await fetch("./api/trigger-webhook", {
    method: "POST",
    body: JSON.stringify({ scene: "movie-mode" }),
  });
  console.log("Request sent to our secure backend!");
}

async function setColor(hexValue) {
  console.log("Sending color:", hexValue);
  await fetch("/api/set-color", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hex: hexValue }),
  });
}

// THE WRAPPER THAT SAVES THE SCRIPT
document.addEventListener("DOMContentLoaded", () => {
  const lightbtn = document.getElementById("light-btn");
  const colorPicker = document.getElementById("color-picker");

  if (lightbtn) {
    lightbtn.addEventListener("click", activateLights);
  }

  if (colorPicker) {
    colorPicker.addEventListener("change", (e) => setColor(e.target.value));
  }
});
