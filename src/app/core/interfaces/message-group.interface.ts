import { FormGroup } from '@angular/forms'

export interface MessageGroup {
  name: string;
  email: { chooseMessage(form: FormGroup): string };
  phone: { chooseMessage(form: FormGroup): string };
  datepicker: string;
  country: string;
}
