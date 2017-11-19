import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageGroup } from '../core/interfaces/message-group.interface';
import { HttpService } from '../core/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent implements OnInit {
  personalForm: FormGroup;
  private personalMessage: MessageGroup;
  private phoneCode: string;
  private countryName: string;
  startDate = new Date(1990, 0, 1);

  constructor(
    private fb: FormBuilder,
    private httpService : HttpService,
    private router: Router
  ) {

    //Form group
    this.personalForm = fb.group({
      'name': [null, Validators.required],
      'email': [null, [
        Validators.required,
        Validators.email]
       ],
      'phone': [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('[0-9]+')]
      ],
      'datepicker': [null, Validators.required],
      'country': [null, Validators.required],
      'city': [null ],
      'state': [null ]
    });

    //Message group
    this.personalMessage = {
      name:  `Name is required`,
      email: {
        chooseMessage(form) { //It is choosing which message should was shown
          return form.controls.email.hasError('required') ?
          `Email is required` :
          form.controls.email.hasError('email') &&
          `Please enter a valid email address`;
        }
      },
      phone: {
        chooseMessage(form) { //It is choosing which message should was shown
          return form.controls.phone.hasError('required') ?
          `Phone is required` :
          form.controls.phone.hasError('minlength') ?
          `Your phone number too short` :
          form.controls.phone.hasError('pattern') &&
          `Please enter a valid phone`;
        }
      },
      datepicker: `Date is required`,
      country: `Country is required`
    };

  }

  //Set values in form
  setValues()  {
    this.httpService.getCountryCode().subscribe(data => {
      let country = data.country;

      //Set phone code
      this.httpService.getPhoneCode().subscribe(data => {
        let phones = data;
        for (let phone in phones) {
          country === phone &&
          this.personalForm.controls.phone.patchValue(phones[phone])
        }
      })

      //Set country name
      this.httpService.getCountryName().subscribe(data => {
        let names = data;
        for (let name in names) {
          country === name &&
          this.personalForm.controls.country.patchValue(names[name])
        }
      })
    })
  }

  //Form submiting
  formSubmitted() {
    let formObj = this.personalForm.getRawValue(),
        serializedForm = JSON.stringify(formObj);
    localStorage.setItem('personalForm', serializedForm);
    this.router.navigate(['Personal-hello']);
  }

  ngOnInit() {
    //Set default values in the form
    this.setValues()
  }

}
