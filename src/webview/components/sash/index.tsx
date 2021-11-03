import React, { useEffect } from 'react';
import './index.less';

interface SashProps {
    left: number;
    top?: number;
    onMove(pos: [number, number]): void;
}

const Sash: React.FC<SashProps> = ({ left, top, onMove }) => {
    let isKeyDown = false;
    let orignPos = [0, 0];

    const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = e => {
        orignPos = [e.pageX, e.pageY];
        isKeyDown = true;
        document.addEventListener('mouseup', e => {
            isKeyDown = false;
        });
        document.addEventListener('mousemove', e => {
            if (!isKeyDown) return;
            const currentPos = [left + (e.pageX - orignPos[0]), top! + (e.pageY - orignPos[1])] as [number, number];
            onMove(currentPos);
        });
    };

    // const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    //     if (!isKeyDown) return;
    //     const currentPos = [left + (e.pageX - orignPos[0]), top! + (e.pageY - orignPos[1])] as [number, number];
    //     onMove(currentPos);
    // };

    // const handleMoveUp: React.MouseEventHandler<HTMLIFrameElement> = e => {
    //     isKeyDown = false;
    // };

    useEffect(() => {
        document.addEventListener('mousemove', e => {
            if (!isKeyDown) return;
            const currentPos = [left + (e.pageX - orignPos[0]), top! + (e.pageY - orignPos[1])] as [number, number];
            onMove(currentPos);
        });
    }, []);

    return (
        <div
            className='todo-sash'
            style={{ left, top }}
            // onMouseUp={handleMoveUp}
            onMouseDown={handleMouseDown}
            // onMouseMove={handleMouseMove}
        />
    );
};

Sash.displayName = 'Sash';
Sash.defaultProps = {
    top: 0,
};

export default Sash;
