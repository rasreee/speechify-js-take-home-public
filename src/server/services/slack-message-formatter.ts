type Message = {
    from: string
    channel: string
    message: string
    timeSent: string
}

const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

function formatEpoch(epoch: number): string {
    const date = new Date(epoch)
    const hours = date.getHours()
    const hour = Math.max(hours, hours - 12)
    const amOrPm = hours >= 12 ? 'PM' : "AM"
    return `${DAYS[date.getDay()]} ${date.getMonth()} ${date.getUTCDate()}th at ${hour}:${date.getMinutes()}${amOrPm}`
}

const SlackMessageFormatter = {
    format: (data: string) => {
        let parsed: Message = JSON.parse(data)

        const author: string = parsed.from.slice(1)
        const channel: string = parsed.channel.slice(1)
        const message: string = parsed.message
        const time: string = formatEpoch(parseInt(parsed.timeSent))

        let result = `reading message from ${author} in channel ${channel} set at ${time} . `
        result += `message start . ${message} . message end . `


        return result;
    }
}

export default
    SlackMessageFormatter