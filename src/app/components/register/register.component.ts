import { ClientMessage } from './../../models/client-message';
import { UserService } from './../../services/user.service';
import { User, Address } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = "Register User"

  public user = new User(0, "", "", "", "", "", []);
  public address = new Address("", "", "", "");
  public clientMessage = new ClientMessage("");

  constructor(private userService: UserService) { }

  public registerUser(): void {
    
    // Call an injected UserService

    // Push the address object captured into the User's address's []
    this.user.addresses.push(this.address);

    // Call this.userService.registerUser() methodand post it
    this.userService.registerUser(this.user)
      .subscribe(
        data => this.clientMessage.message = `Successfully inserted ${data.firstName}`,// console.log(`Successfully added ${data.firstName}`),
        error => this.clientMessage.message = `Something went wrong. Error ${error}`// console.error(`We got an error: ${error}`)
      )
  }

  public testUserObj(): void {
    this.user.addresses.push(this.address);
    console.log(this.user);
  }

}
