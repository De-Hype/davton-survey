document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const questions = document.querySelector(".question");
    let currentQuestionIndex = 0;
    function showQuestion(index) {
        questions.forEach((question, idx) =>{
            if (idx===index) {
                question.classList.add("active");
                question.classList.remove("inactive");
            } else{
                question.classList.remove("active");
                question.classList.add("inactive");
            }
        })
    }
    nextBtn.addEventListener("click", function () {
        if (currentQuestionIndex < questions.length - 1 ) {
            currentQuestionIndex++
            showQuestion(currentQuestionIndex)
        }
    })
    prevBtn.addEventListener("click", function () {
        if (currentQuestionIndex > 0 ) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex)
        }
    })
})