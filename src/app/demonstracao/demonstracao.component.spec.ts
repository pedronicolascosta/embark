import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstracaoComponent } from './demonstracao.component';

describe('DemonstracaoComponent', () => {
  let component: DemonstracaoComponent;
  let fixture: ComponentFixture<DemonstracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonstracaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemonstracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
