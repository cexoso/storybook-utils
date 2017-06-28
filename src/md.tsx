import * as React from 'react'
import * as Remarkable from 'remarkable'
import * as hljs from 'highlight.js'

const md = new Remarkable('full', {
    html: false,        // Enable HTML tags in source
    xhtmlOut: false,        // Use '/' to close single tags (<br />)
    breaks: false,        // Convert '\n' in paragraphs into <br>
    langPrefix: 'language-',  // CSS language prefix for fenced blocks
    linkify: true,         // autoconvert URL-like texts to links
    linkTarget: '',           // set target to open link in
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
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