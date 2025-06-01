import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { Register } from '../../../models/user.model';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  fb = inject(FormBuilder);
  authService = inject(AuthenticationService)
  message : null | string = null;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('')]],
    firstName: ['', [Validators.required, Validators.maxLength(30)]],
    lastName: ['', [Validators.required, Validators.maxLength(30)]]
  })

  onSubmit() {
    const { email, password, firstName, lastName } = this.form.value;
    const user = { email, password, firstName, lastName }
    this.authService.register(user as Register).subscribe(
  {
    next: (registeredUser) => {
      const { firstName, lastName} = registeredUser;
      this.form.reset();
      this.message = `${firstName} ${lastName} registered`
    },
    error: (err) => {
      this.message = 'An error happened';
    }
  }
    )
  }
}
