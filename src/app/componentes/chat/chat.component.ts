import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public name: string;
  constructor(private navparams: NavParams, private modal: ModalController) { }

  ngOnInit() {

    this.name = this.navparams.get('name')
  }


  closeChat() {
    this.modal.dismiss()
  }
}
