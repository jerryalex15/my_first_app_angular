export class Post {
    titre : string;
    content : string;
    loveIts : number;
    created_at: Date;

    constructor(titre:string ,content:string , loveIts:number ) {
        this.titre = titre;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = new Date();
    }
}
