import { gsap } from "../../Animations/gsapSetup";

export const serviceIntro = (root, reverse) => {
  const dir = reverse ? 1 : -1;

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: root,
      start: "top 70%",
    },
  });

  tl.from(root.querySelector(".svc-left"), {
    x: dir * 80,
    opacity: 0,
    duration: 0.9,
  })

    .from(root.querySelector(".svc-circle"), {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "<0.2")

    .from(root.querySelectorAll(".svc-img"), {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      clearProps: "transform",
    }, "-=0.4");

  tl.from(root.querySelector(".svc-title"), {
    x: -dir * 60,
    opacity: 0,
    duration: 0.7,
  }, 0.2)
    .from(root.querySelectorAll(".svc-text"), {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
    }, "-=0.4")
    .from(root.querySelectorAll(".svc-item"), {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.12,
    }, "-=0.3")
    .from(root.querySelector(".svc-btn"), {
      y: 20,
      opacity: 0,
      duration: 0.5,
    }, "-=0.2");
};