window.addEventListener("load", e => {
	// console.log("Dom content is loaded")
	// alert("Document loaded")
	const body = document.querySelector("body")
	const iframe = document.createElement("iframe")
	iframe.src = "https://fast.com/"
	iframe.setAttribute("id", "fast-container")

	body.append(iframe)
})
