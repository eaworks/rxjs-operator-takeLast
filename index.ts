import { of, takeLast } from 'rxjs';

// son verilen degere gore referans alinir

const source = of('Hasan', 'Osman', 'Can', 'Tuba!');

const example = source.pipe(takeLast(2));
example.subscribe((val) => console.log(val));
