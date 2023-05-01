export default function createListener() {
    const DarkModeButton = document.getElementById("DARKMODE")
    DarkModeButton.addEventListener("click", () => {
        const Body = document.getElementById("BODY")
        const DarkMode = Body.classList.contains("DARKMODE")
        const Root = document.querySelector(':root');

        const Colors = {
            ["DARKMODE"]: {
                ["--header-c"]: "#866fe8",
                ["--background-c"]: "#000000",
                ["--primary-c"]: "#ffffff",
                ["--shadow-c"]: "#6d4d96",
                ["--hover-c"]: "#dac9ff",
                ["--body"]: "#2a2c33",
            },
            ["LIGHTMODE"]: {
                ["--header-c"]: "#fc9d6a",
                ["--body"]: "#fff",
                ["--background-c"]: "#000000",
                ["--primary-c"]: "#ffffff",
                ["--shadow-c"]: "#00000033",
                ["--hover-c"]: "#f9ffc9",
            }
        }

        if (DarkMode) {
            Body.classList.remove("DARKMODE")
            for (const key in Colors["LIGHTMODE"] ) {
                const Value = Colors["LIGHTMODE"][key]
                Root.style.setProperty(key, Value)
            }
        } else {
            Body.classList.add("DARKMODE")
            for (const key in Colors["DARKMODE"] ) {
                const Value = Colors["DARKMODE"][key]
                Root.style.setProperty(key, Value)
            }
        }
    })
}