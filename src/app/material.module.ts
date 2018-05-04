// This module imports all the required angular-material modules and exports them to app.module to reduce the data on it.
import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { 
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule, 
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,MatSnackBarModule, MatGridListModule,
    MatTableModule,
    MatButtonToggleModule
} from '@angular/material';//Importing Angular material modules
@NgModule({
    imports:[
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,MatTableModule,MatSnackBarModule,
        MatInputModule, MatGridListModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,MatIconModule,
        MatProgressSpinnerModule,
        MatDialogModule,MatButtonModule,MatButtonToggleModule,MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,MatTableModule,
        MatIconModule,MatGridListModule,
        MatInputModule,MatButtonModule,
        MatFormFieldModule,MatButtonToggleModule,
        MatDatepickerModule,MatIconModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,MatIconModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule
    ]
})
export class MaterialModule {}