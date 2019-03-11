import request from "request-promise";

const baseUrl = "http://127.0.0.1:8000/questions/";

const addQuizEndpoint = "add/";
const options = (url, data) => ({
  method: "post",
  body: data,
  json: true,
  url
});
export const postQuiz = quiz =>
  new Promise((resolve, reject) =>
    request(options(baseUrl + addQuizEndpoint, quiz))
      .then(json => {
        return json.success ? resolve(json) : reject(json);
      })
      .catch(err => reject(err))
  );

const getQuizEndpoint = "get/";
export const getQuiz = quiz_hash =>
  new Promise((resolve, reject) =>
    fetch(`${baseUrl}${getQuizEndpoint}?quiz_hash=${quiz_hash}`)
      .then(res => res.json())
      .then(json => (json.success ? resolve(json) : reject(json)))
      .catch(err => reject(err))
  );
