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
