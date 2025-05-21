import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MyNpmLinkLibComponent } from './my-npm-link-lib.component'

describe('MyNpmLinkLibComponent', () => {
  let component: MyNpmLinkLibComponent
  let fixture: ComponentFixture<MyNpmLinkLibComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNpmLinkLibComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(MyNpmLinkLibComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
