import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogdata;
  constructor(private homeservice: HomeService) { }

  ngOnInit(): void {
    this.homeservice.getdata()
      .subscribe
      (
        data => {
          this.blogdata = data.Blog;
          //console.log(this.blogdata);
        }
      )
  }

}
