import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { AuthServise } from '../auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
name:string = '';
user: any;
url: string;
userId:string;
isLoggedIn: boolean;
searchword = '';


// @Input() value: any;

@Output() searchcriteria = new EventEmitter<String>();

  constructor(private router:Router, private route: ActivatedRoute, private dataService: DataService, private authService: AuthServise) {
    this.url =this.router.url;
    this.userId ='/profile/'+this.dataService.userId;
    this.isLoggedIn = authService.loggedIn;

  }
  
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user !== null && this.isLoggedIn){
      this.name = this.user['name'];
      this.dataService.user = name;
      // console.log(this.value);
      
    }
  }

searchThis() {
}

onLogout(){
  this.authService.logout();
  localStorage.setItem('response',null);
  localStorage.setItem('user',null);
  this.clearStorage();
  this.router.navigate(['login']);
}

onBack(){
  this.router.navigate([".."]);
  this.clearStorage();
}

onSearch(event){
  this.searchword = event.target.value;
  this.searchcriteria.emit(this.searchword);
  this.dataService.setSearchText(event);
  // console.log(event.target.value);
}
clearStorage(){
  localStorage.setItem('album',null);
  localStorage.setItem('posts',null);
  this.dataService.userId = '';
  
}

}
