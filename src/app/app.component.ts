import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedHeaderComponent } from './shared/shared-header/shared-header.component';
import { AuthModule } from './auth/auth.module';
import { BooksService } from './services/books/books.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { FirebaseUser } from './models/firebase-user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedHeaderComponent, HttpClientModule],
  providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public user: FirebaseUser | undefined;
  public name: string | undefined;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      const userCredentials = JSON.parse(user?.displayName as any);
      this.user = userCredentials;
      this.name = userCredentials.firstName;
    });
  }
}
