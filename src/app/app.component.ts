import { Component } from '@angular/core';
import { SocialUser, SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  user : SocialUser;
  constructor(private authService : SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user
    })
  }
signinwithgoogle(){ //For Sign in
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
}
signoutgoogle(){ // For sign out User 
  this.authService.signOut();
// 
}
}
