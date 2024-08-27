import {provideRouter, Routes} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginComponent} from "./components/login/login.component";
import {EnvironmentProviders} from "@angular/core";
import {CustomersComponent} from "./components/customers/customers.component";
import {VehiclesComponent} from "./components/vehicles/vehicles.component";
import {ShowVehicleComponent} from "./components/vehicles/show-vehicle/show-vehicle.component";

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'vehicles', component: VehiclesComponent },
    { path: 'vehicle/{:id}', component: ShowVehicleComponent },
];
export const routing: EnvironmentProviders = provideRouter(routes);
