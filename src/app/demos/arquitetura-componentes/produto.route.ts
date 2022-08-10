import { ProdutosDashboardComponent } from './produtos-dashboard/produtos-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const produtoRouterConfig: Routes = [
    {path: '', component: ProdutosDashboardComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class ProdutoRoutingModule{};