import { Form } from './Form';

export class Main {
  constructor() {
    this.init();
  }

  init() {
    this.initForm();
  }

  initForm() {
    const form = document.querySelector('.request__form');
    new Form(form);
  }
}
