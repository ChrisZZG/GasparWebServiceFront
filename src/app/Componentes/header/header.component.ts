import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
 

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

//   let hamburger = document.querySelector('.hamburger');
// hamburger.onclick = function(){
//     let navBar = document.querySelector('.nav-bar');
//     navBar.classList.toggle('active');
// }
navR(): void {
  const hamburger = document.querySelector('.hamburger');
  this.navR = function(){
    let navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
  }
}

onLogout(): void {
  this.tokenService.logOut();
  window.location.reload();
}

login(){
  this.router.navigate(['/login']);
}

}
