import { TestBed } from '@angular/core/testing'
import { MyNpmLinkLibService } from './my-npm-link-lib.service'

describe('MyNpmLinkLibService', () => {
  let service: MyNpmLinkLibService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(MyNpmLinkLibService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
