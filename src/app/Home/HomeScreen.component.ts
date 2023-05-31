import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'HomeScreen',
  template: `

    <Header></Header>

    <Footer></Footer>


    `,
  styleUrls: ['../app.component.css']
})

export class HomeScreen {
  title = 'Home | Debre Tsion';
}