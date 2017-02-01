import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/Rx';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormBuilder]
})
export class AppComponent {
  title = 'app works!';
  searchForm: any;
  results$: Observable<any>;
  searchText: any;

  constructor(private _formBuilder: FormBuilder, private _http: Http) {
    const API_URL = 'https://www.googleapis.com/youtube/v3/search';
    const API_KEY = 'AIzaSyDzqZUvI_FcLKg00BaczXSxUZARdYT7_00';
    this.searchForm = this._formBuilder.group({
      'searchInput': ['', Validators.required]
    });
    this.results$ = this.searchForm.controls.searchInput.valueChanges
      .switchMap(query => this._http.get(`${API_URL}?q=${query}&key=${API_KEY}&part=snippet`))
      .map(res => res.json())
      .map(res => res.items)
  }



}
