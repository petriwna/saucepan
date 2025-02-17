import { Form } from './Form';
import { ReviewsComponent } from './ReviewsComponent';
import { Clock } from './Clock';

export class Main {
  constructor() {
    this.init();
  }

  init() {
    new Clock();
    this.initForm();
    new ReviewsComponent();
  }

  initForm() {
    const form = document.querySelector('.request__form');
    new Form(form);
  }
}
