import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SensorLuzPage } from './sensor-luz.page';

describe('SensorLuzPage', () => {
  let component: SensorLuzPage;
  let fixture: ComponentFixture<SensorLuzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorLuzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SensorLuzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
