import {Routes} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginComponent} from "./components/login/login.component";
import {CustomersComponent} from "./components/customers/customers.component";
import {VehiclesComponent} from "./components/vehicles/vehicles.component";
import {NewVehicleComponent} from "./components/vehicles/new-vehicle/new-vehicle.component";
import {ShowVehicleComponent} from "./components/vehicles/show-vehicle/show-vehicle.component";
import {EditVehicleComponent} from "./components/vehicles/edit-vehicle/edit-vehicle.component";
import { ShowCustomerComponent } from './components/customers/show-customer/show-customer.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';

export let routes: Routes;
routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'customers', component: CustomersComponent},
    {path: 'customer/:id', component: ShowCustomerComponent},
    {path: 'customer/:id/edit', component: EditCustomerComponent},
    {path: 'vehicles', component: VehiclesComponent},
    {path: 'vehicle/new', component: NewVehicleComponent},
    {path: 'vehicle/:id', component: ShowVehicleComponent},
    {path: 'vehicle/:id/edit', component: EditVehicleComponent},
];