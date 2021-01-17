import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

const USERS = gql`
  query Users {
    users {
      id
      username
      city
      posts {
        id
        title
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor(private apollo: Apollo) {}

  getUsers(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: USERS,
    }).valueChanges;
  }
}
