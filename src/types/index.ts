export interface Message {
  userId: number;
  message: string;
  isInit: boolean;
  userName?: string;
}

export interface User {
  id: number;
  name: string;
}
