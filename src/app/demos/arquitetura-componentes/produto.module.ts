import { ProdutoRoutingModule } from './produto.route';
import { CommonModule } from '@angular/common';
import { ProdutosDashboardComponent } from './produtos-dashboard/produtos-dashboard.component';
import { NgModule } from "@angular/core";



@NgModule({
    declarations:[
        ProdutosDashboardComponent
    ],
    imports:[
        CommonModule,
        ProdutoRoutingModule
    ],
    exports:[

    ]
})
export class ProdutoModule{};