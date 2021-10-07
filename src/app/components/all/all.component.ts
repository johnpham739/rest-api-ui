import { UserService } from './../../services/user.service';
import { ClientMessage } from './../../models/client-message';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  title = "All Users"
  public users: User[] = [];
  public clientMessage: ClientMessage = new ClientMessage("Sorry, no users to display");

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.findAllUsers();
  }

  public findAllUsers() {
    this.userService.findAllUsers()
      .subscribe(data => this.users = data)
  }
}
