/**
     * Naive solution of reading TXT:
     *      - Get a split version of the data (split by \n first, then lines by \t)
     *      - Join by ' . ' to get the result
     */
const NaiveTXTFormatter = {

    format: (data: string) => {
        const lines = data.split('\n')
        return lines.join(' . ');
    }
}

export default NaiveTXTFormatter