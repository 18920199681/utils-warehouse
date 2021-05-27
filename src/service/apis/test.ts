import request from '/@/service/request';

export default {
  // test
  queryTest: (params = {}) => {
    request.get({
      base: 'DOMAIN',
      url: `/api/get-city-list`,
      payload: params,
      isMock: false
    })
  },
}
