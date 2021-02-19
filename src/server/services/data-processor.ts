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
        console.log('\n🍮 parsing JSON data\n');

        let entries = Object.entries(JSON.parse(data))

        console.log('\n🍮 entries: ', entries, '\n');
        let result = ''

        entries.forEach(entry => {
            result += entry[0]
            result += ': '
            result += entry[1]
            result += '\n'
        })

        console.log('\n🍮 result: ', result, '\n');
        return result;
    },
    parseTXT: (data: string) => { return data; },
}
export default DataProcessor