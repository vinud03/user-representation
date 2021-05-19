import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  name: any;
  details: any;
  isLoggedIn:boolean;
  params :any = '';
  searchWord ='';
 
  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { 
    // this.data = dataService.data;
    this.data = JSON.parse(localStorage.getItem('response'));
    this.isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'));
    this.isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'));
  }
  
  
  ngOnInit(): void {
    // this.name = JSON.stringify(this.route.snapshot.data);
    // console.log(this.name)
    // console.log(this.route.snapshot.queryParamMap.get('name'));
    // this.route.queryParamMap.subscribe((params)=>{
    //   this.params = params;
    //   console.log(params);
    // })
  }
  
  searchThis($event){
    // console.log('even = '+  $event.toLowerCase());
    // const search = this.dataService.getSearchText();
    // console.log(search.toLowerCase());
    this.searchWord = $event;
    this.getDetail( $event.toLowerCase());
    
  }

  detail(id){
    for (let el of this.data){
      if (el.id == id){
        this.details = el;
        console.log(this.details.name);
        break;
      }
    }
  }

  getDetail(search){
    // console.log(this.data)
    for(let el of this.data){
      const name = el.name.toLowerCase();
      if((name === search) || (el.email.toLowerCase() === search)){
        console.log(el.name);
        console.log(el.email);
      }

    }
  }

  Profile(id){
    this.dataService.getAlbumandPosts();
    setTimeout(()=>{
      // this.router.navigate(['/profile']);
      this.router.navigate(['profile'],{queryParams:{'id':id}});
      this.dataService.userId = id;
    },1000)
  }

}
