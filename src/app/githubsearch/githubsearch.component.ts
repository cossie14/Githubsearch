import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile: any;
  repos: any;
  username: string;


  constructor(private profileService: ProfileService) { }
  ngOnInit() {
  }

  findUser(username: string) {
    // this.profileService.updateInformation(this.username);
    this.profileService.getprofileInfo(username).subscribe(profile => {
      console.log(profile);
      console.log('username: ' + username);
      this.profile = profile;
    });

    this.profileService.getprofileRepos(username).subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
}

