// ['search=Name', 'page=2']

// metodo reduce do js é um metodo que percorre um array e transforma ele em outra coisa

export function extractQueryParams(query) {
    return query.substr(1).split('&').reduce((queryParams, param) => {
        const [key, value] = param.split('=')

        queryParams[key] = value

        return queryParams
    }, {})
}