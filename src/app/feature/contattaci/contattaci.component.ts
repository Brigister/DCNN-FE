import { Component, OnInit } from "@angular/core";
import { MessageService } from "src/app/core/dataService/message.service";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-contattaci",
  templateUrl: "./contattaci.component.html",
  styleUrls: ["./contattaci.component.css"],
})
export class ContattaciComponent implements OnInit {
  messageData: FormGroup;

  constructor(private data: MessageService, private fb: FormBuilder) {}

  ngOnInit() {
    this.messageData = this.fb.group({
      nome: ["", [Validators.required]],
      cognome: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      testo: ["", [Validators.required, Validators.max(400)]],
    });
  }

  contact() {
    const formValue = this.messageData.value;
    console.log(formValue);
    this.data.postContact(formValue).subscribe(
      (res) => {
        document.getElementById("response").innerText =
          "Messaggio inviato con successo, ti risponderemo appena possibile";
      },
      (err) => {
        console.log(err);
        document.getElementById("response").innerText = "Messaggio non inviato";
      }
    );
  }

  get nome() {
    return this.messageData.get("nome");
  }
  get cognome() {
    return this.messageData.get("cognome");
  }
  get email() {
    return this.messageData.get("email");
  }
  get testo() {
    return this.messageData.get("testo");
  }
}
