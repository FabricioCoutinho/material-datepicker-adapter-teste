import { NativeDateAdapter } from '@angular/material';
import  parse  from 'date-fns/parse';
import  isValid  from 'date-fns/isValid';
import format from 'date-fns/format';
import { ptBR } from 'date-fns/locale';

export const APP_DATE_FORMATS =
{
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};

export class AppDateFormat extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();

          return `${day}/${month}/${year}`;
      } else {
          return format(date, 'MMM yyyy', {locale: ptBR});
      }

  }

  parse(value: any): Date | null {
      
      const date = parse(value, 'dd/MM/yyyy', new Date(), { locale: ptBR });
      return isValid(date) ? date : null;
  }

}

