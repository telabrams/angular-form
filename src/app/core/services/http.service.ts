import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class HttpService {

  constructor(
    private http : Http,
    private jsonp: Jsonp
  ) { }

  //Get countries code from API by IP
  getCountryCode() {
    return this.jsonp.get('//ipinfo.io/?format=jsonp&callback=JSONP_CALLBACK')
      .map((res: Response) => res.json());
  }

  //Get countries phone code from JSON
  getPhoneCode() {
    return this.http.get('assets/data/phones.json')
      .map((res: Response) => res.json());
  }

  //Get countries phone code from JSON
  getCountryName() {
    return this.http.get('assets/data/countries.json')
      .map((res: Response) => res.json());
  }

}
