import React from 'react';
import './index.less';

import Main from './containers/main-box';
import SideBar from './containers/sider-bar';
import SashContainer from './containers/sash-box';

const App: React.FC = () => {
    return (
        <div className='page-container'>
            {/* <SashContainer /> */}
            <SideBar />
            <Main />
        </div>
    );
};

App.displayName = 'App';

export default App;
