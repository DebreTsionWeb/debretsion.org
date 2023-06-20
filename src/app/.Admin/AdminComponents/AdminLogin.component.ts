import { Component } from '@angular/core';

@Component({
  selector: 'AdminLogin',
  template: `
<AdminHeader></AdminHeader>

<div id='AdminLogin'>
  <div id='AdminLoginContainer'>
    <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" required>
        <input type="password" placeholder="Password" required>
        <input type="submit" value="Login">
      </form>
  </div>
</div>

<AdminFooter></AdminFooter>
    `,
  styles: [`
 #AdminLogin {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90vh;
    }

    #AdminLoginContainer {
      width: 300px;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    #AdminLoginContainer h1 {
      text-align: center;
      color: #152238;
    }

    #AdminLoginContainer input[type="text"],
    #AdminLoginContainer input[type="password"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    #AdminLoginContainer input[type="submit"] {
      width: 100%;
      padding: 10px;
      border: none;
      background-color: #152238;
      color: #ffffff;
      cursor: pointer;
      border-radius: 3px;
    }

    #AdminLoginContainer input[type="submit"]:hover {
      background-color: #0f1829;
    }

    #AdminLoginContainer p {
      text-align: center;
      font-size: 14px;
      color: #777777;
    }
  `]
})

export class AdminLogin {
  title = 'Admin Login  | Debre Tsion';
}
