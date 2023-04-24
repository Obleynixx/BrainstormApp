import React, { useState, useRef } from 'react';
import Block from '../Block/Block';
import styles from './Board.module.css';

const Board = ({ blocks, onContextMenu }) => {
    const [isPanning, setIsPanning] = useState(false);
    const [isDraggingBlock, setIsDraggingBlock] = useState(false);
    const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1.25);
    const boardRef = useRef();
    const handleMouseDown = (e) => {
        if (isDraggingBlock) return;
        setIsPanning(true);
        boardRef.current.initialMouseX = e.clientX;
        boardRef.current.initialMouseY = e.clientY;
        boardRef.current.initialPanX = panPosition.x;
        boardRef.current.initialPanY = panPosition.y;
    };

    const handleMouseMove = (e) => {
        if (!isPanning || isDraggingBlock) return;

        const newX = boardRef.current.initialPanX + (e.clientX - boardRef.current.initialMouseX);
        const newY = boardRef.current.initialPanY + (e.clientY - boardRef.current.initialMouseY);

        setPanPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        setIsPanning(false);
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const newZoom = Math.max(1, zoom + e.deltaY * -0.01);
        setZoom(newZoom);
    };

    return (
        <div
            className={styles.boardContainer}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
        >
            <div
                ref={boardRef}
                className={styles.boardContent}
                style={{
                    transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoom})`,
                }}
            >
                {blocks.map((block) => (
                    <Block key={block.id} id={block.id} content={block.content} x={block.x} y={block.y} onContextMenu={onContextMenu} setIsDraggingBlock={setIsDraggingBlock} zoom={zoom} />
                ))}
            </div>
        </div>
    );
};

export default Board;
