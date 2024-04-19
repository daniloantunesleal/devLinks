(() => {
    console.warn("Seja bem vindo!")

    const html = document.documentElement
    const switchButton = document.querySelector(".switch > button")
    const musicButton = document.querySelector(".music")

    const toggleTheme = light => {
        const theme = light ? "light" : "dark"
        localStorage.setItem("theme", theme)
        html.classList.toggle("light", light)
    }
    
    switchButton.addEventListener("click", () => {
        const isLight = html.classList.contains("light")
        toggleTheme(!isLight)
    })

    const theme = localStorage.getItem("theme") || "dark"
    toggleTheme(theme === "light") 

    const musicLofi = new Audio("./lofi.mp3")

    musicLofi.loop = true
    musicLofi.volume = 0.1

    const toggleMusic = () => {
        if (musicLofi.paused) {
            musicLofi.play();
            musicButton.setAttribute("title", "Pausar Lofi");
            musicButton.style.backgroundImage = "var(--music-mute-bg-url)";
        } else {
            musicLofi.pause();
            musicButton.setAttribute("title", "Começar Lofi");
            musicButton.style.backgroundImage = "var(--music-wave-bg-url)";
        }
    }

    musicButton.addEventListener("click", toggleMusic)
})()