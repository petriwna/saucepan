import { Form } from './Form';
import { ReviewsComponent } from './ReviewsComponent';

export class Main {
  constructor() {
    this.init();
  }

  init() {
    this.initForm();
    new ReviewsComponent();
  }

  initForm() {
    const form = document.querySelector('.request__form');
    new Form(form);
  }
}
