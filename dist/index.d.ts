/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Portal
 * Desc The portal component of the react written in Typescript
 * GroupName tsx-react-ui
 */
import * as React from 'react';
/**
 * @class Portal
 * @extends React.Component
 * @desc Portal Component for mobile
 */
interface PortalProps {
    children: React.ReactNode;
    target: () => HTMLElement;
    className?: string;
}
export default class Portal extends React.Component<PortalProps, {}> {
    static defaultProps: {
        target: () => HTMLElement;
    };
    wrapper: HTMLElement;
    targetNode: Element | Text | null;
    /**
     * @constructor
     */
    constructor(props: PortalProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    mountChild(target: HTMLElement): void;
    unmountChild(): void;
    render(): React.ReactPortal;
}
export {};
