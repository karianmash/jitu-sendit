export interface User {
  isLoggedIn?: string;
  fullname?: string;
  email: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}

export interface UserParcel extends User {
  parcelsSent: number;
  parcelsReceived: number;
  totalAmount: number;
}
