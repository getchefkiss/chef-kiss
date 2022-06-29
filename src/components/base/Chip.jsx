import React from "react";
import { useState } from "react";

const Chip = ({ id, className, content }) => {
    const [_id, setID] = useState(id);
    const [_className, setClassName] = useState(className);
    const [_content, setContent] = useState(content);

    return (
        <div className={`chip ${_className}`} id={_id}>
            { _content }
        </div>
    );
}

export default Chip;