import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { debounceTime, Observable } from 'rxjs';
import { User as FirebaseUser } from 'firebase/auth';

@Component({
  selector: 'app-shared-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './shared-header.component.html',
  styleUrl: './shared-header.component.scss',
})
export class SharedHeaderComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}
  public user$: Observable<FirebaseUser | unknown> | undefined;
  @Input() name: string | undefined;

  ngOnInit(): void {
    this.user$ = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout().subscribe(() => this.router.navigate(['/']));
  }
}
