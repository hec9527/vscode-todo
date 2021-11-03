/// <reference path="../../global.d.ts" />

declare type ITodoClassificationKey = 'Today' | 'Plan' | 'All' | 'Marked';

declare type ITodoClassification = {
    key: ITodoClassificationKey;
    icon: string;
    activeIcon: string;
    title: string;
};
