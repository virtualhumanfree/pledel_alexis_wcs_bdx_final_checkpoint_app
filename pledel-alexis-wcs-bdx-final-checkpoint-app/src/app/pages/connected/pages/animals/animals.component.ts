import { UserService } from './../../../../shared/services/user.service';
import { Animal } from './../../../../shared/models/animal';
import { AnimalService } from './../../../../shared/services/animal.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  constructor(private animalService: AnimalService,
              private userService: UserService) { }

  @Input() user: User;

  tabAllAnimals: Animal[];

  ngOnInit() {
    this.user = this.userService.user;

    this.animalService.getAll()
      .subscribe((tabAnimals) => {
        this.tabAllAnimals = tabAnimals;
      });
    console.log(this.tabAllAnimals);
  }

  deleteAnimal(id) {
    console.log(id);
    this.animalService.delete(id).subscribe(() => console.log('delete ok'));
    // this.snackBarService.openSnackBar(`L'utilisateur ${this.user.firstName}  a été supprimé.`);
  }

}
