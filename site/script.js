document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre code").forEach(function (code) {
    var pre = code.closest("pre");
    if (!pre || pre.querySelector(".copy-code")) return;

    var button = document.createElement("button");
    button.type = "button";
    button.className = "copy-code";
    button.textContent = "Kopiuj";
    button.setAttribute("aria-label", "Kopiuj kod do schowka");

    button.addEventListener("click", function () {
      navigator.clipboard.writeText(code.innerText).then(function () {
        button.textContent = "Skopiowano";
        window.setTimeout(function () { button.textContent = "Kopiuj"; }, 1600);
      });
    });

    pre.appendChild(button);
  });
});
