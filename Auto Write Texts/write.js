const text = "My Boyfriend is Xhanti Singatha. We've been together for 2.5 years!! <3";

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 100);