import React from 'react';
import './index.less';

const Search: React.FC = () => {
    const a = 1;
    return (
        <div className='search-container'>
            <div className='search-wrap'>
                <i className='iconfont icon-search search-icon' />
                <input className='search-input' type='search' placeholder='搜索' />
            </div>
        </div>
    );
};

Search.displayName = 'Search';

export default Search;
