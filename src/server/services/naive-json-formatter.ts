/**
   * Naive solution of reading a JSON:
   *      Get a parsed version of the data (JSON.parse)
   *      For each property:
   *          Concatenate to the result a new line containing:
   *              Property name + its value
   */
const NaiveJSONformatter = {
    format: (data: string) => {
        let entries = Object.entries(JSON.parse(data))

        let result = ''

        entries.forEach(entry => {
            result += entry[0]
            result += ': '
            result += entry[1]
            result += '\n'
        })

        return result;
    }
}

export default
    NaiveJSONformatter