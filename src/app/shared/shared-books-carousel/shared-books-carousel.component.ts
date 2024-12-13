import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import { BookCategories } from './enums/book-categories.enum';
import { CommonModule } from '@angular/common';
import { BookEntity, VolumeInfo } from '../../models/book.models';

@Component({
  selector: 'app-shared-books-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-books-carousel.component.html',
  styleUrl: './shared-books-carousel.component.scss',
})
export class SharedBooksCarouselComponent implements OnInit {
  @Input() category: BookCategories | undefined;
  public slides: VolumeInfo[] | undefined;
  constructor(public bookService: BooksService) {}

  ngOnInit(): void {
    this.bookService
      .retrieveBooksBasedOnCategory(BookCategories.CHRISTMAS, 10)
      .subscribe((data) => {
        console.log(data);
        const relevantInfo = data.items.map(
          (item: BookEntity) => item.volumeInfo
        );
        this.slides = relevantInfo;
        console.log(this.slides);
      });
  }
}
