import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialThemeComponent } from './material-theme.component';

describe('MaterialThemeComponent', () => {
  let component: MaterialThemeComponent;
  let fixture: ComponentFixture<MaterialThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialThemeComponent]
    });
    fixture = TestBed.createComponent(MaterialThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
