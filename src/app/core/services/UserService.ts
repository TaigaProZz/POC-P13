import { Injectable } from '@angular/core';
import { User } from '../models/User';
import userListJson from "../../../assets/datas/userList.json"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersList: User[] = userListJson;

  private currentUser: User = this.usersList[0];

  constructor() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUser = JSON.parse(savedUser);
    } else {
      this.saveCurrentUser();
    }
  }

  getUsers(): User[] {
    return this.usersList;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  changeUser(): void {
    const nextUser = this.usersList.find(u => u.id !== this.currentUser.id);
    if (nextUser) {
      this.currentUser = nextUser;
      this.saveCurrentUser();
    }
  }

  private saveCurrentUser(): void {
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }
}
