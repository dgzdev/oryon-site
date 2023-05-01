export default function Load() {
    const Now = new Date()
    const Hours = Now.getHours()
    const Day = Now.getUTCDay()

    const Time = [
        {
            name: "Afternoon",
            value: Hours >= 12 && Hours < 18
        },
        {
            name: "Evening",
            value: Hours >= 18 && Hours < 24
        },
        {
            name: "Morning",
            value: Hours >= 0 && Hours < 12
        },
        {
            name: "Night",
            value: Hours >= 24 && Hours < 0
        }
    ]

    const Descriptions = [
        "Aways forward to making games with quality and love!",
        "Another day , another beatiful gameplay",
        "Sometimes the games be our own world, to play it out",
        "We whish to sail around this ocean of dreams"
    ]

    const Complement = Time.find(props => props.value === true)
    const TodayDescription = Descriptions[
        Math.floor(Math.random() * Descriptions.length)
    ]

    let String = `Hello, Good ${Complement.name}!`
    const H1 = document.getElementById("COMPLEMENT")
    const DESCRIPTION = document.getElementById("DESCRIPTION")
    DESCRIPTION.innerHTML = TodayDescription
    H1.innerHTML = String
}