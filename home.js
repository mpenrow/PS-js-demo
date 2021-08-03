const button = document.getElementById("see-review");

button.addEventListener('click', function() {
    const review = document.getElementById("review");

    const dNone = 'd-none';
    if (review.classList.contains(dNone)) {
        review.classList.remove(dNone);
        button.textContent = "CLOSE REVIEW";
    }
    else {
        review.classList.add(dNone);
        button.textContent = "SEE REVIEW";
    }
    
});
