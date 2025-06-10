import { Component } from '@angular/core';

import Talk from 'talkjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  template: `
    <div id="talkjs-container" style="height: 600px">Loading chats...</div>
  `,
  styles: '',
})
export class ChatComponent {
  constructor() {
    Talk.ready.then((): void => {
      const session = new Talk.Session({
        appId: 't102gEU2',
        userId: 'sample_user_alice',
      });

      const chatbox = session.createChatbox();
      chatbox.select('sample_conversation');
      chatbox.mount(document.getElementById('talkjs-container'));
    });
  }
}
