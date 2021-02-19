function getContentBetween(tag: string, str: string): string {
    const arr = str.match(`(?<=<${tag}>)(.*?)(?=</${tag}>)`)
    const result = arr ? arr[0] : ''
    return result;
}

function getContentBetweenAllTags(str: string): string {
    const arr = str.match('(?<=>)([\w\s]+)(?=<\/)')
    const result = arr ? arr[0] : ''
    return result;
}

const HTMLFormatter = {
    format: (value: string) => {
        let result: string = value.split('\n').join('')
        // get contents between <body> tags
        result = getContentBetween('body', result)
        result = getContentBetweenAllTags(result)

        console.log('\n✅ HTML FORMATTER RESULT: ', result, '\n')

        return result
    }
}

export default HTMLFormatter