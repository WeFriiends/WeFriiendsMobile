import { Text } from "dripsy";

type PromptProps = {
    text?: string | null
}

const Prompt = (props: PromptProps) => {
    return (
        <Text>
            {props.text}
        </Text>
    )
}

export default Prompt;