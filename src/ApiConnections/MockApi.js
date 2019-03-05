const API_DELAY = 1000;

let quizDB = {
  yu5uL: {
    quiz_id: 12,
    title: "test_title",
    questions: [
      {
        question_id: 7,
        question_text: "q1?",
        correct: 20,
        answers: [
          {
            answer_id: 19,
            answer_text: "a"
          },
          {
            answer_id: 20,
            answer_text: "b"
          },
          {
            answer_id: 21,
            answer_text: "c"
          }
        ]
      },
      {
        question_id: 8,
        question_text: "q2?",
        correct: 22,
        answers: [
          {
            answer_id: 22,
            answer_text: "a2"
          },
          {
            answer_id: 23,
            answer_text: "b2"
          },
          {
            answer_id: 24,
            answer_text: "c2"
          }
        ]
      }
    ]
  }
};

export const postQuiz = quiz =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const quiz_hash = makeid();
      quizDB[quiz_hash] = quiz;
      quizDB[quiz_hash].questions = quiz.questions.map(q => ({
        ...q,
        answers: q.answers.map((answer, index) => ({
          ...answer,
          answer_id: index
        }))
      }));
      resolve({
        success: true,
        message: "",
        quiz_hash: quiz_hash
      });
    }, API_DELAY)
  );

export const getQuiz = quiz_hash =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        quizDB[quiz_hash]
          ? resolve({
              success: true,
              message: "",
              ...quizDB[quiz_hash]
            })
          : reject({
              success: false,
              message: "quiz not found"
            }),
      API_DELAY
    )
  );

function makeid() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
