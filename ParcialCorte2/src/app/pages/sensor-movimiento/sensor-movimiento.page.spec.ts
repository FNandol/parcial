import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SensorMovimientoPage } from './sensor-movimiento.page';

describe('SensorMovimientoPage', () => {
  let component: SensorMovimientoPage;
  let fixture: ComponentFixture<SensorMovimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorMovimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SensorMovimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
