import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarToggleService } from './services/sidebar-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DistillationServiceFrontend';
  
  @ViewChild(MatSidenav)
  private sideNaveRef!: MatSidenav;

  constructor(
    private sidebarToggleService: SidebarToggleService
  ){

  }
  ngOnInit(): void {
    this.sidebarToggleService.getToggleSidebarSubject()
    .subscribe(
      (next: any)=>{this.sideNaveRef.toggle()}
    )
  }
}
