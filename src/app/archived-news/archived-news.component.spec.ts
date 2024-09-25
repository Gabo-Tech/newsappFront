import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedNewsComponent } from './archived-news.component';

describe('ArchivedNewsComponent', () => {
  let component: ArchivedNewsComponent;
  let fixture: ComponentFixture<ArchivedNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivedNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
