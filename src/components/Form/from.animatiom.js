import { gsap } from "../../animations/gsapSetup";

export const fromIntro = (root) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top 5%",
      end: "top -50%",
      scrub: true,
      pin: true,
      // markers: true,
    },
  });

  // পেছনের দুটো shape দুই দিকে সরবে
  tl.to(root.querySelector(".bgcolor1"), { xPercent: -100, ease: "none" }, 0)
    .to(root.querySelector(".bgcolor2"), { xPercent: 100, ease: "none" }, 0)

    // একই সময়ে ভেতরের পুরো box ছোট থেকে বড় হয়ে আসবে
    .from(root.querySelector(".from"), {
      scale: 0.7,
      opacity: 0,
      ease: "none",
    }, 0);
};