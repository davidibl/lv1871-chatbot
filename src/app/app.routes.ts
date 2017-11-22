import { ChatComponent } from './components/chat/chat';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { StartComponent } from './components/start/start';
import { NotfoundComponent } from './components/lv-notfound/notfound';
import { PersoenlichComponent } from './components/persoenlich/persoenlich';
import { VertraegeComponent } from './components/vertraege/vertraege';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'start' },
    { component: StartComponent, path: 'start'},
    { component: VertraegeComponent, path: 'vertraege'},
    { component: PersoenlichComponent, path: 'persoenlich'},
    { component: NotfoundComponent, path: 'notfound' },
    { component: ChatComponent, path: 'chat' },
    { path: '**', redirectTo: 'notfound' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
