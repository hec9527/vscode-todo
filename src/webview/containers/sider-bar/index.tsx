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
            <div className='my-todo-list-container'>
                <div className='my-todo-list-title'>我的列表</div>
                <div className='my-todo-list-wrap'>
                    {/*  */}
                    {/*  */}
                </div>
            </div>
        </div>
    );
};

SideBar.displayName = 'SideBar';

export default SideBar;
