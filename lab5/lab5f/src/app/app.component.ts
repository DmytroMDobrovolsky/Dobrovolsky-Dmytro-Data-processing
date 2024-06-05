import { Component } from '@angular/core';
import { User } from './interfaces/user';
import { Service1Service } from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab5f';
  users: User[] = [];
  filteredUsers: User[] = [];
  showUsers = false;
  searchTerm: string = '';

  constructor(private service: Service1Service) {}

  getRest(): void {
    this.service.getRest().subscribe(
      (rest1) => {
        this.users = rest1._embedded.users;
        this.filteredUsers = [...this.users];
      }
    );
  }

  toggleUsers(): void {
    this.showUsers = !this.showUsers;
    if (this.showUsers) {
      this.getRest(); // Отримайте дані при натисканні на логотип
    }
  }

  searchUser(): void {
    if (this.searchTerm.trim() !== '') {
        this.filteredUsers = this.users.filter(user => 
            user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    } else {
        this.filteredUsers = [];
    }
  }
}
