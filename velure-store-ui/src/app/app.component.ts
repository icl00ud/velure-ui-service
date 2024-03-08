import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
    ]
})
export class AppComponent {
  isCollapsed = false;
}
