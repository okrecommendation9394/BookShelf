import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import { BookCategories } from './enums/book-categories.enum';

@Component({
  selector: 'app-shared-books-carousel',
  standalone: true,
  imports: [],
  templateUrl: './shared-books-carousel.component.html',
  styleUrl: './shared-books-carousel.component.scss',
})
export class SharedBooksCarouselComponent implements OnInit {
  @Input() category: BookCategories | undefined;
  constructor(public bookService: BooksService) {}

  ngOnInit(): void {
    this.bookService
      .retrieveBooksBasedOnCategory(BookCategories.CHRISTMAS, 10)
      .subscribe((d) => {
        console.log(d);
      });
  }
}
