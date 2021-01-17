import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users = [];

  constructor(private myservice: MyserviceService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.myservice.getUsers().subscribe((data) => {
      this.users = data.data.users;
      console.log(this.users);
    });
  }
}
