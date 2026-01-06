// Function for Movie Mode
async function activateLights() {
  const btn = document.getElementById("light-btn");
  btn.innerText = "Setting...";

  await fetch("/api/trigger-webhook", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ scene: "movie-mode" }),
  });

  btn.innerText = "Activate";
}

// Function for Color Hex
async function setColor(hexValue) {
  console.log("Sending color:", hexValue);
  await fetch("/api/set-color", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hex: hexValue }),
  });
}

// Event Listeners
document.getElementById("light-btn").addEventListener("click", activateLights);

document.getElementById("color-picker").addEventListener("change", (e) => {
  setColor(e.target.value);
});
