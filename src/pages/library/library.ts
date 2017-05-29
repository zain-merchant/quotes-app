import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuotesPage } from '../quotes/quotes';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';


@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  //square brackets imply array full of these quotes
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage: any;

  constructor(private navCtrl: NavController){
  	this.quotesPage = QuotesPage;
  }

  ngOnInit(){
  	this.quoteCollection = quotes;
  }
}
