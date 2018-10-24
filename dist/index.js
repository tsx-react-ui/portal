/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Portal
 * Desc The portal component of the react written in Typescript
 * GroupName tsx-react-ui
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class Portal extends React.Component {
    /**
     * @constructor
     */
    constructor(props) {
        super(props);
        const { className } = this.props;
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
    mountChild(target) {
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
        return ReactDOM.createPortal(this.props.children, this.wrapper);
    }
}
Portal.defaultProps = {
    target: () => document.body
};
//# sourceMappingURL=index.js.map