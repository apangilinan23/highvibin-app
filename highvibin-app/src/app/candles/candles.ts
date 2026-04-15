import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { CANDLE_CATALOG } from './candle-catalog';

@Component({
  selector: 'app-candles',
  imports: [CommonModule, RouterLink],
  templateUrl: './candles.html',
  styleUrl: './candles.css',
})
export class Candles {
  private readonly route = inject(ActivatedRoute);

  readonly username$ = this.route.queryParamMap.pipe(
    map((params) => params.get('username')?.trim() || 'Guest')
  );

  readonly candles = CANDLE_CATALOG;
}
