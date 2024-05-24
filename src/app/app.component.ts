import { Component } from '@angular/core';
import { PostList } from './models/PostList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts : PostList[] =[
    new PostList("Mon premier post" , "Ceci est la description de mon post"),
    new PostList("Mon deuxième post" , "Ceci est la description de mon post"),
    new PostList("Autre post" , "Ceci est la description de mon post")
  ];
}
