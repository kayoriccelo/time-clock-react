
export function effectClick(event: any) {
    const button = event.currentTarget
    const circle = document.createElement("span")
    const rect = event.target.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${(x - radius)}px`
    circle.style.top = `${y - radius}px`
    circle.classList.add("ripple")

    button.appendChild(circle)

    setTimeout(() => {
        const ripple = button.getElementsByClassName("ripple")[0]

        ripple && ripple.remove()
    }, 300)
}
