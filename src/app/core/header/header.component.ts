import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  title  = 'My blog';
  constructor() { }

  ngOnInit(): void {
  }

}
