import request from '/@/service/request';

export default {
  // test
  queryTest: (params = {}) => {
    request.get({
      base: 'VITE_BASEURL',
      url: `/api/get-city-list`,
      payload: params,
      isMock: false
    })
  },
}
