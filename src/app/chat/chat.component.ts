import { Component, OnInit } from '@angular/core';

import Talk from 'talkjs';
import {User} from "../core/models/User";
import {RouterLink} from "@angular/router";
import {UserService} from "../core/services/UserService";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: 'chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  currentUser!: User;

  ngOnInit() {
    const savedUser = localStorage.getItem('currentUser');

    if (savedUser) {
      this.currentUser = JSON.parse(savedUser);
    }

    this.talkJsInit()
  }

  constructor(private userService: UserService) {}

  changeUser() {
    this.userService.changeUser();
    this.currentUser = this.userService.getCurrentUser();

    this.talkJsInit()
  }

  talkJsInit() {
    Talk.ready.then((): void => {
      const session = new Talk.Session({
        appId: 't102gEU2',
        userId: this.currentUser?.userId,
      });

      const chatbox = session.createChatbox();
      chatbox.select('sample_conversation');
      chatbox.mount(document.getElementById('talkjs-container'));
    });
  }
}
