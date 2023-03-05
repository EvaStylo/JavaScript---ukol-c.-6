// tady je místo pro náš program


/*Ukol c. 1
Bez použití knihovny dayjs napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:

> parseDate('12.03.2015')
{ day: 12, month: 3, year: 2015 }
> parseDate('06.04.2021')
{ day: 6, month: 4, year: 2021 } */

const parseDate = (datum) => {
	return {
		day: Number(datum.slice(0, 2)),
		month: Number(datum.slice(3, 5)),
		year: Number(datum.slice(6)),
	}
}

let zadaneDatum = ('12.03.2015')
console.log(parseDate(zadaneDatum))


/*
Ukol c. 2

Bez použití knihovny dayjs napište funkci formatDate, která na vstupu obdrží objekt představující datum v následujícím formátu.

{ day: 12, month: 3, year: 2015 }
Funkce vrátí řetězec představující datum ve formátu DD.MM.YYYY. Příklad použití. 

> formatDate({ day: 6, month: 4, year: 2021 })
"06.04.2021"
V tomto cvičení se vám jistě bude hodit metoda padStart. Zkuste také uvnitř těla funkce použít destrukturování. */



const formatDate = (datum) => {
    let den = String(datum.day)
    let mesic = String(datum.month)
    let rok = String(datum.year)

    return den.padStart(2,'0') + '.' + mesic.padStart(2,'0') + '.' + rok.padStart(4,'20')
}

let myDate = {day: 12, month: 3, year: 2015}

console.log(formatDate(myDate)) 

//Úkol č. 3: Python zaokrouhlování - Pokud je desetinná část přesně rovna 0.5, zaokrouhlujeme k sudému číslu.

const round = (cislo) => {
	const celaCast = Math.trunc(cislo)
	const desetinnaCast = cislo - celaCast
	if (Math.abs(desetinnaCast) === 0.5) {
		if (celaCast % 2 === 0) {
			return celaCast
		} else {
			return celaCast + 2 * desetinnaCast
		}
	}
    else if (desetinnaCast < 0.5) {
        return celaCast
    } else {
        return celaCast + 1
    }

    //return Math.round(cislo)   == zaukrouhlování v JavaScriptu
}

const cislo = Number(prompt('Zadej desetinné číslo, použij tečku jako desetinou čárku:'))

console.log(round(cislo))