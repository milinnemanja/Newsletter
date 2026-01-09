const form = document.getElementById("subscribeForm");
const backdrop = document.getElementById("thankyouBackdrop");
const closeBtn = document.getElementById("closeThankyou");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Reset
  form.reset();

  // Notification
  backdrop.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  backdrop.classList.remove("active");
});
