import { Component } from '@angular/core';

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