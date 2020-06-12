import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'abe-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})

export class HeaderComponent implements OnInit {
 showHistoryLink:boolean;

  constructor(private router:Router) { 
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.showHistoryLink = !e.url.startsWith('/workout');
      })
  }

  ngOnInit(): void {
  }

}
