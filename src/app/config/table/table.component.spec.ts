import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TableComponent } from './table.component';
import { ConfigService, Config } from '../config.service';

describe('FormComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let configService: ConfigService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,

      ],
      declarations: [ TableComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should update bases in component', () => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    configService = fixture.debugElement.injector.get(ConfigService) ;
    expect (configService.tableData).toEqual(component.bases);
  });

  it('should order A-Z', () => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    configService = fixture.debugElement.injector.get(ConfigService) ;
    component.bases.sort((a, b) => a.curr.localeCompare(b.curr));
    expect (component.bases[0].curr).toEqual('AUD');
    component.bases.reverse();
    expect (component.bases[0].curr).toEqual('USD');
  });

  it('should order Z-A', () => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    configService = fixture.debugElement.injector.get(ConfigService) ;
    component.bases.sort((a, b) => a.curr.localeCompare(b.curr));
    component.bases.reverse();
    expect (component.bases[0].curr).toEqual('USD');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
