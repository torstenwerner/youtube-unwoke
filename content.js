// Function to hide the clarify box
function hideClarifyBox() {
    const clarifyBox = document.getElementById('clarify-box');
    if (clarifyBox) {
        clarifyBox.style.display = 'none';
    }
}

// Run immediately
hideClarifyBox();

// Create an observer for dynamic content
const observer = new MutationObserver((mutations) => {
    hideClarifyBox();
});

// Observe changes in the document
observer.observe(document.body, {
    childList: true,
    subtree: true
});