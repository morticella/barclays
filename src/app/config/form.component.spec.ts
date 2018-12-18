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
    console.log(component.getRates.get('bases').value);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


