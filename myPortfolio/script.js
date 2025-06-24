let skillsAnimated = false;

  function animateSkillBars() {
    if (skillsAnimated) return;

    const skillSection = document.querySelector(".skills-section");
    const rect = skillSection.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      const bars = document.querySelectorAll(".progress");
      bars.forEach(bar => {
        const target = bar.getAttribute("data-width");
        bar.style.width = target;
      });
      skillsAnimated = true;
    }
  }

  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", () => {
    revealOnScroll();
    animateSkillBars();
  });

  window.addEventListener("load", () => {
    revealOnScroll();
    animateSkillBars();
  });
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (message === "") {
      alert("Please enter your message.");
      return;
    }

    alert("Thank you! Your message has been sent.");

    // If you're using mailto: or external service, uncomment the next line
    this.submit();
  });


  window.addEventListener("scroll", reveal);
  reveal(); // run on load

