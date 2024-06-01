import { Component, OnInit } from '@angular/core';
import { User, UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[] = [];
  pdfUrl:any|undefined;
  constructor(private userService: UserService) {
    this.pdfUrl=userService.pdfurl;
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  addUser(user: User) {
    this.userService.addUser(user).subscribe(() => {
      this.loadUsers();
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
  
  pdfgen(url: any) {
    this.userService.pdfurl=url;
    this.pdfUrl=url;
  }


}
