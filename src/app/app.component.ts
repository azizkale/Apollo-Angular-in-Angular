import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users = [];
  user;

  constructor(private myservice: MyserviceService) {}

  ngOnInit(): void {
    this.getUsers();
    this.getUser(1);
    this.addUser(5, 'aziz kale', 'ankara');
  }

  getUsers() {
    this.myservice.getUsers().subscribe((data) => {
      this.users = data.data.users;
      console.log(this.users);
    });
  }

  getUser(id: any) {
    this.myservice.getUser(id).subscribe((data) => {
      this.user = data.data.user;
      console.log(this.user);
    });
  }

  addUser(id: any, username: string, city: string) {
    this.myservice.addUser(id, username, city).subscribe((data) => {
      console.log(data.data.addUser);
    });
  }
}
