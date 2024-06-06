import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { Service1Service } from '../services/service1.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user-crud-menu',
  templateUrl: './user-crud-menu.component.html',
  styleUrls: ['./user-crud-menu.component.scss']
})
export class UserCrudMenuComponent implements OnInit {
  @Input() user!: User;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  constructor(private service: Service1Service) {}

  ngOnInit(): void {}

  closeMenu() {
    this.close.emit();
  }

  saveUser() {
    if (this.user) {
      if (this.user._links) {
        this.service.updateUser(this.user).subscribe(() => {
          this.closeMenu();
        });
      } else {
        this.service.createUser(this.user).subscribe(() => {
          this.closeMenu();
        });
      }
    }
  }

  deleteUser() {
    if (this.user._links) {
      this.service.deleteUser(this.user._links.self.href).subscribe(() => {
        this.closeMenu();
      });
    }
  }
}
