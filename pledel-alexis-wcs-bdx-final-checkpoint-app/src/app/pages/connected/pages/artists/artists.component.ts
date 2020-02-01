import { UserService } from './../../../../shared/services/user.service';
import { Artist } from './../../../../shared/models/artist';
import { ArtistService } from './../../../../shared/services/artist.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  constructor(private artistService: ArtistService,
              private userService: UserService) { }

  @Input() user: User;

  tabAllArtists: Artist[];

  ngOnInit() {
    this.user = this.userService.user;

    this.artistService.getAll()
    .subscribe((tabArtists) => {
      console.log(tabArtists);
      this.tabAllArtists = tabArtists;
    });
  }

}
