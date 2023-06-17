import { Component } from '@angular/core';

@Component({
  selector: 'HomeScreen',
  template: `
<Header></Header>
<HomeBody></HomeBody>
<Footer></Footer>
    `,
  styles: [`

  `]
})

export class HomeScreen {
  title = 'Home | Debre Tsion';
}
