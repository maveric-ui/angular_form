import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComponent } from './components/mail/mail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MailComponent],
  declarations: [MailComponent]
})
export class MailModule { }
