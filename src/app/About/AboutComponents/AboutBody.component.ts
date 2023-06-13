import { Component, OnInit } from "@angular/core";

@Component({
    selector: "AboutBody",
    template: `
        <div id="AboutBody">
            <div id="AboutBodyContainer">
                <div id="AboutBodyHeaderContainer">
                    <h1>About</h1>
                <div id="AboutBodyTextContainer">
                    <p>This is the about paragraph for the church</p>
                </div>
                </div>
            </div>
        </div>

    `,
    styles: [`

    `]
})
export class AboutBody implements OnInit{
    constructor() {}
    ngOnInit() {}
}
