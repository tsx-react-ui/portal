import * as React from 'react'
import Portal from '../dist/index'
import './index.scss'

export default class App extends React.Component {


    render() {
        return (
            <section className="container">
                <div id="test"></div>
                <Portal className="test" target={() => document.getElementById('test')}>
                    <div>我被转移到body下了</div>
                </Portal>
            </section>
        )
    }
}
