import { Injectable } from '@angular/core';

@Injectable()
export class AuthServise {
    loggedIn : boolean;
    constructor(){
        this.loggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'));
        if(this.loggedIn === null){
            sessionStorage.setItem('isLoggedIn','false');
            
        }

    }

    isAuthenticated(){

        const promise= new Promise(
            (resolve, reject)=>{
                setTimeout(()=>{
                    resolve(this.loggedIn);
                },800);
            }
        );
        return promise;
    }

    login(){
        this.loggedIn = true;
        sessionStorage.setItem('isLoggedIn','true');
    }
    
    logout(){
        this.loggedIn = false;
        sessionStorage.setItem('isLoggedIn','false');
    }
}