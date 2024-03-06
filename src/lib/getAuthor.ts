import { IAuthor } from "src/types/types";

export const getAuthor = (id:number, authors: {name:string; avatar:string, id: number}[]):IAuthor => {
    const author = authors.filter((author) => author.id == id)[0];
    const r:IAuthor = {author: author.id, avatar: author.avatar, name: author.name}
    return r;
}