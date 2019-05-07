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
    MatDialogModule
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
      MatDialogModule 
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
      MatDialogModule
      ]
  })
  
  export class MaterialModule {
  
  }