import { useAppSelect } from '@store';
import React from 'react';
import Search from '../../components/search-todo';
import TodoClassification from '../../components/todo-classification';
import './index.less';

import * as Mock from './mock';

const SideBar: React.FC = () => {
    return (
        <div className='side-bar'>
            <Search />
            <div className='todo-classification-container'>
                {Mock.todoClassification.map(t => (
                    <TodoClassification {...t} count={0} />
                ))}
            </div>
        </div>
    );
};

SideBar.displayName = 'SideBar';

export default SideBar;
