import "../../styles/atoms/textArea.css";

function TextArea({ text, onChange }) {

    
    return (
        <textarea 
            name="text"
            rows="10"
            value={text}
            onChange={onChange}
        />
    );
}

export default TextArea;