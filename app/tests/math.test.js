/**
 * Proof of concept: testing av mattefunksjoner
 * Denne testen eksisterer bare for å demonstrere konseptet ved testkjøring.
 * Her sjekker vi at det å legge sammen tall og tekststrenger fungerer som forventet.
 * Vi sjekker også deling på 0.
 */

const mathTest = {
  name: "Matematikk",
  runner: function (assert) {
    assert(2 + 2 === 4, "Kan legge sammen to tall.");
    assert("a" + "b" === "ab", "Konkatenerer strenger hvis strenger legges sammen.");
    assert("a" + 2 === "a2", "Kaster om tall til strenger hvis argumenttyper blandes.");
    assert(1 / 0 === Infinity, "Kan ikke dele på 0.");
  }
};

export default mathTest;