const runBrowserTests = (testsuites) => {
  const results = {
    passed: 0,
    failed: 0,
    tests: []
  };

  const assert = (condition, message) => {
    if (condition) {
      results.passed++;
      results.tests.push({
        passed: true, 
        message: message
      });
      console.log(`%c✓ ${message}`, "color: darkgreen;");
    } else {
      results.failed++;
      results.tests.push({
        passed: false,
        message: message
      });
      console.log(`%c⨯ ${message}`, "color: red;");
    }
  }

  for (const testsuite of testsuites) {
    console.log(`%cKjører testsuite: ${testsuite.name}`, "font-weight: bold");
    try {
      testsuite.runner(assert);
    } catch (error) {
      console.log(`%c⚠ En feil oppsto i testsuiten "${testsuite.name}". Kjøring stanset. Feilmelding:\n\n ${error}`, "color: red; font-weight: bold;");
    }
  }

  console.log(`Kjøring av ${results.passed + results.failed} tester i ${testsuites.length} testsuiter er ferdig.\n${results.passed} tester OK, ${results.failed} tester feilet.`);
  console.table(results.tests);
  return results;
};

export default runBrowserTests;