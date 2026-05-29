const SITE_CONFIG = {
  appName: "Cat Survival",
  publisherName: "Nicolae Popa",
  contactEmail: "nicu.popa21@gmail.com",
  websiteUrl: "https://nicupopa21-lgtm.github.io/Cat-survival/"
};

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".contact-email").forEach((link) => {
    link.textContent = SITE_CONFIG.contactEmail;
    link.setAttribute("href", `mailto:${SITE_CONFIG.contactEmail}`);
  });

  const form = document.getElementById("bugForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const reporterEmail = document.getElementById("reporterEmail").value.trim();
    const appVersion = document.getElementById("appVersion").value.trim();
    const deviceInfo = document.getElementById("deviceInfo").value.trim();
    const problemType = document.getElementById("problemType").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = `[${SITE_CONFIG.appName}] ${problemType} report`;
    const body = [
      `Problem type: ${problemType}`,
      `Reporter email: ${reporterEmail || "Not provided"}`,
      `App version: ${appVersion || "Not provided"}`,
      `Device / Android version: ${deviceInfo || "Not provided"}`,
      "",
      "Description:",
      message || "Not provided",
      "",
      "Please attach screenshots or screen recordings if useful."
    ].join("\n");

    window.location.href = `mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = document.getElementById("formStatus");
    if (status) status.textContent = "Your email app should open now. If it does not, manually email the support address above.";
  });
});
