const form = document.querySelector(".login-form");
const success = document.querySelector(".success-message");

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.querySelector(".input:nth-child(2)").value;
  const password = document.querySelector(".input:nth-child(3)").value;

  if (!username || !password) {
    gsap.fromTo(".login-form", 
      { x: -10 }, 
      { x: 10, duration: 0.1, yoyo: true, repeat: 5, ease: "power1.inOut" }
    );
  } else {
    // Fade out form
    gsap.to(form, {
      opacity: 0,
      y: -30,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        form.style.display = "none";
        success.style.display = "block";
        // Animate the success message in
        gsap.fromTo(success, 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
        );
      }
    });
  }
});
document.getElementById("go-back").addEventListener("click", () => {
    gsap.to(success, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        success.style.display = "none";
        form.style.display = "flex";
        gsap.fromTo(form, 
          { opacity: 0, y: -30 }, 
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
        );
      }
    });
  });
  