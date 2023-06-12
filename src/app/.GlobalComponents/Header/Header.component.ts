import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "Header",
    template: `
        <div id="Navbar">
            <div id="NavbarContainer">
                <div id="NavbarImageContainer">
                    <img id="logo" src="assets/logo.png" alt="LogoPicture"/>
                </div>
                <div id="NavbarTextContainer">
                    <i id="bars" class="fa fa-solid fa-bars"></i>
                    <ul id="NavbarListContainer">
                        <li id="Home">
                            <a (click)="navigateTo('/')">Home</a>
                        </li>
                        <li id="About">
                            <a (click)="navigateTo('/About')">About Us</a>
                        </li>
                        <li id="Events">
                            <a (click)="navigateTo('/Events')">Events</a>
                        </li>
                        <li id="Live">
                            <a (click)="navigateTo('/Live')">Live</a>
                        </li>
                        <li id="Gallery">
                            <a (click)="navigateTo('/Gallery')">Gallery</a>
                        </li>
                        <li id="Donate">
                            <a (click)="navigateTo('/Donate')">Donate</a>
                        </li>
                        <li id="Contact">
                            <a (click)="navigateTo('/Contact')">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    styles: [`

       #Navbar{
        display: flex;
        position: sticky;
        width: 100%;
        height: 80px;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        font-family: "Inter", sans-serif;
        /* border: 1px solid red; */
       }

       #NavbarContainer{
        display: flex;
        position: relative;
        width: 95%;
        height: 100%;
        justify-content: space-between;
        /* border: 1px solid blue; */
       }

       #NavbarImageContainer{
        display: flex;
        position: relative;
        width: 75px;
       }

       #logo{
        display: flex;
        position: relative;
        width: 100%;
       }

       #NavbarTextContainer{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 70%;
        /* border: 1px solid green; */
       }

       #NavbarListContainer{
        display: flex;
        position: relative;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
       }

       #NavbarListContainer li a{
        
       }

       #NavbarListContainer li{
        list-style: none;
       }

       #Home{
        
       }
       
       #Home:hover{
         opacity: 0.5;
       }

       #Events{
        
       }

       #Events:hover{
         opacity: 0.5;
       }

       #Live{
        
       }

       #Live:hover{
         opacity: 0.5;
       }

       #About{
        
       }

       #About:hover{
         opacity: 0.5;
       }

       #Gallery{
        
       }

       #Gallery:hover{
         opacity: 0.5;
       }

       #Contact{
        
       }

       #Contact:hover{
         opacity: 0.5;
       }

       #bars{
        display: none; 
       }
       @media (max-width: 700px){

        #bars{
            display: flex;
            position: fixed;
            right: 10%;
            font-size: 38px;
        }

        #NavbarListContainer{
            display: none;
        }
       }

    `]
})
export class HeaderComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }

    
}
