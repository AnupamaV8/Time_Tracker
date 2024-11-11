const activities = [
  {
    title: "Work",
    daily: { current: 5, previous: 7 },
    weekly: { current: 32, previous: 36 },
    monthly: { current: 103, previous: 128 },
  },
  {
    title: "Play",
    daily: { current: 1, previous: 2 },
    weekly: { current: 10, previous: 8 },
    monthly: { current: 23, previous: 29 },
  },
  {
    title: "Study",
    daily: { current: 0, previous: 1 },
    weekly: { current: 4, previous: 7 },
    monthly: { current: 13, previous: 19 },
  },
  {
    title: "Exercise",
    daily: { current: 1, previous: 1 },
    weekly: { current: 4, previous: 5 },
    monthly: { current: 11, previous: 18 },
  },
  {
    title: "Social",
    daily: { current: 1, previous: 3 },
    weekly: { current: 5, previous: 10 },
    monthly: { current: 21, previous: 23 },
  },
  {
    title: "Self Care",
    daily: { current: 0, previous: 1 },
    weekly: { current: 2, previous: 2 },
    monthly: { current: 7, previous: 11 },
  },
];

// Start with the "Weekly" time frame as default
let currentTimeFrame = "weekly";

// Function to update the displayed time for each activity
function updateTimeCards() {
  // Loop through each activity data
  activities.forEach((activity) => {
    // Handle spaces in IDs by replacing spaces in the title
    const card = document.getElementById(
      activity.title.toLowerCase().replace(/\s/g, "")
    );

    // Check if the card is found
    if (card) {
      // Select the current hours and previous hours text areas within the card
      const currentHours = card.querySelector("h2");
      const previousHours = card.querySelector("p");

      // Update text based on the selected time frame
      if (currentHours && previousHours) {
        currentHours.textContent = `${activity[currentTimeFrame].current}hrs`;
        previousHours.textContent = `Last ${capitalizeFirstLetter(
          currentTimeFrame
        )} - ${activity[currentTimeFrame].previous}hrs`;
      }
    } else {
      console.warn(
        `No element found with id "${activity.title
          .toLowerCase()
          .replace(/\s/g, "")}"`
      );
    }
  });
}

// Capitalize the first letter of the time frame for readability
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to set up event listeners on time frame options
function setupTimeFrameSwitching() {
  // Select the time frame buttons (Daily, Weekly, Monthly)
  const timeFrames = document.querySelectorAll("#info p");

  // Add a click event listener to each time frame button
  timeFrames.forEach((frame) => {
    frame.addEventListener("click", () => {
      // Update the current time frame based on which option was clicked
      currentTimeFrame = frame.textContent.toLowerCase();

      // Remove active class from all and add to the clicked one
      timeFrames.forEach((f) => f.classList.remove("active"));
      frame.classList.add("active");

      // Update the activity cards with the new time frame data
      updateTimeCards();
    });
  });
}

// Call the setup function once the page is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  setupTimeFrameSwitching();
  updateTimeCards(); // Initial update with the default time frame
});
