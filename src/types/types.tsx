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

// interfase Messages
export interface IMesseng{
    id: number;
    img: string;
    nameUser: string;
    status: string;
    online: false;
}
export interface IMessengs{
    messeng: IMesseng;
}
