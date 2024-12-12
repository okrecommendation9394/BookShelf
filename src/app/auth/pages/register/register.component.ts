import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  public registerForm: FormGroup = this.initialiseForm();
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService
  ) {}

  private initialiseForm(): FormGroup {
    return this.fb.group({
      firstName: this.fb.control('', [Validators.required]),
      lastName: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  public navigate() {
    this.router.navigate(['auth/login']);
  }

  public showLoadingMessage() {
    this.toastr.info('Loading...', 'Please Wait', {
      disableTimeOut: true,
      closeButton: true,
      tapToDismiss: false,
      progressBar: true,
    });
  }
  public hideLoadingMessage() {
    this.toastr.clear();
  }

  register() {
    this.showLoadingMessage();
    const { email, password, firstName, lastName, entityNo } =
      this.registerForm.value;
    // if (email && password && firstName && lastName && entityNo)
    this.auth
      .register(email, password, firstName, lastName, entityNo)
      .pipe(
        catchError((err) => {
          this.toastr.error(err.message);
          return of(err);
        })
      )
      .subscribe(() => {
        this.hideLoadingMessage();
        this.router.navigate(['/dashboard']);
      });
  }
}
