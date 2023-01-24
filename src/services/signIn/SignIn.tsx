import { AxiosResponse } from "axios";

import axios from 'axios';
import Endpoints from 'constants/endpoints';

const storeAPITokens = async (res: AxiosResponse<any, any>) => {
  const accessToken: string = res.headers['access-token'] != null ? res.headers['access-token'] : '';
  const client: string = res.headers['client'] != null ? res.headers['client'] : '';
  const uid: string = res.headers['uid'] != null ? res.headers['uid'] : '';

  sessionStorage.setItem('api_key_access-token', accessToken);
  sessionStorage.setItem('api_key_client', client);
  sessionStorage.setItem('api_key_uid', uid);
}

const SignIn = async (email: string, password: string) => {
  const signInEndpoint: string = await `${process.env.REACT_APP_API_BASE_URL}/${Endpoints.SIGN_IN}`;

  try {
    const res = await axios.post(
      signInEndpoint,
      { user:
        {
          email: email,
          password: password
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        }}
      );
    
    await storeAPITokens(res);
    return true;
  }
  catch(error: any){
    return new Error('Login failed');
  }
}

export default SignIn;
