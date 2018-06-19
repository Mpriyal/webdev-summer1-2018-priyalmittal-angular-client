import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) {
    this.updateUser = this.updateUser.bind(this);
  }

  user;
  username;
  password;
  firstName;
  lastName;
  email;
  sections = [];
  newUser: User;

  updateUser() {
    console.log(this.username);
    console.log(this.newUser);
    console.log(this.user);
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.email = this.email;
    this.service.updateUser(this.user)
      .then(user =>
        this.user = user
      );
    console.log(this.user);
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
          this.username = user.username;
          this.password = user.password;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.email = user.email;
          this.user = user;
        }
      );

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections)
      .then(() => console.log(this.user));
  }

}
