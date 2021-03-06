import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { User } from '../_models/user';
import { UserForRegistrationDto } from '../_models/user/userForRegistrationDto.model';
import { AccountService } from '../_services/account.service';

@Directive({
  selector: '[appHasRole]' // *appHasRole='["Admin/Installer/Customer"]'
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[];
  user: UserForRegistrationDto; // was User

  constructor(private viewContainerRef: ViewContainerRef, 
    private templateRef: TemplateRef<any>,
    private accountService: AccountService, private router: Router) {
      this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
        this.user = user;
      })
     }
  ngOnInit(): void {
    // clear view if no roles
    if (!this.user?.roles || this.user == null) {
      this.viewContainerRef.clear();
      return;
    }

    if (this.user?.roles.some(r => this.appHasRole.includes(r))) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.router.navigate(['']);

    } else {
      this.viewContainerRef.clear();
    }
  }

}
