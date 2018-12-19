import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FormComponent } from './form.component';
import { ConfigService } from './config.service';

describe('FormComponent', () => {

  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let configService: ConfigService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ FormComponent ]
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
  it('should update bases in component', async(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    configService = fixture.debugElement.componentInstance ;
    const spy = spyOn(component, 'showConfig').and.returnValue(configService.tableData['GBP'].buy);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect (configService.tableData['GBP'].buy).toEqual(0.9500);
    });

  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


