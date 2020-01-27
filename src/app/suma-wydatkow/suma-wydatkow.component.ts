import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wydatek, KATEGORIE } from '../wydatek';
import { WydatkiService } from '../wydatki.service';
@Component({
  selector: 'app-suma-wydatkow',
  templateUrl: './suma-wydatkow.component.html',
  styleUrls: ['./suma-wydatkow.component.css']
})
export class SumaWydatkowComponent implements OnInit {
 wydatki: Wydatek[];
  constructor(private wydatkiService: WydatkiService) { }
  public wydatki2;
  ngOnInit() {
    this.wydatki = this.wydatkiService.getWydatki();
   this.wydatki2 = this.getWydatkiByCurrentMonth();
  }
getSum(): number {
    let sum = 0;
    for (let i = 0; i < this.wydatki.length; i++) {
      sum += this.wydatki[i].kwota;
    }
    return sum;
  }
getSumByCategory(category): number {
    let sum = 0;
    for (let i = 0; i < this.wydatki.length; i++) {
      if(this.wydatki[i].kategoria == category)
      {
        sum += this.wydatki[i].kwota;
      }
    }
    return sum;
  }
  getWydatkiByCurrentMonth()
  {
    var wydatki_per_month = [];
    var date1 = new Date();
    var n = date1.getMonth();
    var y = date1.getYear();
    for (let i = 0; i < this.wydatki.length; i++)
    {
      if(this.wydatki[i].data.getMonth() == n && this.wydatki[i].data.getYear() == y)
      {
        wydatki_per_month.push(this.wydatki[i]);
      }
    }
    return wydatki_per_month;
  }
showCurrentMonth()
{
  document.getElementById('CurrentMonth').style.display = 'block';
  document.getElementById('Full').style.display = 'none';
}
showFull()
{
  document.getElementById('CurrentMonth').style.display = 'none';
  document.getElementById('Full').style.display = 'block';
}
}