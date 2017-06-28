import * as React from 'react'
import withProps from 'recompose/withProps'

class Box extends React.PureComponent<any, any> {
    render() {
        return <div {...this.props}/>
    }
}
export const Mobile = withProps({
    style: {
        height: 667,
        width: 375,
        position: "relative",
        border: "1px solid #ccc"
    }
})(Box)
export default Box