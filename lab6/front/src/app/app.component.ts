import { Component } from '@angular/core';
import { User } from './interfaces/user';
import { Service1Service } from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'front';
  users: User[] = [];
  filteredUsers: User[] = [];
  showUsers = false;
  searchTerm: string = '';
  selectedUser: User | null = null;
  isCrudMenuOpen = false;

  constructor(private service: Service1Service) {}

  getRest(): void {
    this.service.getRest().subscribe(
      (response) => {
        this.users = response._embedded.users;
        this.filteredUsers = [...this.users];
      }
    );
  }

  toggleUsers(): void {
    this.showUsers = !this.showUsers;
    if (this.showUsers) {
      this.getRest();
    }
  }
  

  searchUser(): void {
    this.filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  selectUser(user: User): void {
    this.selectedUser = user;
    this.isCrudMenuOpen = true;
  }

  createUser(): void {
    this.selectedUser = { id: 0, name: '', producer: '', imageUrl: '', generation: 0, _links: undefined};
    this.isCrudMenuOpen = true;
    
  }
  
  closeCreateUser(): void {
    this.isCrudMenuOpen = false;
    this.selectedUser = null;
  }
  toggleUserMenu(): void {
    if (this.isCrudMenuOpen) {
      this.closeCreateUser();
    } else {
      this.createUser();
    }
  }
  

  closeCrudMenu(): void {
    this.isCrudMenuOpen = false;
    this.selectedUser = null;
    this.getRest();
  }
  
  
  
}
