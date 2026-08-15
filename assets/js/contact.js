// Formulaire de contact — aucun service tiers, aucun stockage.
// Au clic, le message est composé et transmis au client de messagerie
// du visiteur (mailto:), à destination de l'adresse professionnelle.
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var destination = form.getAttribute("data-to") || "contact@sirotteau-gestion.fr";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var nom = form.nom.value.trim();
    var societe = form.societe.value.trim();
    var email = form.email.value.trim();
    var telephone = form.telephone.value.trim();
    var message = form.message.value.trim();

    var subject = "Demande de contact — " + (societe || nom || "site web");

    var bodyLines = [
      "Nom : " + nom,
      "Société : " + societe,
      "Email : " + email,
      "Téléphone : " + telephone,
      "",
      "Message :",
      message
    ];

    var mailto =
      "mailto:" + encodeURIComponent(destination) +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(bodyLines.join("\n"));

    window.location.href = mailto;
  });
});
