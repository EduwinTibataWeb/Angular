import {Entry, createClient} from 'contentful';
import { Observable, from} from 'rxjs';

import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

const CONFIG = {
  space: 'r2vroq9t3xq6',
  accessToken: 'ax-QiEfk2pv5dFim31bflfn2O6kHnAmAi8JXP0G0aok',
  contentTypeIds: {
    blog: 'aliados'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  })
  constructor(){}

  getPosts(query?: object): Observable<Entry<any>[]> {
    return from(this.cdaClient.getEntries({
        content_type: CONFIG.contentTypeIds.blog
    })).pipe(map(posts=> posts.items))
  }
  getPost(id: string): Observable<Entry<any>> {
    return from(this.cdaClient.getEntry(id))
  }
}