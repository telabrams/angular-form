import { Component, OnInit } from '@angular/core';
import { DatePart } from '../core/interfaces/date.interface';

@Component({
  selector: 'app-personal-hello',
  templateUrl: './personal-hello.component.html',
  styleUrls: ['./personal-hello.component.scss']
})
export class PersonalHelloComponent implements OnInit {
  user: any;
  date: DatePart;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('personalForm'));
    let formDate = new Date(this.user.datepicker);
    this.date = {
      day: formDate.getDay(),
      month: formDate.getMonth()+1,
      year: formDate.getFullYear()
    }
    console.log(formDate);
  }

}
