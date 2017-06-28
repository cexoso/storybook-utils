import * as React from 'react'
import * as Remarkable from 'remarkable'
import * as hljs from 'highlight.js'
import './css'

const md = new Remarkable('full', {
    html: false,
    xhtmlOut: false,
    breaks: false,
    langPrefix: 'language-',
    linkify: true,
    linkTarget: '',
    typographer: false,
    quotes: '“”‘’',
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) { }
        }
        try {
            return hljs.highlightAuto(str).value;
        } catch (__) { }

        return ''; // use external default escaping
    }
});
const margin16 = { margin: 16 }
class Md extends React.PureComponent<any, any> {
    render() {
        const { str } = this.props;
        const html = {
            __html: md.render(str)
        }
        return (<div dangerouslySetInnerHTML={html} style={margin16} className="markdown-body" />)
    }
}

export default Md