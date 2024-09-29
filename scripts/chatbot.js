const taglines = [
    "Where Technology meets Transportation.",
    "Fast Delivery at Your Doorstep.",
    "Your Partner in Delivery Solutions.",
    "Efficient and Reliable Services."
];

let index = 0;
const taglineElement = document.getElementById('tagline');

function autoWriteTagline() {
    taglineElement.textContent = '~';
    const currentTagline = taglines[index];
    let charIndex = 0;

    const interval = setInterval(() => {
        if (charIndex < currentTagline.length) {
            taglineElement.textContent += currentTagline.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(interval);
            index = (index + 1) % taglines.length;
            setTimeout(autoWriteTagline, 3000);
        }
    }, 100);
}

autoWriteTagline();