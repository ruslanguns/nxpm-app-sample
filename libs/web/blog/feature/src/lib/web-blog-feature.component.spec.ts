import { ComponentFixture, TestBed } from '@angular/core/testing'
import { WebBlogFeatureComponent } from './web-blog-feature.component'

describe('WebBlogFeatureComponent', () => {
  let component: WebBlogFeatureComponent
  let fixture: ComponentFixture<WebBlogFeatureComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebBlogFeatureComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(WebBlogFeatureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be defined', () => {
    expect(component).toBeTruthy()
  })
})
