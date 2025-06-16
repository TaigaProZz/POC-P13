import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {User} from "../core/models/User";
import {UserService} from "../core/services/UserService";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  usersList! : User[];
  currentUser!: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.usersList = this.userService.getUsers();
    this.currentUser = this.userService.getCurrentUser();
  }

  changeUser() {
    this.userService.changeUser();
    this.currentUser = this.userService.getCurrentUser();
  }
}
