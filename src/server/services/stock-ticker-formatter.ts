
import { assert } from "console"

/**
 * These values are just to use as mock data.
 *
 * A possible replacement would be to fetch these values from a
 * 3rd party API.
 */
const STOCK_NAMES: Record<string, string> = {
    'AMZN': 'amazon',
    'FB': 'facebook',
    'AAPL': 'apple',
    'NFLX': 'netflix'
}


const CURRENCY_SYMBOLS: Record<string, string> = {
    'USD': '$'
}


function joinTabs(arr: string[]) {
    assert(arr.length === 3)
    const symbol: string = arr[2]
    const name: string = arr[0]
    const price: string = arr[1]
    return `the price of ${STOCK_NAMES[name]} is ${CURRENCY_SYMBOLS[symbol]}${price}`
}

const StockTickerFormatter = {
    format: (data: string) => {
        const lines = data.split('\n')

        let list: string[] = []
        for (let line of lines) {
            const tabs = line.split('\t')
            list.push(joinTabs(tabs))
        }
        return list.join(' . ');
    }
}

export default StockTickerFormatter