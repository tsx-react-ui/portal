/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Portal
 * Desc The portal component of the react written in Typescript
 * GroupName tsx-react-ui
 */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ReactNode } from 'react'

/**
 * @class Portal
 * @extends React.Component
 * @desc Portal Component for mobile
 */

interface PortalProps {
    children: ReactNode;
    target: HTMLElement;
    className?: string;
}

export default class Portal extends React.Component<PortalProps, {}> {

    static defaultProps = {
        target: document.body
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
        if (this.props.target !== undefined) { 
            this.mountChild(this.props.target);
        }
    }

    componentWillUnmount() {
        this.unmountChild();
    }


    mountChild(target: HTMLElement) {
        this.targetNode = ReactDOM.findDOMNode(target);
        if (this.targetNode !== null) {
            this.targetNode.appendChild(this.wrapper);
        }
    }

    unmountChild() {
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
