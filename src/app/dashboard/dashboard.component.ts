import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

function ordenatop(a : Hero, b : Hero){
  if(a.count < b.count){
    return 1;
  }
  else if(b.count < a.count){
    return -1;
  }
  else{
    return 0;
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes) => {
        this.heroes = heroes.sort(ordenatop).slice(0, 4)
      }
      );
  }
}
