import { Component, OnInit } from '@angular/core';
import { SidebarToggleService } from 'src/app/services/sidebar-toggle.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css'],
})
export class TopNavbarComponent implements OnInit {
  constructor(public sidebarToggle: SidebarToggleService) {}

  ngOnInit(): void {}
}
