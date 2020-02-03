import { Photo } from './../../../../shared/models/photo';
import { User } from './../../../../shared/models/user';
import { UserService } from './../../../../shared/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from 'src/app/shared/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private photoService: PhotoService,
              private userService: UserService) { }

  @Input() user: User;

  tabAllPhoto: Photo[];

  ngOnInit() {
    this.user = this.userService.user;

    this.photoService.getAll()
      .subscribe((tabPhotos) => {
        console.log(tabPhotos);
        this.tabAllPhoto = tabPhotos;
      });
    console.log(this.tabAllPhoto);
  }

  deletePhoto(id) {
    console.log(id);
    this.photoService.delete(id).subscribe(() => console.log('delete ok'));
    // this.snackBarService.openSnackBar(`L'utilisateur ${this.user.firstName}  a été supprimé.`);
  }

}
