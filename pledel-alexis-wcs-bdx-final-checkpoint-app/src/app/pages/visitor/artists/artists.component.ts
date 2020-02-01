import { ArtistService } from './../../../shared/services/artist.service';
import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/shared/models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  constructor(private artistService: ArtistService) { }

  tabAllArtists: Artist[];

  ngOnInit() {
    this.artistService.getAll()
    .subscribe((tabArtists) => {
      console.log(tabArtists);
      this.tabAllArtists = tabArtists;
    });
  }

}
