import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';

class UserModel {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {
  username: string;
  password: string;
  fname: string;
  sname: string;
  uname: string;


  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }


  // login() {
  //   alert('arda username ve password ü oku'); Yapıldı.
  //   alert('sonra apiden tüm userları çek'); yapıldı.
  //   alert('api den kullanıcıları çekmek için axios isimli paketi kullan'); Yapıldı
  //   alert('sonra çektiğin data içerisinde giriş yapmaya çalışan kullanıcının username ve passwordüne sahip kullaıcı var mı bak');
  // }
  GirisYap() {
    //     console.log('Kullanıcı Adı:' + ' ' + this.username);
    //     console.log('şifre: ' + ' ' + this.password);

    // axios.default.get('http://localhost:3000/users').then((data) => {
    //   console.log('data', data);
    // })
    if(this.username && this.password)  { //if username ve password doluysa
      this.http.get('http://localhost:3000/users').subscribe((users: UserModel[]) => {
        console.log('users', users);
        var user = users.find(x => x.username === this.username && x.password == this.password);
        console.log('USER', user);
  
        if (user) {
          alert('giriş yapıldı')
        } else {
          alert('Kullanıcı Adı veya Şifre Yanlış')
        }
      })
    } else {
      alert('Zorunlu alanları doldurunuz');
    }

  }

}