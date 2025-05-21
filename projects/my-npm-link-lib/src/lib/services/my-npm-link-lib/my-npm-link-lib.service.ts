import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class MyNpmLinkLibService {
  // noinspection JSUnusedGlobalSymbols
  hello(msg: string) {
    console.log('hello from MyNpmLinkLibService', msg)
  }
}
