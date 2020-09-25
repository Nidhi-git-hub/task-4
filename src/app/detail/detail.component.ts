import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from '../blog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  resData;
  collection;
  BlogID: number;
  post: Blog; 

  constructor(private homeservice: HomeService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const BlogID = this.route.snapshot.paramMap.get('BlogID');
    // console.log(BlogID);
    this.homeservice.getBlog(+BlogID).subscribe((result)=>{
      this.resData=result;
      this.collection=this.resData.Blog;
      //console.log(result);
     })
  }

}
