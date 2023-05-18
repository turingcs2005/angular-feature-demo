import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBindingListenerComponent } from './host-binding-listener.component';

describe('HostBindingListenerComponent', () => {
  let component: HostBindingListenerComponent;
  let fixture: ComponentFixture<HostBindingListenerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostBindingListenerComponent]
    });
    fixture = TestBed.createComponent(HostBindingListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
