const MAX_ATTEMPTS = 5;
let attempt = 0;
let success = false;

do {
  attempt++;
  
  // Simulate API response: 40% chance of success
  let randomValue = Math.random(); // 0 to 1
  if (randomValue > 0.6) {
    success = true;
    console.log(`Attempt ${attempt}:
  } else {
    console.log(`Attempt ${attempt}: 
  }
  
} while (!success && attempt < MAX_ATTEMPTS);

// Print final result
if (success) {
  console.log(`API call PASSED after ${attempt} attempt(s).`);
} else {
  console.log(`API call FAILED after ${MAX_ATTEMPTS} attempts.`);
}
