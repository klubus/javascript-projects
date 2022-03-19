document.addEventListener("DOMContentLoaded", function () {
  const progressbarinner = document.querySelector(".progress-bar-inner");

  window.addEventListener("scroll", function () {
    let h = document.documentElement;

    let st = h.scrollTop || document.body.scrollTop;
    let sh = h.scrollHigh || document.body.scrollHeight;

    let percent = (st / (sh - h.clientHeight)) * 100;
    let roundedpercent = Math.min(
      Math.max(parseInt(Math.round(percent)), 0),
      100
    );

    progressbarinner.style.width = percent + "%";
    progressbarinner.innerText = roundedpercent + "%";
  });
});
