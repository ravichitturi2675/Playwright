const roles = ["admin", "editor", "viewer", "tester", "manager"]; // fixed roles
var userCounter = 1; // global counter for IDs

const TOTAL_USERS = 8; // number of users to generate

for (let i = 0; i < TOTAL_USERS; i++) { // loop variable
  // Generate user ID in USR-0001 format
  let userID = `USR-${String(userCounter).padStart(4, '0')}`;
  
  // Generate name and email
  let userName = `TestUser_${userCounter}`;
  let userEmail = `testuser${userCounter}@testingacademy.com`;
  
  // Assign role cycling through the roles array
  let userRole = roles[i % roles.length];
  
  // Every 3rd user is INACTIVE
  let status = (userCounter % 3 === 0) ? "INACTIVE" : "ACTIVE";
  
  // Print user info
  console.log(`${userID} | ${userName} | ${userEmail} | ${userRole} | ${status}`);
  
  userCounter++; // increment global counter
}
