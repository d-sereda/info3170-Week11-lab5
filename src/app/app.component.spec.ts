import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unittest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unittest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'unittest app is running!'
    );
  });

  it('should change theme appearence', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.color).toBe('white');
    expect(app.fontColor).toBe('#333');
    expect(app.theme).toBe('light');

    app.handleChangeTheme();
    expect(app.color).toBe('black');
    expect(app.fontColor).toBe('white');
    expect(app.theme).toBe('dark');

    app.handleChangeTheme();
    expect(app.color).toBe('white');
    expect(app.fontColor).toBe('#333');
    expect(app.theme).toBe('light');
  });
});
