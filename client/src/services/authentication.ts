import { userListData } from '@/mocks/data';
export interface UserInfo {
  id?: string;
  avatar?: string;
  username?: string;
  email: string;
  password: string;
  //TODO should not include password here, fake type for test login
}
export interface UserLoginParams {
  payload: { email: string; password: string };
}
export interface UserRegisterParams {
  payload: { email: string; password: string; username: string };
}

export function login(params: UserLoginParams) {
  const {
    payload = {
      email: '',
      password: '',
    },
  } = params;
  return new Promise<UserInfo>((resolve, reject) => {
    const storedUserList = JSON.parse(localStorage.getItem('userList')!);
    if (!storedUserList) {
      //init user list data into local storage
      localStorage.setItem('userList', JSON.stringify(userListData));
    }
    const { email, password } = payload;
    const userLogged = JSON.parse(localStorage.getItem('userList')!).find(
      (item: any) => item.email === email,
    );
    if (userLogged && password === userLogged.password) {
      localStorage.setItem('userLogged', JSON.stringify(userLogged));
      // Simulating an asynchronous operation
      setTimeout(() => {
        resolve(userLogged);
      }, 1000);
    } else {
      reject({ success: false, message: 'Login failed' });
    }
  });
}
export function register(params: UserRegisterParams) {
  const {
    payload = {
      email: '',
      password: '',
      username: '',
    },
  } = params;
  return new Promise<UserInfo>((resolve, reject) => {
    const storedUserList = JSON.parse(localStorage.getItem('userList')!);
    const { email, username, password } = payload;
    const existingUser = JSON.parse(localStorage.getItem('userList')!).find(
      (item: any) => item.email === email,
    );
    if (existingUser) {
      reject({ success: false, message: 'User already exists.' })
    } else {
      //mock user register
      const newUser = {
        id: storedUserList.length + 1,
        avatar: '',
        username: username,
        email: email,
        password: password,
      };
      storedUserList.push(newUser);
      localStorage.setItem('userList', JSON.stringify(storedUserList));
      localStorage.setItem('userLogged', JSON.stringify(newUser));
      resolve(newUser);
    }
  });
}
