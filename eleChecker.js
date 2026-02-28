let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let status = "";
let severity = "";
let action = "";

// Determine status
if (isPresent === true && isDisplayed === true && isEnabled === true) {
  status = "READY";
} else if (isPresent === true && isDisplayed === true && isEnabled === false) {
  status = "DISABLED";
} else if (isPresent === true && isDisplayed === false) {
  status = "HIDDEN";
} else if (isPresent === false) {
  status = "NOT FOUND";
}

// Determine severity using ternary operator
severity = (isPresent === false) ? "CRITICAL" 
          : (isDisplayed === false || isEnabled === false) ? "WARNING" 
          : "OK";

// Determine QA action
switch (status) {
  case "READY":
    action = "Element is ready for interaction.";
    break;
  case "DISABLED":
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
    break;
  case "HIDDEN":
    action = "Element is present but hidden. Check UI or wait for visibility.";
    break;
  case "NOT FOUND":
    action = "Element not found in DOM. Investigate locator or page load.";
    break;
  default:
    action = "Unknown element state.";
}
console.log(`Status: ${status} Severity: ${severity} Action: ${action}`);
