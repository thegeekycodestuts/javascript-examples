// script.js

// Number of droplets and clouds
const numDroplets = 300;
const numClouds = 20;

// When the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Create and animate clouds
    createClouds();

    // Create droplets with animation delays
    createDroplets();

    const cloudsAudio = document.getElementById("cloudsAudio");
    let isPlaying = false;

    // Toggle audio playback on click
    document.addEventListener("click", function () {
        if (isPlaying) {
            cloudsAudio.pause();
            isPlaying = false;
        } else {
            cloudsAudio.play();
            isPlaying = true;
        }
    });
});

// Create and animate clouds
function createClouds() {
    const cloudsContainer = document.querySelector(".clouds");

    for (let i = 1; i <= numClouds; i++) {
        const cloud = document.createElement("div");
        cloud.classList.add("cloud", `cloud${i}`);
        cloud.style.left = `${getRandomPosition()}px`;
        cloudsContainer.appendChild(cloud);

        animateCloud(cloud, i);
    }
}

// Create droplets with animation delays
function createDroplets() {
    const waterContainer = document.querySelector(".water");

    for (let i = 0; i < numDroplets; i++) {
        const droplet = document.createElement("div");
        droplet.classList.add("droplet");
        droplet.style.left = `${getRandomPosition()}px`;
        droplet.style.animationDelay = `${i * 0.1}s`; // Add delay for animation variation
        waterContainer.appendChild(droplet);
    }
}

// Animate a cloud's movement
function animateCloud(cloud, index) {
    const animationDuration = 15 + index * 2; // Adjust the duration as needed
    const keyframes = [
        { transform: `translateX(-50%)` },
        { transform: `translateX(50%)` },
        { transform: `translateX(-50%)` },
    ];

    // Apply continuous animation using the Web Animations API
    cloud.animate(keyframes, {
        duration: animationDuration * 1000, // Convert seconds to milliseconds
        iterations: Infinity, // Repeat indefinitely
    });
}

// Get a random horizontal position within the window width
function getRandomPosition() {
    return Math.random() * window.innerWidth;
}
