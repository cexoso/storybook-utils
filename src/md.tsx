import * as React from 'react'
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys'
import * as Remarkable from 'remarkable'

const md = new Remarkable();

@onlyUpdateForKeys(["str"])
class Md extends React.Component<any, any> {
    render() {
        const { str } = this.props;
        const html = {
            __html: md.render(str)
        }
        return (<div dangerouslySetInnerHTML={html} />)
    }
}

export default Md