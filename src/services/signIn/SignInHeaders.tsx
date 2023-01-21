import { AxiosResponse } from "axios";

const storeAPITokens = async (res: AxiosResponse<any, any>) => {
  const accessToken: string = res.headers['access-token'] != null ? res.headers['access-token'] : '';
  const client: string = res.headers['client'] != null ? res.headers['client'] : '';
  const uid: string = res.headers['uid'] != null ? res.headers['uid'] : '';

  sessionStorage.setItem('access-token', accessToken);
  sessionStorage.setItem('client', client);
  sessionStorage.setItem('uid', uid);
}


export default storeAPITokens;
