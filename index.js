const getData = () => {
    fetch("https://crypto-index-backend.herokuapp.com/get-market-data", {
        method: "GET",
        headers: {
            'X-CMC_PRO_API_KEY': '4cefae95-33c9-4c7b-9e42-abed271eb837'
        }
    })
    .then(response => response.json())
    .then(data => {
        data.data.forEach(item=>{
            document.getElementById('data').innerHTML += `
            <tr>
                <th class="text-light" scope="row"><img style="width:20px;" src="https://s2.coinmarketcap.com/static/img/coins/32x32/${item.id}.png"/></td>
                <td class="text-light">${item.name}(${item.symbol})</td>
                <td class="text-light">$${item.quote.USD.price.toFixed(2)}</td>
            </tr>
            `
        })
    })
}


getData()