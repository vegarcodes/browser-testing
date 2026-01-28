/**
 * En helt enkel og basic test runner som kjører i nettleseren.
 * Importer den på siden du jobber med, og lag tester som du sender inn i parameteret.
 */

const runBrowserTests = (testsuites) => {

  /* Resultatet av testene som kjøres lagres her så de kan listes ut i konsollet. */
  const results = {
    passed: 0,
    failed: 0,
    tests: []
  };

  /* Assert-funksjonen ser om condition er true/false, sorterer og logger resultatet. */
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

  /* 
  * testsuites er et array med objekter, der hvert objekt har name- og runner-datafelter.
  * name identifiserer hvilken testsuite som kjøres, og runner er den faktiske funksjonen.
  * assert-funksjonen ovenfor sendes inn som et parameter til runner-funksjonen.  
  */
  for (const testsuite of testsuites) {
    console.log(`%cKjører testsuite: ${testsuite.name}`, "font-weight: bold");

    /* Vi bruker en try-catch slik at vi kan oppdage feil som oppstår i en testsuite. */
    try {
      testsuite.runner(assert);
    } catch (error) {
      console.log(`%c⚠ En feil oppsto i testsuiten "${testsuite.name}". Kjøring stanset. Feilmelding:\n\n ${error}`, "color: red; font-weight: bold;");
    }
  }

  /* 
  * Når alle testsuites er ferdig med å kjøre, logges resultatene og objektet returneres.
  * Dette er i tilfelle vi ønsker å gjøre noe med objektet i ettertid.
  */
  console.log(`Kjøring av ${results.passed + results.failed} tester i ${testsuites.length} testsuiter er ferdig.\n${results.passed} tester OK, ${results.failed} tester feilet.`);
  console.table(results.tests);
  return results;
};

export default runBrowserTests;