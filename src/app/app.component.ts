import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `


    <Header></Header>
    <router-outlet></router-outlet>
    <Footer></Footer>


    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DebreTsionWebsite';
}
