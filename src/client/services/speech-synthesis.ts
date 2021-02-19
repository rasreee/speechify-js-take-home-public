
import { ClientEventType, ClientState, ClientStateEventListener } from "@common"

type CreateUtteranceParams = { text: string, onEnd: () => void }

const SpeechSynthesisService = {
    createUtterance: ({ text, onEnd }: CreateUtteranceParams) => {
        const utterance = new SpeechSynthesisUtterance(text)


        utterance.onend = async () => {
            console.log('🔥 utterances end!')
            onEnd()
        }
        return utterance
    }
}

export default SpeechSynthesisService