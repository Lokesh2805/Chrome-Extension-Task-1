

document.addEventListener("DOMContentLoaded", function () {
    const getTitleButton = document.getElementById("getTitleButton");
    const titleResult = document.getElementById("titleResult");
  
    // Add a click event listener to the button
    getTitleButton.addEventListener("click", async function () {
      await chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // Get the title of the current tab
        const currentTab = tabs[0];
        const tabTitle = currentTab.title;
  
        // Display the title in the popup
        titleResult.textContent = tabTitle;
      });
    });
  });
  