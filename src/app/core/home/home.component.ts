import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHinted = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isHinted = true;
    setTimeout(() => {
      this.router.navigate(['/districts'])
    }, 3000);
  }

}
