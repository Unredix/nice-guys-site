document.addEventListener("DOMContentLoaded", () => {
  const bannerImg = document.querySelector(".banner");
  const bannerText = document.querySelector(".banner-text");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = 200;

    const blurAmount = Math.min((scrollY / maxScroll) * 5, 4);
    const opacityAmount = Math.max(1 - (scrollY / maxScroll) * 1, 10);

    bannerImg.style.filter = `blur(${blurAmount}px)`;
    bannerImg.style.opacity = opacityAmount;

    bannerText.style.opacity = Math.max(1 - (scrollY / maxScroll) * 1, 0);
    bannerText.style.transform = `translateY(${Math.min(
      scrollY / 2,
      100
    )}px) translate(-50%, -50%)`;
    bannerText.style.transition = "transform 0.3s ease-out";
    bannerText.style.transition = "opacity 0.3s ease-out";
    bannerText.style.transition = "filter 0.3s ease-out";

    // if (scrollY > maxScroll) {
    //   bannerImg.classList.add("fixed");
    // } else {
    //   bannerImg.classList.remove("fixed");
    // }
  });
});
