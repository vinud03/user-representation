import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  user:any = '';
  album:any;
  userId:string = '';
  msg:any;

  private subject = new Subject<any>(); 
  constructor(private httpClient: HttpClient) {
    // this.getAlbumandPosts();
   }

  getUser(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((response:Response)=>{
      this.data = response;
      // console.log(response);
    })
  }

  getAlbumandPosts(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/albums').subscribe((respose)=>{
      this.album = respose;
      localStorage.setItem('album', JSON.stringify(respose));
    })
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((res)=>{
      localStorage.setItem('posts', JSON.stringify(res));
    })
  }

  setSearchText(text:string){
    this.subject.next({text: text});
  }

  getSearchText(){
    this.subject.subscribe((val)=>{
      this.msg =  val.text.target.value;
      // return val.text.target.value;
    })
    return this.msg;
  }

}
