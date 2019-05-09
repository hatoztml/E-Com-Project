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
    MatProgressSpinnerModule,
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
      MatTabsModule,
      MatProgressSpinnerModule 
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
      MatTabsModule,
      MatProgressSpinnerModule
      ]
  })
  
  export class MaterialModule {
  
  }