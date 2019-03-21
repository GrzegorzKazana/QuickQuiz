import request from "request-promise";

// const baseUrl = "http://127.0.0.1:8000/api/quiz/";
const baseUrl = "https://grzesiek712.pythonanywhere.com/api/quiz/";

const options = data => ({
  method: "post",
  body: data,
  json: true,
  url: baseUrl
});
export const postQuiz = quiz =>
  new Promise((resolve, reject) =>
    request(options(quiz))
      .then(json => {
        json.success ? resolve(json) : reject(json);
      })
      .catch(err => reject(err))
  );

export const getQuiz = quiz_hash =>
  new Promise((resolve, reject) =>
    fetch(`${baseUrl}${quiz_hash}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        json.success ? resolve(json) : reject(json);
      })
      .catch(err => reject(err))
  );
