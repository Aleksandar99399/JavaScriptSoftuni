function solve(arr, word){
    class Tickets {

        constructor(descriptor) {
            const[destination, price, status] = descriptor.split('|');
            this.destination=destination;
            this.price = Number(price);
            this.status = status;
        }

    }

    return arr.map(t => new Tickets(t))
        .sort(comparator);

    function comparator(a,b) {
        try {

            return a[word].localeCompare(b[word]);
        }catch (e) {
            return a[word] - b[word]
        }

    }
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'));