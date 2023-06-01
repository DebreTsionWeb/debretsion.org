import { Component, OnInit } from "@angular/core";

@Component({
    selector: "VisitUsBody",
    template: `
        <div id="VisitUsBody">
            <div id="VisitUsBodyContainer">
                <div id="AddressContainer">
                    <p id="Address">22222 Gerogia Ave,<br>Brookeville, MD 20833</p>
                </div>
                <div id="ImageContainer">
                    <img src="/" alt="DebreTsionImage"/>
                </div>
            </div>
        </div>

    `,
    styles: [`

    `]
})
export class VisitUsBody implements OnInit{
    constructor() {}
    ngOnInit() {}
}
