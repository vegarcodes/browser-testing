import runBrowserTests from "./runBrowserTests.js";

const mathematicsTests = {
  name: "Matematikk",
  runner: function (assert) {
    assert(2 + 2 === 4, "Kan legge sammen to tall.");
    assert("a" + "b" === "ab", "Konkatenerer strenger hvis strenger legges sammen.");
    assert("a" + 2 === "a2", "Kaster om tall til strenger hvis argumenttyper blandes.");
    assert(1 / 0 === Infinity, "Kan ikke dele på 0.");
  }
};

const formTest = {
  name: "Test av kontaktskjema",
  runner: function (assert) {
    const formElement = document.getElementById("contact-form");
    const firstNameElement = document.getElementById("first-name");
    const lastNameElement = document.getElementById("last-name");
    const messageElement = document.getElementById("message");
    const submitButton = formElement.querySelector("button[type=submit]");

    assert(formElement !== null, "Kontaktskjemaet finnes på siden.");
    assert(firstNameElement !== null, "Skjemafelt for fornavn finnes på siden.");
    assert(lastNameElement !== null, "Skjemafelt for etternavn finnes på siden.");
    assert(messageElement !== null, "Tekstområde for melding finnes på siden.");
    assert(submitButton !== null, "Innsendingsknapp finnes på siden.");
  }
}

runBrowserTests([
  mathematicsTests,
  formTest
]);