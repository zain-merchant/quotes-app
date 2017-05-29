import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private navParams: NavParams, private alertCtrl: AlertController, private quotesService: QuotesService){
  	this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote){
  	const alert = this.alertCtrl.create({
  		title: 'Add Quote',
  		subTitle: 'Are you sure?',
  		message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
  	});

    alert.present();
  }


}
