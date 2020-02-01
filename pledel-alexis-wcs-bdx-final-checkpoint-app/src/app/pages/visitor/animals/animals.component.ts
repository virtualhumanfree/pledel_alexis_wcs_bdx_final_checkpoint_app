import { AnimalService } from './../../../shared/services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/models/animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  tabAllAnimals: Animal[];

  ngOnInit() {
    this.animalService.getAll()
    .subscribe((tabAnimals) => {
      this.tabAllAnimals = tabAnimals;
    });
    console.log(this.tabAllAnimals);
  }

}
