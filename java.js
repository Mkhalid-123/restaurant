let c = document.querySelector("#typing"); // only the span
let text = "Fast & Tasty Menu"; // text to type
let n = 0;
let isDeleting = false;

function typing() {
    if (!isDeleting && n < text.length) {
        c.textContent = text.substring(0, n + 1);
        n++;
        setTimeout(typing, 120);
    } 
    else if (isDeleting && n > 0) {
        c.textContent = text.substring(0, n - 1);
        n--;
        setTimeout(typing, 80);
    } 
    else {
        isDeleting = !isDeleting;
        setTimeout(typing, 600);
    }
}

typing();
