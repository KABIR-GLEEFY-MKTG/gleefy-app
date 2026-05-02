const express = require("express");
const path = require("path");

const app = express();

// VERY IMPORTANT LINE (this fixes your issue)
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

// API
app.post("/generate", (req, res) => {
  res.json({
    title: "Test Working",
    itinerary: [
      {
        day: "Day 1",
        plan: ["Arrival", "Dinner"]
      }
    ]
  });
});

// DEFAULT ROUTE (THIS FIXES "/" ERROR)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log("Server running on http://localhost:3000"));