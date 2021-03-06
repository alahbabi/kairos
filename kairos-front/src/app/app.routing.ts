﻿import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './_components/user';
import { LoginComponent } from './_components/login';
import { RegisterComponent } from './_components/register';
import { AuthGuard } from './shared/_helpers';
import { UserDetailComponent } from './_components/user-detail';

const routes: Routes = [
    { path: '', component: UserComponent, canActivate: [AuthGuard], 
        children: [
            { path: 'user-detail', component: UserDetailComponent},
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes, { useHash: true });