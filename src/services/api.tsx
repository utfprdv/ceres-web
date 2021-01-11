class Api {
  baseUrl: string;

  constructor(baseUrl = 'https://ceres.app.br/api') {
    this.baseUrl = baseUrl;
  }

  get = (path: string) => {
    return fetch(`${this.baseUrl}${path}`, {
      method: 'get',
    }).then(data => data.json());
  };

  ṕost = (path: string, body: FormData) => {
    return fetch(`${this.baseUrl}${path}`, {
      method: 'post',
      body,
    }).then(data => data.json());
  };
}

export default new Api();
