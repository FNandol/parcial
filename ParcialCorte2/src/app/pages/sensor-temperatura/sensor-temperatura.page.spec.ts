import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SensorTemperaturaPage } from './sensor-temperatura.page';

describe('SensorTemperaturaPage', () => {
  let component: SensorTemperaturaPage;
  let fixture: ComponentFixture<SensorTemperaturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorTemperaturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SensorTemperaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
