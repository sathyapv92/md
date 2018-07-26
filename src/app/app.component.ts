import { Component, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OverlayContainer } from '@angular/cdk/overlay';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  http: any;
  title = 'app';
  public loading = false;
  busy: Subscription;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  // ...
  constructor(private test: TestService) {

  }

  ngOnInit() {
   // '//this.test.getData();
  }
  themeClass = localStorage.getItem('applicationTheme');
  changeTheme(theme) {
    this.themeClass = theme;
   // this.loading = true;
    localStorage.setItem('applicationTheme', this.themeClass);
  }

}

