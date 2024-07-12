const quizQuestions = [
  {
      question: "What do you believe is your primary spiritual gift?",
      choices: ["Teaching", "Prophecy", "Healing", "Administration", "Service"]
  },
  {
      question: "How often do you participate in church activities?",
      choices: ["Weekly", "Monthly", "Few times a year", "Rarely", "Never"]
  },
  {
      question: "Do you feel a strong desire to help others?",
      choices: ["Always", "Often", "Sometimes", "Rarely", "Never"]
  },
  {
      question: "How often do you read the Bible?",
      choices: ["Daily", "Weekly", "Monthly", "Occasionally", "Never"]
  },
  {
      question: "Do you believe God has a specific plan for your life?",
      choices: ["Absolutely", "I think so", "Not sure", "Doubtful", "No"]
  },
  {
      question: "How often do you pray?",
      choices: ["Multiple times a day", "Once a day", "Weekly", "Monthly", "Rarely"]
  },
  {
      question: "Do you feel called to lead others?",
      choices: ["Yes", "Sometimes", "Not really", "No", "I'm not sure"]
  },
  {
      question: "How often do you volunteer in your community?",
      choices: ["Regularly", "Occasionally", "Rarely", "Never", "Not applicable"]
  },
  {
      question: "Do you feel fulfilled in your current career?",
      choices: ["Yes", "Mostly", "Somewhat", "Not really", "No"]
  },
  {
      question: "How often do you share your faith with others?",
      choices: ["Daily", "Weekly", "Monthly", "Occasionally", "Never"]
  },
  {
      question: "Do you feel at peace with your life direction?",
      choices: ["Always", "Often", "Sometimes", "Rarely", "Never"]
  },
  {
      question: "How often do you seek counsel from spiritual mentors?",
      choices: ["Regularly", "Occasionally", "Rarely", "Never", "Not applicable"]
  },
  {
      question: "Do you believe you are living in alignment with God's will?",
      choices: ["Yes", "Mostly", "Somewhat", "Not really", "No"]
  },
  {
      question: "How often do you participate in worship services?",
      choices: ["Weekly", "Monthly", "Few times a year", "Rarely", "Never"]
  },
  {
      question: "Do you feel a strong sense of purpose in your daily activities?",
      choices: ["Yes", "Mostly", "Somewhat", "Not really", "No"]
  },
  {
      question: "How often do you engage in personal reflection or meditation?",
      choices: ["Daily", "Weekly", "Monthly", "Occasionally", "Never"]
  },
  {
      question: "Do you feel called to serve in a specific ministry?",
      choices: ["Yes", "Sometimes", "Not really", "No", "I'm not sure"]
  },
  {
      question: "How often do you seek to grow your relationship with God?",
      choices: ["Daily", "Weekly", "Monthly", "Occasionally", "Never"]
  },
  {
      question: "Do you believe your talents are being used effectively?",
      choices: ["Yes", "Mostly", "Somewhat", "Not really", "No"]
  },
  {
      question: "How often do you feel inspired by your faith?",
      choices: ["Always", "Often", "Sometimes", "Rarely", "Never"]
  },
  {
      question: "Do you feel connected to a supportive faith community?",
      choices: ["Yes", "Mostly", "Somewhat", "Not really", "No"]
  },
  {
      question: "How often do you experience joy in your spiritual life?",
      choices: ["Daily", "Weekly", "Monthly", "Occasionally", "Never"]
  },
  {
      question: "Do you feel a strong sense of direction in your life?",
      choices: ["Yes", "Mostly", "Somewhat", "Not really", "No"]
  },
  {
      question: "How often do you help others grow in their faith?",
      choices: ["Regularly", "Occasionally", "Rarely", "Never", "Not applicable"]
  },
  {
      question: "Do you feel confident in your spiritual journey?",
      choices: ["Yes", "Mostly", "Somewhat", "Not really", "No"]
  },
  {
      question: "How often do you seek God's guidance in decision-making?",
      choices: ["Always", "Often", "Sometimes", "Rarely", "Never"]
  },
  {
      question: "Do you feel your life has a significant impact on others?",
      choices: ["Yes", "Mostly", "Somewhat", "Not really", "No"]
  },
  {
      question: "How often do you thank God for your blessings?",
      choices: ["Daily", "Weekly", "Monthly", "Occasionally", "Never"]
  },
  {
      question: "Do you feel you are making a difference in the world?",
      choices: ["Yes", "Mostly", "Somewhat", "Not really", "No"]
  },
  {
      question: "How often do you feel God's presence in your life?",
      choices: ["Always", "Often", "Sometimes", "Rarely", "Never"]
  }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", function() {
  showQuestion();
  document.getElementById("quiz-container").style.display = "block";
});

function showQuestion() {
  if (currentQuestionIndex < quizQuestions.length) {
      const currentQuestion = quizQuestions[currentQuestionIndex];
      document.getElementById("question").innerText = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
      const choicesContainer = document.getElementById("choices");
      choicesContainer.innerHTML = '';
      currentQuestion.choices.forEach(choice => {
          const button = document.createElement("button");
          button.innerText = choice;
          button.onclick = () => selectChoice(choice);
          choicesContainer.appendChild(button);
      });
      document.getElementById("progress").innerText = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  } else {
      showResult();
  }
}

function selectChoice(choice) {
  score += quizQuestions[currentQuestionIndex].choices.indexOf(choice) + 1;
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
  document.getElementById("next-button").disabled = true;
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";

  const maxScore = quizQuestions.length * 5; // Maximum score is 5 points per question
  const percentage = (score / maxScore) * 100;
  let resultMessage;

  if (percentage >= 80) {
      resultMessage = "You have found your purpose!";
  } else if (percentage >= 60) {
      resultMessage = "You are not yet sure. Keep seeking!";
  } else {
      resultMessage = "You might need counseling to find your purpose.";
  }

  document.getElementById("result").innerText = `Your score is ${percentage.toFixed(2)}%. ${resultMessage}`;
}

function downloadResult() {
  const resultText = document.getElementById("result").innerText;
  const blob = new Blob([resultText], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "quiz_result.txt";
  link.click();
}

function downloadQuestions() {
  const questionsText = quizQuestions.map((q, index) => `Q${index + 1}: ${q.question}\nChoices: ${q.choices.join(', ')}\n`).join('\n');
  const blob = new Blob([questionsText], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "quiz_questions.txt";
  link.click();
}

function retakeQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
}

function showReviewForm() {
  document.getElementById("result-container").style.display = "none";
  document.getElementById("review-container").style.display = "block";
}

function submitReview() {
  const reviewComment = document.getElementById("review-comment").value;
  alert("Thank you for your review: " + reviewComment);
  document.getElementById("review-comment").value = '';
  document.getElementById("review-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("review-container").style.display = "none";
  document.getElementById("result-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
}

function shareQuiz() {
  const shareData = {
      title: 'Christian Purpose Quiz',
      text: 'Discover your purpose with this Christian Purpose Quiz!',
      url: window.location.href
  };

  if (navigator.share) {
      navigator.share(shareData).then(() => {
          console.log('Successfully shared');
      }).catch((error) => {
          console.error('Something went wrong sharing the quiz', error);
      });
  } else {
      alert('Your browser does not support the Web Share API.');
  }
}