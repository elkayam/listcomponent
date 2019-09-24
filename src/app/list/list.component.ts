import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../movies';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    movies = MOVIES;
    list:boolean = false;
    headers = ["","Id","Name","Length","Author","Imdb","Captions"];
  constructor() { }

  ngOnInit() {
  }

  toggleListOrCard(){
    this.list = !this.list;
  }
}