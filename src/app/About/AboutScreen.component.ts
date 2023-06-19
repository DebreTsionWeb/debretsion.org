import { Component } from '@angular/core';

@Component({
  selector: 'AboutScreen',
  template: `

    <Header></Header>
    <AboutBody></AboutBody>
    <Footer></Footer>

    `,
  styles: [`

  `]
})

export class AboutScreen {
  title = 'About Us | Debre Tsion';
}
