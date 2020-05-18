string-interpolation.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'string-interp',
  templateUrl: './string-interpolation.component.html'
})
export class StringInterpolationComponent {
  title = 'my-first-app';  
  serverID: number = 10;  
  serverStatus: string = 'Online';  
  fullName: string = 'Robert Junior';  

  isDisabled: boolean = true;  
}

string-interpolation.component.html

<p>Server with ID {{serverID}} is {{serverStatus}}. </p>  
<h1>{{ fullName }}</h1>  
<h1 [innerHtml]='fullName'></h1>  
<button disabled='{{isDisabled}}'>Disable Me</button>  
