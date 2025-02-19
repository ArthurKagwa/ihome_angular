import { Component } from '@angular/core';
import { ChatbotService } from '../../services/chatbot.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

  message = '';
  response = '';

  constructor(private chatbotService: ChatbotService) {
  }

  // toggling chatbot
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }
  isChatOpen=false;


  sendMessage() {
    this.chatbotService.sendMessage(this.message).subscribe({
      next: (data) => {
        this.response = data;
        console.log('response', data);
      },
      error: (error) => {
        console.error('Error ', error);
      }
    });
  }

}
