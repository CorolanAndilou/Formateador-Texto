import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import { useState } from "react";

function TextFormatter() {

    const [text, setText] = useState("");

    function formatText() {
        const formattedText = text
            .toLowerCase()
            .replace(/\t/g, " ")
            .replace(/ {2,}/g, " ")
            .trim();


        setText(formattedText);
    }

    return (
        <>
            <TextArea
                text={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={formatText}>
                Formatear
            </Button>
        </>
    );
}

export default TextFormatter;