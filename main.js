const lightbtn = document.getElementById("light-btn");

async function activateLights() {
  console.log("Toggling Lamp...");
  // Use the relative path to your Vercel API
  await fetch("/api/trigger-webhook", { method: "POST" });
}

// Ensure there are no () after activateLights
lightbtn.addEventListener("click", activateLights);

// Function for Color Hex
async function setColor(hexValue) {
  console.log("Sending color:", hexValue);
  await fetch("/api/set-color", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hex: hexValue }),
  });
}

document.getElementById("color-picker").addEventListener("change", (e) => {
  setColor(e.target.value);
});
