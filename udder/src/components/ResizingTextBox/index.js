import React, {useState, CSSProperties, useEffect, useRef} from 'react'

const ResizingTextBox = () => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState("");
    const [textAreaHeight, setTextAreaHeight] = useState("auto");
    const [parentHeight, setParentHeight] = useState("auto");

    const parentStyle: CSSProperties = {
        minHeight: parentHeight,
    };

    useEffect (() => {
        setParentHeight('${textAreaRef.current!.scrollHeight}px');
        setTextAreaHeight('${textAreaRef.current!.scrollHeight}px')
    }, [text]);

    return (
        <div style={parentStyle}>
            <textarea 
                ref={textAreaRef}
                style={textAreaStyle}
                rows={1}
            />
        </div>
    )

}

export default ResizingTextBox