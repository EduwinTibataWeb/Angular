import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { WorkComponent } from './components/work/work.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'Inicio', component: IndexComponent},
    {path: 'Nuestro_Trabajo', component: WorkComponent},
    {path: 'Experiencias', component: ExperiencesComponent},
    {path: 'Recursos', component: ResourcesComponent},
    {path: 'Contactanos', component: ContactComponent},
    {path: '**', component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);