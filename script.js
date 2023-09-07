document.addEventListener("DOMContentLoaded", function () {
    // Update current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = new Date().getDay();
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = daysOfWeek[currentDay];

    // Update current UTC time
    const currentUTC = new Date().toUTCString();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTC;
});
