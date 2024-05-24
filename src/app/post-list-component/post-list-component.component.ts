import { Component, OnInit ,Input } from '@angular/core';
import { PostList } from '../models/PostList';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input()
  postList!:PostList;

  constructor() { }

  ngOnInit(): void {
  }

  OnIncLoves(): number {
    return this.postList!.loveIts++;
  }
  
  OnDecLoves(): number {
    if (this.postList.loveIts! > 0) return this.postList.loveIts!--;
    return 0;
  }
}
