import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  @Input() book: Book = new Book();
  @Output() showListEvent = new EventEmitter();
}
