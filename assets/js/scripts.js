// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
gsap.timeline()
  .to(".hero h1", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  })
  .to(".hero p", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  }, "-=0.5");

// Parallax floating elements
gsap.to(".float-1", {
  y: -200,
  rotation: 360,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1
  }
});

gsap.to(".float-2", {
  y: -150,
  rotation: -180,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1.5
  }
});

gsap.to(".float-3", {
  y: -100,
  rotation: 270,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 0.8
  }
});

gsap.to(".float-4", {
  y: -250,
  rotation: 180,
  scale: 0.5,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 2
  }
});

// Parallax background
gsap.to(".parallax-bg", {
  y: -300,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 0.5
  }
});

// Section animations
gsap.utils.toArray(".section h2").forEach(heading => {
  gsap.to(heading, {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: heading,
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse"
    }
  });
});

gsap.utils.toArray(".section p").forEach(paragraph => {
  gsap.to(paragraph, {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: paragraph,
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse"
    }
  });
});

// Card animations
gsap.utils.toArray(".card").forEach(card => {
  gsap.to(card, {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      end: "top 15%",
      toggleActions: "play none none reverse"
    }
  });
});

// Progress bar animation
gsap.to(".progress-bar", {
  width: "100%",
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.3
  }
});

// Hide scroll indicator on scroll
gsap.to(".scroll-indicator", {
  opacity: 0,
  y: 20,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom 90%",
    scrub: 1
  }
});

// Smooth scrolling for better performance
gsap.to("body", {
  scrollBehavior: "smooth"
});

// Motion Line Animations

// Horizontal motion lines that sweep across screen
gsap.timeline({ repeat: -1, repeatDelay: 1 })
  .to(".motion-line-1", {
    x: window.innerWidth + 200,
    duration: 3,
    ease: "power2.inOut"
  })
  .to(".motion-line-3", {
      x: window.innerWidth + 150,
    duration: 2.5,
    ease: "power2.inOut"
  }, "-=2")
  .to(".motion-line-5", {
    x: window.innerWidth + 180,
    duration: 2.8,
    ease: "power2.inOut"
  }, "-=1.5");

gsap.timeline({ repeat: -1, repeatDelay: 1.5, delay: 2 })
  .to(".motion-line-2", {
    x: -(window.innerWidth + 300),
    duration: 3.5,
    ease: "power2.inOut"
  })
  .to(".motion-line-4", {
    x: -(window.innerWidth + 250),
    duration: 3,
    ease: "power2.inOut"
  }, "-=2.5");

// Diagonal lines rotation and movement
gsap.timeline({ repeat: -1 })
  .to(".diag-1", {
    rotation: 405,
    y: -50,
    duration: 8,
    ease: "none"
  })
  .to(".diag-2", {
    rotation: -405,
    y: 50,
    duration: 6,
    ease: "none"
  }, "-=6")
  .to(".diag-3", {
    rotation: 420,
    x: 30,
    duration: 10,
    ease: "none"
  }, "-=8")
  .to(".diag-4", {
    rotation: -390,
    x: -30,
    duration: 7,
    ease: "none"
  }, "-=7");

// Curved path animations
gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
  .to(".curved-line", {
    opacity: 1,
    duration: 0.5,
    stagger: 0.3
  })
  .to(".curved-line", {
    strokeDashoffset: -100,
    duration: 4,
    ease: "none"
  }, "-=0.5")
  .to(".curved-line", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
  });

// Speed lines that trigger on scroll
let speedLinesTl = gsap.timeline({ paused: true });
speedLinesTl
  .to(".speed-line", {
    opacity: 1,
    x: window.innerWidth + 150,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
  })
  .to(".speed-line", {
    opacity: 0,
    duration: 0.3,
    stagger: 0.05
  }, "-=0.3");

// Trigger speed lines on scroll
ScrollTrigger.create({
  trigger: ".hero",
  start: "top center",
  end: "bottom center",
  onUpdate: self => {
      if (self.velocity < -5 || self.velocity > 5) {
          speedLinesTl.restart();
      }
  }
});

// Motion lines parallax with scroll
gsap.to(".motion-line", {
  y: -100,
  scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5
  }
});

gsap.to(".diagonal-line", {
  y: -200,
  rotation: "+=180",
  scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1
  }
});