import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Board from '../../components/Board/Board';
import ContextMenu from '../../components/ContextMenu/ContextMenu';

function BoardPage() {
    
    const [blocks, setBlocks] = useState([
        {
            id: 1,
            content: 'Block 1',
            x: 50,
            y: 50,
        },
        {
            id: 2,
            content: 'Block 2',
            x: 150,
            y: 150,
        },
    ]);
    const [menu, setMenu] = useState({ visible: false, x: 0, y: 0, blockId: null });

    const addBlock = (x, y) => {
        const newBlock = {
            id: Date.now(),
            content: 'New Block',
            x: x - 50,
            y: y - 25,
        };

        setBlocks((prevBlocks) => [...prevBlocks, newBlock]);
        setMenu({ visible: false });
    };

    const deleteBlock = (blockId) => {
        setBlocks((prevBlocks) => prevBlocks.filter((block) => block.id !== blockId));
        setMenu({ visible: false });
    };

    const handleContextMenu = (e, blockId = null) => {
        e.preventDefault();
        setMenu({
            visible: true,
            x: e.clientX,
            y: e.clientY,
            blockId: blockId,
        });
    };

    const handleClick = () => {
        setMenu({ visible: false });
    };

    return (
        <>
            <Navbar />
            <div
                style={{ width: '100vw', height: '100vh', position: 'relative' }}
                onContextMenu={(e) => handleContextMenu(e)}
                onClick={handleClick}
            >
                <Board blocks={blocks}
                    onContextMenu={(e, blockId) => {
                        handleContextMenu(e, blockId);
                    }} />
                <ContextMenu
                    visible={menu.visible}
                    x={menu.x}
                    y={menu.y}
                    onCreate={() => addBlock(menu.x, menu.y)}
                    onDelete={menu.blockId ? () => deleteBlock(menu.blockId) : null}
                />
            </div></>
    );
}

export default BoardPage;
