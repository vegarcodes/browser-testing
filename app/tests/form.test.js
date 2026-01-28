/**
 * Test av skjemagrensesnitt
 * Her sjekker vi at skjemafeltene i kontaktskjemaet faktisk eksisterer.
 * Når vi har kodet skjemaet ferdig, kan det også lages tester for interaksjon.
 * F.eks sjekke at utfylling av felter, validering, og innsending virker som forventet.
 */

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

export default formTest;