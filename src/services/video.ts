export interface AuthorInfo {
    id: string;
    avatar: string;
    nickname: string;
}
export interface VideoInfo {
    id: string;
    createTime:string;
    title: string;
    cover: string;
    view: number;
    duration: string;
    likes: number;
    dislikes: number;
    author: AuthorInfo;
    isTrending: boolean;
}
