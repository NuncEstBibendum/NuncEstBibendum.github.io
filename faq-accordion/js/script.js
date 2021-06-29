window.onload = function() {

    const imgWoman = document.getElementById('img-woman');
    const imgBox = document.getElementById('img-box');
    imgWoman.style.opacity = imgBox.style.opacity = 1;
    imgWoman.style.transform = imgBox.style.transform = "translateY(0)";

    const questionTitle = document.getElementsByClassName("question__title");

    for (let i in questionTitle) {
        questionTitle[i].addEventListener("click", function() {
            this.classList.toggle("active");

            let questionContent = this.nextElementSibling;
            if (questionContent.style.maxHeight) {
                questionContent.style.maxHeight = null;
                questionTitle[i].style.fontSize = "1em";
            } else {
                questionContent.style.maxHeight = questionContent.scrollHeight + "px";
                questionTitle[i].style.fontSize = "1.1em";
                for (let j in questionTitle) {
                    if (questionTitle[j].nextElementSibling.style.maxHeight && i != j) {
                        questionTitle[j].nextElementSibling.style.maxHeight = null;
                        questionTitle[j].style.fontSize = "1em";
                    }
                }
            }
        });
    }

};