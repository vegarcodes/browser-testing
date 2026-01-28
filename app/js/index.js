import runBrowserTests from "./runBrowserTests.js";
import mathTest from "../tests/math.test.js";
import formTest from "../tests/form.test.js";

runBrowserTests([
  mathTest,
  formTest
]);