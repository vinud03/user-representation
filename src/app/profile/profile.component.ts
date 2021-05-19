import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: any;
  response: any;
  details: any;
  albums: any;
  albumData: any = [];
  posts: any;
  postsData: any = [];
  status: any = { album: false, post: false, details: false };
 
 
  constructor(private dataService: DataService, private route: ActivatedRoute) {
    // this.id = this.route.snapshot.params['id']
    this.id = this.dataService.userId;
    this.response = JSON.parse(localStorage.getItem('response'));
    this.albums = JSON.parse(localStorage.getItem('album'));
    this.posts = JSON.parse(localStorage.getItem('posts'));

  }

  ngOnInit(): void {
  }

  getDetails(id) {
    this.status.details = !this.status.details;
    if (this.status.details) {
      for (let el of this.response) {
        if (el.id == id) {
          this.details = el;
          this.status.album = false;
          this.status.post = false;
        }
      }
    }
  }

  showAlbum(id) {
    this.status.album = !this.status.album;
    if (this.status.album) {

      for (let el of this.albums) {
        if (el.userId == id) {
          this.albumData.push(el);
        }
      }
    }
    this.status.post = false;
    this.status.details = false;
  }

  showPost(id) {
    this.status.post = !this.status.post;
    if (this.status.post) {
      for (let el of this.posts) {
        if (el.userId == id) {
          this.postsData.push(el);
        }
      }
    }
    this.status.details = false;
    this.status.album = false;
  }



}
