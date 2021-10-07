import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  title = "Find User"
  userId: number = 0;
  username: string = "";
  user = new User(0, "", "", "", "", "", [])
  
  constructor(private userService: UserService) { }

  public findUserById() {
    this.userService.findById(this.userId)
      .subscribe(data => console.log(data))
  }

  public findUserByUsername() {
    this.userService.findByUsername(this.username)
      .subscribe(data => this.user = data)
  }
}
