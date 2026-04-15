import { Routes } from '@angular/router';
import { CandleDetails } from './candle-details/candle-details';
import { Candles } from './candles/candles';
import { Login } from './login/login';

export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: Login },
	{ path: 'candles', component: Candles },
	{ path: 'candles/:id', component: CandleDetails },
	{ path: '**', redirectTo: 'login' }
];
