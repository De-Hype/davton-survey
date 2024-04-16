 const questions = document.querySelectorAll('.question');
    
    questions.forEach((question, index) => {
      const prevBtn = question.querySelector('.prev-btn');
      const nextBtn = question.querySelector('.next-btn');
  
      prevBtn.addEventListener('click', function() {
        if (index > 0) {
          questions[index].classList.remove('active');
          questions[index - 1].classList.add('active');
        }
      });
  
      nextBtn.addEventListener('click', function() {
        if (index < questions.length - 1) {
          questions[index].classList.remove('active');
          questions[index + 1].classList.add('active');
        }
      });
    });
  
  