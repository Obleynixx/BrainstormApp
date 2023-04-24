import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ content, showToolbar }) => {
    const [value, setValue] = React.useState(content);
    const quillRef = useRef();

    useEffect(() => {
      const quill = quillRef.current.getEditor();
      quill.disable();
    }, []);
  
    useEffect(() => {
        if (quillRef.current) {
          const quill = quillRef.current.getEditor();
          quill.enable();
          const toolbar = quill.getModule('toolbar');
          toolbar.container.style.display = showToolbar ? '' : 'none';
        }
      }, [showToolbar]);
    return (
        <ReactQuill
            ref={quillRef}
            theme="snow"
            value={value}
            onChange={setValue}
        />
    );
};

export default TextEditor;
