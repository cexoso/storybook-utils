import * as React from 'react'
import { Component } from 'react'
import * as Remarkable from 'remarkable'

const md = new Remarkable();

function Md({str}) {
    const html = {
        __html: md.render(str)
    }
    return (<div dangerouslySetInnerHTML={html} />)
}

export default Md