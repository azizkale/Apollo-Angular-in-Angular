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
const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
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

  getUser(id: any): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: USER,
      variables: {
        id: id,
      },
    }).valueChanges;
  }
}
