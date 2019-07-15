
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos  } from 'src/app/repos';

@Injectable()
export class ProfileService {
  private username: string;
  private inform = '0fd865f08a061ae03d81552e6a377a39fd0944ba 
  ';
  private repos: string;



  constructor(private profile: HttpClient) {
    console.log();
    this.username = 'cossie14';

  }
  getprofileInfo(username) {
    return this.profile.get('https://api.github.com/users/' + username + '?access_token=' + this.inform);
  }
  getprofileRepos(username) {
    return this.profile.get('https://api.github.com/users/' + username + '/repos' + '?access_token=' + this.inform);
  }
  updateInformation(username: string) {
    this.username = username;
  }
}
