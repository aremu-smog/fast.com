const TIME_DELAY = 2_000 // in milliseconds
const preloader = document.querySelector("#preloader")

window.addEventListener("load", e => {
	const timeTracker = setTimeout(() => {
		const iframe = document.createElement("iframe")
		iframe.src = "https://fast.com/"
		iframe.setAttribute("id", "fast-container")

		document.body.append(iframe)

		preloader.remove()
		timeTracker.clearTimeout()
	}, TIME_DELAY)
})
