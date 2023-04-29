import React, { useState, useRef } from 'react';
import TextEditor from '../TextEditor/TextEditor';
import styles from './Block.module.css';

const Block = ({ id, content, x, y, onContextMenu, setIsDraggingBlock, zoom }) => {
    const [position, setPosition] = useState({ x: x || 0, y: y || 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [showToolbar, setShowToolbar] = useState(false);
    const blockRef = useRef(null);

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setIsDraggingBlock(true);
        // Store the initial position of the mouse when clicking on the block
        blockRef.current.initialMouseX = e.clientX;
        blockRef.current.initialMouseY = e.clientY;

        // Store the initial position of the block
        blockRef.current.initialX = position.x;
        blockRef.current.initialY = position.y;
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        // Calculate the new position of the block
        const newX = blockRef.current.initialX + (e.clientX - blockRef.current.initialMouseX) / zoom;
        const newY = blockRef.current.initialY + (e.clientY - blockRef.current.initialMouseY) / zoom;

        setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setIsDraggingBlock(false);
    };

    console.log("isdragging: " + isDragging);
    return (
        <div
            ref={blockRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onContextMenu={(e) => {
                if (onContextMenu) {
                    e.stopPropagation();
                    onContextMenu(e, id);
                }
            }}
            onMouseEnter={() => setShowToolbar(true)}
            onMouseLeave={() => setShowToolbar(false)}

            className={`${styles.blockcontainer} ${isDragging ? styles.grabbing : ''}`}
            style={{
                left: position.x,
                top: position.y,
            }}
        >
            <TextEditor content={content} showToolbar={showToolbar} />
        </div>
    );
};

export default Block;
