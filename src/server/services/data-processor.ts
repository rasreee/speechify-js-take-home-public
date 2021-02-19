import { StockTickerFormatter, HTMLFormatter, NaiveTXTFormatter, SlackMessageFormatter, NaiveJSONFormatter } from ".";

const DataProcessor = {
    parseHTML: (source: string, data: string) => {
        return HTMLFormatter.format(data);
    },

    parseJSON: (source: string, data: string) => {
        if (source === 'https://slack.com/webhooks/chat') return SlackMessageFormatter.format(data)
        else return NaiveJSONFormatter.format(data)
    },
    parseTXT: (source: string, data: string) => {
        if (source === 'feeds.stock-ticker') return StockTickerFormatter.format(data)
        else return NaiveTXTFormatter.format(data)
    },
}
export default DataProcessor