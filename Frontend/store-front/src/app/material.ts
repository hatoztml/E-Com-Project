import { 
    MatButtonModule, 
    MatCheckboxModule, 
    MatToolbarModule, 
    MatGridListModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
   } from '@angular/material';
  import { NgModule } from '@angular/core';
  
  
  
  @NgModule({
    imports: [ 
      MatButtonModule, 
      MatCheckboxModule, 
      MatToolbarModule, 
      MatGridListModule, 
      MatInputModule, 
      MatFormFieldModule,
      MatOptionModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatListModule,
      MatDialogModule,
      MatTabsModule 
    ],
    exports: [ 
      MatButtonModule, 
      MatCheckboxModule, 
      MatToolbarModule, 
      MatGridListModule, 
      MatInputModule, 
      MatFormFieldModule,
      MatOptionModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatListModule,
      MatDialogModule,
      MatTabsModule
      ]
  })
  
  export class MaterialModule {
  
  }