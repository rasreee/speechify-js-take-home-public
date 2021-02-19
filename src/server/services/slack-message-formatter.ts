const SlackMessageFormatter = {
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
    SlackMessageFormatter