import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('App', () => {
    let de: DebugElement;
    let comp: AppComponent;
    let el: HTMLElement
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            // providers: [ {provide: ComponentFixtureAutoDetect, useValue: true}],
            imports: [RouterTestingModule]
        });

        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('should work', () => {
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
        comp.title = 'Test title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test title');
    });
});
