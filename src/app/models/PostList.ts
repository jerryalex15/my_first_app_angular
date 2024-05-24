export class PostList{
    created_at!:Date;
    loveIts!: number;
    constructor(public titre:string , public content: string ){
        this.loveIts = 0;
        this.created_at = new Date;
    }
}