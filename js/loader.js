const SERVER_URL = `https://es.dump.academy/guess-melody/`;
const APP_ID = 345215164;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(`${response.status}: ${response.statusText}`);
};

const toJSON = (response) => response.json();

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`)
      .then(checkStatus)
      .then(toJSON);
  }

  static loadResults() {
    return fetch(`${SERVER_URL}/stats/${APP_ID}`)
      .then(checkStatus)
      .then(toJSON);
  }

  static saveResults(data) {
    data = Object.assign({}, data);
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}`, requestSettings)
      .then(checkStatus);
  }
}
