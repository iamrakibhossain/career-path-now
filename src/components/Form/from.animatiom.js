import { gsap } from "../../Animations/gsapSetup";

export const fromIntro = (root) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top 5%",
      end: "top -50%",
      scrub: true,
      pin: true,
    },
  });

  tl.to(root.querySelector(".bgcolor1"), { xPercent: -100, ease: "none" }, 0)
    .to(root.querySelector(".bgcolor2"), { xPercent: 100, ease: "none" }, 0)

    .from(root.querySelector(".from"), {
      scale: 0.7,
      opacity: 0,
      ease: "none",
    }, 0);
};