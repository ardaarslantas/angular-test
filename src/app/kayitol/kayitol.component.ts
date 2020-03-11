import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


class UserModel {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-kayitol',
  templateUrl: './kayitol.component.html',
  styleUrls: ['./kayitol.component.css']
})
export class KayitolComponent implements OnInit {
  username: string;
  password2: string;
  fname: string;
  sname: string;
  uname: string;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  KayitOl() {
    const user: UserModel = {
      firstName: this.fname,
      lastName: this.sname,
      password: this.password2,
      username: this.uname,
    };
    this.http.post('http://localhost:3000/users', user).subscribe((data: UserModel[]) => {
      console.log('POST Request is successful ', data);
    }, error => {
      console.log('Error', error);
    })
    if (this.password2 && this.fname && this.sname && this.uname) {
      alert('Kayıt Başarılı')
      
    } else {
      alert('Zorunlu alanları doldurunuz.')
      
    }
  }
}
