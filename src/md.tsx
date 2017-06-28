import * as React from 'react'
import * as Remarkable from 'remarkable'

const md = new Remarkable();
class Md extends React.PureComponent<any, any> {
    render() {
        const { str } = this.props;
        const html = {
            __html: md.render(str)
        }
        return (<div dangerouslySetInnerHTML={html} />)
    }
}

export default Md