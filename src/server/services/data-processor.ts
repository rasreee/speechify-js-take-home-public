import { StockTickerFormatter } from ".";

const DataProcessor = {
    parseHTML: (data: string) => {
        return data;
    },
    /**
     * Naive solution of reading a JSON:
     *      Get a parsed version of the data (JSON.parse)
     *      For each property:
     *          Concatenate to the result a new line containing:
     *              Property name + its value
     */
    parseJSON: (data: string) => {

        let entries = Object.entries(JSON.parse(data))

        let result = ''

        entries.forEach(entry => {
            result += entry[0]
            result += ': '
            result += entry[1]
            result += '\n'
        })

        return result;
    },
    /**
     * Naive solution of reading TXT:
     *      Assuming all .txt files are of the same format (stock tickers):
     *      - Get a split version of the data (split by \n first, then lines by \t)
     *      - Join by ' . ' to get the result
     */
    parseTXT: (data: string) => {
        // return data.split('\n').join(' . ').split('\t').join(' . ');
        const lines = data.split('\n')

        let list: string[] = []
        for (let line of lines) {
            const tabs = line.split('\t')
            StockTickerFormatter.format(tabs)
            list.push(StockTickerFormatter.format(tabs))
        }
        return list.join(' . ');
    },
}
export default DataProcessor