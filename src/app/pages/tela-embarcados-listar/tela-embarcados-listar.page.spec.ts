import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaEmbarcadosListarPage } from './tela-embarcados-listar.page';

describe('TelaEmbarcadosListarPage', () => {
  let component: TelaEmbarcadosListarPage;
  let fixture: ComponentFixture<TelaEmbarcadosListarPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaEmbarcadosListarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaEmbarcadosListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
