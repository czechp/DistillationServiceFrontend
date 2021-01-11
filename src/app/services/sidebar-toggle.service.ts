import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarToggleService {
  private toggleSidebarSubject = new Subject();

  constructor() {}

  public getToggleSidebarSubject() {
    return this.toggleSidebarSubject;
  }

  public toggleSidebar(){
      this.toggleSidebarSubject.next();
  }
}
