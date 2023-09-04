
export interface IPost {
  id: number;
  img: string;
  nameUser: string;
  address: string;
  boximg: string;
  discription: string;
  coment: number;
  like: boolean;
}
export interface IPosts {
  post: IPost;
}
export interface IArr {
  [index: number]: IArr_obj;
  map: any;
}
export interface IArr_obj {
  hmo: string;
  message: string;
}
// interfase Messages
export interface IMesseng {
  id: number;
  img: string;
  nameUser: string;
  status: string;
  online: false;
  messages: IArr;
}

