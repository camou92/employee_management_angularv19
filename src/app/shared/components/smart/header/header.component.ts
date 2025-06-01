import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../../authentication/services/authentication.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  authServ = inject(AuthenticationService);
  private router = inject(Router)
  isConnected = this.authServ.isConnected

  onLogout(){
    this.authServ.logOut()
    this.router.navigate(['/login'])
  }
}
