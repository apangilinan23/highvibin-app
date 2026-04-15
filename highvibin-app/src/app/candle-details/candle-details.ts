import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { CANDLE_CATALOG } from '../candles/candle-catalog';

@Component({
  selector: 'app-candle-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './candle-details.html',
  styleUrl: './candle-details.css',
})
export class CandleDetails {
  private readonly route = inject(ActivatedRoute);

  readonly candle$ = this.route.paramMap.pipe(
    map((params) => {
      const id = params.get('id') ?? '';
      return CANDLE_CATALOG.find((candle) => candle.id === id) ?? null;
    })
  );
}
