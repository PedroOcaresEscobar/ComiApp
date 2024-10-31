import { Component, OnInit } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.scss'],
  standalone: true,
  imports:[FormsModule, InputTextModule, FloatLabelModule]
})
export class UsernameInputComponent  implements OnInit {
  value: string | undefined;
  constructor() { }

  ngOnInit() {}

}
