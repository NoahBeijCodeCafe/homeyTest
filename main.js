// Function to handle the Lamp Toggle
async function activateLights() {
  console.log("Toggling Lamp...");
  try {
    const res = await fetch("/api/trigger-webhook", { method: "POST" });
    const data = await res.json();
    console.log("Lamp Response:", data);
  } catch (err) {
    console.error("Lamp Error:", err);
  }
}

// Function to handle the Color Change
async function setColor(hexValue) {
  console.log("Sending color:", hexValue);
  try {
    const res = await fetch("/api/set-color", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hex: hexValue }),
    });
    const data = await res.json();
    console.log("Color Response:", data);
  } catch (err) {
    console.error("Color Error:", err);
  }
}

// THIS IS THE FIX: Wait for the HTML to be ready
document.addEventListener("DOMContentLoaded", () => {
  const lightbtn = document.getElementById("light-btn");
  const colorPicker = document.getElementById("color-picker");

  if (lightbtn) {
    lightbtn.addEventListener("click", activateLights);
  }

  if (colorPicker) {
    colorPicker.addEventListener("change", (e) => {
      setColor(e.target.value);
    });
  }

  console.log("Dashboard ready and listeners attached!");
});
