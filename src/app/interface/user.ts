export interface User {
  isLoggedIn?: string;
  user_id?: string;
  user_role?: string;
  fullname?: string;
  email: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}

export interface LoginRes {
  message: string;
  user?: User;
  token?: string;
}

export interface UserParcel extends User {
  parcelsSent: number;
  parcelsReceived: number;
  totalAmount: number;
}
