import { Component, OnInit, VERSION } from '@angular/core';
import {User} from '../user';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  user : User;
  ngOnInit():void{
      this.user = {name:"adulla", id:10};
  }
}
