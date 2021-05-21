import {Routes} from "@angular/router";
import {WelcomeComponent} from './welcome/welcome.component';
import {FreshComponent} from './fresh/fresh.component';
import {TheBestComponent} from './the-best/the-best.component';
import {HotterComponent} from './hotter/hotter.component';

export const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'fresh', component: FreshComponent},
  {path: 'the-best', component: TheBestComponent},
  {path: 'hotter', component: HotterComponent},
];
