const API_DELAY = 1000;

export const postQuiz = quiz =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve({
          success: true,
          message: "",
          quiz_hash: "yu5uL"
        }),
      API_DELAY
    )
  );

export const getQuiz = quiz_hash =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve({
          success: true,
          message: "",
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
        }),
      API_DELAY
    )
  );
