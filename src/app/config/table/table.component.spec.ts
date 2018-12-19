import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormComponent } from './form.component';
import { ConfigService } from './config.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let configService: ConfigService;
  const config = {
    'base': 'GBP',
    'date': '2018-10-28',
    'rates': 1
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,

      ],
      declarations: [ FormComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should update bases in component', () => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    configService = fixture.debugElement.injector.get(ConfigService) ;
    expect (configService.tableData).toEqual(component.bases);

  });
  it('check - 5%', async(() => {
    fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    configService.tableData[0].buy = config.rates - (config.rates / 100 * 5);
    expect (configService.tableData[0].buy).toEqual(0.95);

  }));

  it('check + 5%', async(() => {
    fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    configService.tableData[0].sell = config.rates + (config.rates / 100 * 5);
    expect (configService.tableData[0].sell).toEqual(1.05);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
