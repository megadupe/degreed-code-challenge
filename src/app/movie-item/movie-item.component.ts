import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['../../assets/styles/css/movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  
  @Input() movie: any; 

  constructor() { }

  ngOnInit() {
  }

}
