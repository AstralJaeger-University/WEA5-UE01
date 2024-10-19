import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {Book} from './book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookListComponent, BookDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled';

  listOn = true;
  detailsOn = false;
  book: Book = new Book();

  showDetails = (book: Book) => {
    console.log(`show details for book ${book?.id}`);
    this.listOn = false;
    this.detailsOn = true;

    this.book = book;
  }

  showList = () => {
    this.listOn = true;
    this.detailsOn = false;
  }
}
