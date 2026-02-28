let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

// Counters
let passed = 0;
let failed = 0;
let skipped = 0;

// Count results using a for loop
for (let i = 0; i < testResults.length; i++) {
  switch (testResults[i]) {
    case "pass":
      passed++;
      break;
    case "fail":
      failed++;
      break;
    case "skip":
      skipped++;
      break;
    default:
      // ignore unknown values
      break;
  }
}

// Total tests
let total = testResults.length;

// Pass rate percentage
let passRate = (passed / total) * 100;

// Determine verdict
let verdict = "";
if (failed === 0) {
  verdict = "All tests passed. Ready for release!";
} else if (failed <= 2) {
  verdict = "Minor failures. Review before release.";
} else {
  verdict = "Major failures. Block release.";
}

// Print test report
console.log(`Total Tests : ${total}`);
console.log(`Passed : ${passed}`);
console.log(`Failed : ${failed}`);
console.log(`Skipped : ${skipped}`);
console.log(`Pass Rate : ${passRate.toFixed(2)}%`);
console.log(`VERDICT : ${verdict}`);
