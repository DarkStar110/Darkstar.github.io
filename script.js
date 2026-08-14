/* =========================================================
   DARKSTAR — INTERACTIONS & ANIMATIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        setTimeout(() => {
            loader?.classList.add("hidden");
        }, 1800);

    });


    /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

    const cursor = document.querySelector(".cursor");
    const cursorRing = document.querySelector(".cursor-ring");

    const hasFinePointer =
        window.matchMedia("(pointer: fine)").matches;

    if (hasFinePointer && cursor && cursorRing) {

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let ringX = mouseX;
        let ringY = mouseY;

        document.addEventListener("mousemove", (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;

        });

        function animateCursor() {

            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;

            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;

            requestAnimationFrame(animateCursor);

        }

        animateCursor();

        const interactiveElements =
            document.querySelectorAll(
                "a, button, .project-media, .service-card"
            );

        interactiveElements.forEach((element) => {

            element.addEventListener("mouseenter", () => {

                cursorRing.style.width = "52px";
                cursorRing.style.height = "52px";
                cursorRing.style.borderColor =
                    "rgba(255, 36, 36, 0.9)";

            });

            element.addEventListener("mouseleave", () => {

                cursorRing.style.width = "34px";
                cursorRing.style.height = "34px";
                cursorRing.style.borderColor =
                    "rgba(255, 36, 36, 0.55)";

            });

        });

    }


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuButton =
        document.querySelector(".menu-button");

    const navLinks =
        document.querySelector(".nav-links");

    menuButton?.addEventListener("click", () => {

        navLinks?.classList.toggle("active");
        menuButton.classList.toggle("active");

    });

    document
        .querySelectorAll(".nav-links a")
        .forEach((link) => {

            link.addEventListener("click", () => {

                navLinks?.classList.remove("active");
                menuButton?.classList.remove("active");

            });

        });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -60px 0px"
            }
        );

    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });


    /* =====================================================
       STAGGERED REVEALS
    ===================================================== */

    const grids = document.querySelectorAll(
        ".work-grid, .services-grid, .philosophy-grid, .contact-links"
    );

    grids.forEach((grid) => {

        const children =
            grid.querySelectorAll(".reveal");

        children.forEach((child, index) => {

            child.style.transitionDelay =
                `${index * 0.08}s`;

        });

    });


    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const heroVisual =
        document.querySelector(".hero-visual");

    const heroGrid =
        document.querySelector(".hero-grid");

    const heroGlow =
        document.querySelector(".hero-red-glow");

    if (hasFinePointer && heroVisual) {

        document.addEventListener(
            "mousemove",
            (event) => {

                const x =
                    (event.clientX / window.innerWidth - 0.5);

                const y =
                    (event.clientY / window.innerHeight - 0.5);

                heroVisual.style.transform =
                    `translateY(-50%)
                     translate(${x * 14}px, ${y * 14}px)`;

                if (heroGrid) {

                    heroGrid.style.transform =
                        `translate(${x * -8}px, ${y * -8}px)`;

                }

                if (heroGlow) {

                    heroGlow.style.transform =
                        `translate(${x * 20}px, ${y * 20}px)`;

                }

            }
        );

    }


    /* =====================================================
       HERO IMAGE MOVEMENT
    ===================================================== */

    const heroImage =
        document.querySelector(".star-image img");

    if (hasFinePointer && heroImage) {

        document.addEventListener(
            "mousemove",
            (event) => {

                const x =
                    (event.clientX / window.innerWidth - 0.5);

                const y =
                    (event.clientY / window.innerHeight - 0.5);

                heroImage.style.transform =
                    `scale(1.05)
                     translate(${x * 8}px, ${y * 8}px)`;

            }
        );

    }


    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener("click", (event) => {

                const targetId =
                    link.getAttribute("href");

                if (!targetId || targetId === "#") return;

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backTop =
        document.querySelector(".back-top");

    backTop?.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    backTop?.addEventListener("keydown", (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    });


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");

    let lastScroll = 0;

    window.addEventListener(
        "scroll",
        () => {

            const currentScroll =
                window.scrollY;

            if (!navbar) return;

            if (currentScroll > 30) {

                navbar.style.background =
                    "rgba(5, 5, 5, 0.88)";

                navbar.style.borderBottomColor =
                    "rgba(255, 255, 255, 0.08)";

            } else {

                navbar.style.background =
                    "rgba(5, 5, 5, 0.72)";

                navbar.style.borderBottomColor =
                    "rgba(255, 255, 255, 0.05)";

            }

            lastScroll = currentScroll;

        },
        {
            passive: true
        }
    );


    /* =====================================================
       PROJECT HOVER EFFECT
    ===================================================== */

    const projects =
        document.querySelectorAll(".project-media");

    if (hasFinePointer) {

        projects.forEach((project) => {

            project.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        project.getBoundingClientRect();

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    const rotateX =
                        ((y / rect.height) - 0.5) * -3;

                    const rotateY =
                        ((x / rect.width) - 0.5) * 3;

                    project.style.transform =
                        `perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)`;

                }
            );

            project.addEventListener(
                "mouseleave",
                () => {

                    project.style.transform =
                        "perspective(900px) rotateX(0deg) rotateY(0deg)";

                }
            );

        });

    }


    /* =====================================================
       SERVICE CARD LIGHT EFFECT
    ===================================================== */

    const serviceCards =
        document.querySelectorAll(".service-card");

    if (hasFinePointer) {

        serviceCards.forEach((card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    card.style.setProperty(
                        "--mouse-x",
                        `${x}px`
                    );

                    card.style.setProperty(
                        "--mouse-y",
                        `${y}px`
                    );

                }
            );

        });

    }


    /* =====================================================
       IMAGE ERROR FALLBACK
    ===================================================== */

    if (heroImage) {

        heroImage.addEventListener(
            "error",
            () => {

                heroImage.style.display = "none";

                const imageContainer =
                    document.querySelector(".star-image");

                if (imageContainer) {

                    imageContainer.style.background =
                        `
                        radial-gradient(
                            circle at 50% 40%,
                            rgba(255, 36, 36, 0.35),
                            rgba(5, 5, 5, 0.95) 55%,
                            #020202
                        )
                        `;

                }

            }
        );

    }


    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(
        "%cDARKNOXA",
        "font-size: 28px; font-weight: 900; color: #ff2424;"
    );

    console.log(
        "%cCreative Studio — Built to be remembered.",
        "font-size: 12px; color: #888;"
    );

});

// =========================================
// PORTFOLIO VIDEO SOUND TOGGLE
// =========================================

const projectVideos = document.querySelectorAll(".project-video");

projectVideos.forEach((video) => {

    video.addEventListener("click", () => {

        // If this video is muted, mute/pause every other video first
        if (video.muted) {

            projectVideos.forEach((otherVideo) => {

                if (otherVideo !== video) {

                    otherVideo.muted = true;
                    otherVideo.pause();

                }

            });

            // Turn sound on for this video
            video.muted = false;
            video.play();

        } else {

            // Turn sound off
            video.muted = true;

        }

    });

});
