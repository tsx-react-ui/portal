/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Portal
 * Desc The portal component of the react written in Typescript
 * GroupName tsx-react-ui
 */

import * as React from 'react'
import * as ReactDOM from 'react-dom'

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

    static defaultProps = {
        target: () => document.body
    };
    wrapper: HTMLElement;
    targetNode: Element | Text | null;

    /**
     * @constructor
     */
    constructor(props: PortalProps) {
        super(props);

        const {
            className
        } = this.props;

        this.wrapper = document.createElement('div');
        if (className) {
            this.wrapper.className = className;
        }
    }

    componentDidMount() {
        const targetProp = this.props.target() || document.body;
        this.mountChild(targetProp);
    }

    componentWillUnmount() {
        this.unmountChild();
    }


    mountChild(target: HTMLElement): void {
        this.targetNode = ReactDOM.findDOMNode(target);
        if (this.targetNode !== null) {
            this.targetNode.appendChild(this.wrapper);
        }
    }

    unmountChild(): void {
        if (this.targetNode) {
            this.targetNode.removeChild(this.wrapper);
            this.targetNode = null;
        }
    }

    render() {

        return ReactDOM.createPortal(
            this.props.children,
            this.wrapper
        );
    }

}
