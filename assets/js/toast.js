// Script obtenido mediante chatgpt para uso personal de proyecto :D
(() => {
  const message = document.getElementById("floating-message");
  const closeButton = document.getElementById(
    "floating-message-close"
  );

  if (!message || !closeButton) return;

  // Ocultar el mensaje al pulsar la X.
  closeButton.addEventListener("click", () => {
    message.classList.add("fm-hidden");
  });
})();