import { Component, OnInit, inject } from "@angular/core";
import { Firestore, collectionData, collection, query } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Observable } from "rxjs";
import { orderBy } from "firebase/firestore";

interface AdminMembers {
  FirstName: string;
  LastName: string;
  Kristina: string;
  Email: string;
  Phone: string;
  Date: string;
}

@Component({
  selector: 'AdminMember',
  template: `


    <div id='AuthContainer'>
        <ng-container *ngIf="login === true">
          <AdminLogin></AdminLogin>
        </ng-container>

        <ng-container *ngIf="loggedIn === true">
          <AdminHeader></AdminHeader>
          <div id="AdminMember">
            <div id="AdminMemberContainer">

            <table id='MemberTable'>
              <thead id='MemberTableColumns'>
                <tr id='ColumnContainer'>
                  <th id='FirstColumn'>First Name</th>
                  <th id='Column'>Last Name</th>
                  <th id='Column'>Kristina</th>
                  <th id='Column'>Email</th>
                  <th id='Column'>Phone</th>
                </tr>
              </thead>
              <tbody id='MemberTableRows'>
                <tr id='RowsContainer' *ngFor="let member of Members$ | async">
                  <td id='FirstRow'>{{ member.FirstName }}</td>
                  <td id='Row'>{{ member.LastName }}</td>
                  <td id='Row'>{{ member.Kristina }}</td>
                  <td id='Row'>{{ member.Email }}</td>
                  <td id='Row'>{{ member.Phone }}</td>
                </tr>
              </tbody>
            </table>

            </div>
          </div>
          <AdminFooter></AdminFooter>
        </ng-container>

      </div>



    `,
  styles: [`
    #AuthContainer {
      display: flex;
      position: relative;
      width: 100vw;
      height: 100vh;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    #AdminMember {
      display: flex;
      position: relative;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    #AdminMemberContainer {
      display: flex;
      position: relative;
      width: 99%;
      height: 99%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      overflow: scroll;
    }
    #AdminMemberContainer::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
      background-color: white;
    }
    #AdminMemberContainer::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 1% / 90%;
    }
    #MemberTable {

    }
    #MemberTableColumns {

    }
    #ColumnContainer {

    }
    #Column {
      border-right: 1px solid black;
    }
    #MemberTableRows {

    }
    #RowsContainer {

    }
    #Row {
      border-right: 1px solid black;
      border-top: 1px solid black;
    }
    #FirstColumn {
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
    #FirstRow {
      border-left: 1px solid black;
      border-top: 1px solid black;
      border-right: 1px solid black;
    }
  `]
})

export class AdminMember implements OnInit {

  FirstName: string = "";
  LastName: string = "";
  Kristina: string = "";
  Email: string = "";
  Phone: string = "";

  Members$: Observable<AdminMembers[]>;
  firestore: Firestore = inject(Firestore);


  login: boolean = true;
  loggedIn: boolean = false;
  Name: string = "";
  Password: string = "";

  constructor(private afAuth: Auth) {
    const MemberCollection = collection(this.firestore, 'Members');
    const MemberQuerySnapshot = collectionData(query(MemberCollection, orderBy('Date', 'desc')));
    this.Members$ = MemberQuerySnapshot as Observable<AdminMembers[]>;
  }

  ngOnInit() {this.isloggedIn();}

  isloggedIn() {
    const token = localStorage.getItem("admin");

    if (token) {
      this.Name = JSON.parse(localStorage.getItem("admin")!)['Name'];
      this.Password = JSON.parse(localStorage.getItem("admin")!)['Password'];
      this.loggedIn = true;
      this.login = false;
      console.log("logged in");
    } else {
      this.loggedIn = false;
    }
  }

  logOut() {
    this.afAuth.signOut();
    localStorage.removeItem("admin");
    localStorage.removeItem("loggedIn");
    this.loggedIn = false;
    this.login = true;
  }
}
