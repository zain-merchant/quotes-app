import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.service';
import { QuotePage } from '../quote/quote';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quotesService: QuotesService, private modalCtrl: ModalController){

  }

  ionViewWillEnter(){
  	this.quotesService.getFavoriteQuotes();
  }


  onViewQuote(quote: Quote){
  	const modal = this.modalCtrl.create(QuotePage);
  	modal.present();
  }

}
