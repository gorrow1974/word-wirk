document.addEventListener("DOMContentLoaded", () => {
  const reasons = document.getElementById("reasons");
  const logBox = document.getElementById("logBox");
  document.querySelectorAll("[data-result]").forEach(btn => {
    btn.addEventListener("click", () => {
      const result = btn.dataset.result;
      if (result === "no_image") reasons.classList.add("active");
      else reasons.classList.remove("active");
      const payload = {
        type: "step2_image_check",
        result,
        target: document.getElementById("targetText")?.textContent || "",
        at: new Date().toISOString()
      };
      logBox.textContent = JSON.stringify(payload, null, 2);
    });
  });
});
