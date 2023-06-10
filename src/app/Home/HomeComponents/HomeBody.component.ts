import { Component, OnInit } from "@angular/core";

@Component({
    selector: "HomeBody",
    template: `
        <div id="HomeBody">
            <div id="HomeBodyContainer">
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
export class HomeBody implements OnInit{
    constructor() {}
    ngOnInit() {}
}