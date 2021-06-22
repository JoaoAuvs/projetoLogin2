import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RecuperacaoDeSenhaPage } from './recuperacao-de-senha.page';

describe('RecuperacaoDeSenhaPage', () => {
  let component: RecuperacaoDeSenhaPage;
  let fixture: ComponentFixture<RecuperacaoDeSenhaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperacaoDeSenhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperacaoDeSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});