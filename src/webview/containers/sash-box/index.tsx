import React from 'react';
import Sash from '../../components/sash';
import { useAppSelect, useAppDispatch } from '@store';
import { setlayout } from '@store/layout-store';
import './index.less';

const SashContainer: React.FC = () => {
    const layout = useAppSelect(s => s.layout);
    const dispatch = useAppDispatch();

    const handleMove = (key: keyof typeof layout, value: number) => {
        dispatch(setlayout({ key, value }));
    };

    return (
        <div className=''>
            <Sash left={layout.sideBar} onMove={pos => handleMove('sideBar', pos[0])} />
        </div>
    );
};

SashContainer.displayName = 'SashContainer';

export default SashContainer;
