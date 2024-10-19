import {Component, input, Input, InputSignal} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book-list-details',
  standalone: true,
  imports: [],
  templateUrl: './book-list-details.component.html',
  styleUrl: './book-list-details.component.css'
})
export class BookListDetailsComponent {
  book: InputSignal<Book> = input.required<Book>();

}
