import { Routes } from '@angular/router';
import {ChatComponent} from "./chat/chat.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
];
