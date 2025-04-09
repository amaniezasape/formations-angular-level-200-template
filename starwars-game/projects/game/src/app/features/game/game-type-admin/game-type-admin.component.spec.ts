import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTypeAdminComponent } from './game-type-admin.component';

describe('GameTypeAdminComponent', () => {
  let component: GameTypeAdminComponent;
  let fixture: ComponentFixture<GameTypeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameTypeAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameTypeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
