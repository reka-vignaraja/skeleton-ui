
document.addEventListener("DOMContentLoaded", () => {

    // Simulate API loading
    setTimeout(() => {

        // Hide skeleton
        document.getElementById("skeleton")
            .classList.add("hidden");

        // Show real content
        document.getElementById("real-content")
            .classList.remove("hidden");

    }, 3000);

});
