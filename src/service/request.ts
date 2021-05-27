import axios from "axios"

const requestConfigAdapter = config => {

  const { base, url, isMock } = config;

  let API_BASE = import.meta.env[base];

  if (isMock) {
    API_BASE = import.meta.env.VITE_MOCK_ROOT;
  }

  return { url: `${API_BASE}${url}` };
};

const tokenPlugin = config => {
  return config;
}

const handleRequestErr = err => {

  return Promise.reject(err.response);
}

const handleResponse = res => {
  return res;
}

// const responseData = res => res.data;

axios.interceptors.request.use(tokenPlugin, handleRequestErr);

axios.interceptors.response.use(handleResponse);

let request: any = {};

['delete', 'get', 'head', 'options'].forEach(method => {
  request[method] = ({ base, url, payload, isMock = false }) => {
    const { url: apiUrl } = requestConfigAdapter({ base, url, isMock });
    return axios[method](apiUrl, { params: payload });
    // return axios[method](apiUrl, { params: payload }).then(responseData);
  }
});

['post', 'put', 'patch'].forEach(method => {
  request[method] = ({ base, url, payload, isMock = false }) => {
    const { url: apiUrl } = requestConfigAdapter({ base, url, isMock });
    return axios[method](apiUrl, payload);
    // return axios[method](apiUrl, payload).then(responseData);
  }
});

export default request;
