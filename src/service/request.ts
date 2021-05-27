import axios from "axios"
// import dotenv from "dotenv"
// import fs from "fs";

// const envFiles = [
//     /** default file */ `.env`,
//     /** mode file */ `.env.${process.env.NODE_ENV}`
// ]

// for (const file of envFiles) {
//   console.log(222, file);
//   // const envConfig = dotenv.parse(fs.readFileSync(file))
//   // for (const k in envConfig) {
//   //   process.env[k] = envConfig[k]
//   // }
// }

const MOCK_ROOT = 'https://yapi.kuaibaobao.com/mock/57';

const requestConfigAdapter = config => {

  const { base, url, isMock } = config;
  console.log(111, process.env);

  // let API_BASE = base;
  let API_BASE = process.env[base];

  if (isMock) {
    API_BASE = MOCK_ROOT;
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
