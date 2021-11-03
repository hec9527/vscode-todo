import React from 'react';
import './index.less';

interface TodoClassificationProps extends ITodoClassification {
    count: number;
}

const cls = 'todo-classification';

const TodoClassification: React.FC<TodoClassificationProps> = props => {
    const a = 1;
    return (
        <div className={`${cls}-wrap`} title={props.title}>
            <div className={`${cls}-icon`}>
                <span className={`iconfont ${props.icon}`} />
            </div>
            <div className={`${cls}-count`}>{props.count}</div>
            <div className={`${cls}-title`}>{props.title}</div>
        </div>
    );
};

TodoClassification.displayName = 'TodoClassification';

export default TodoClassification;
