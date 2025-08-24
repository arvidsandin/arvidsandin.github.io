import { visit } from 'unist-util-visit';

//Add class "language-text" to inline code elements
export default function rehypeInlineCodeClass() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (
        node.tagName === 'code' &&
        parent?.tagName !== 'pre'
      ) {
        const props = node.properties || {};
        const classes = props.className || [];
        if (!classes.includes('language-text')) {
          props.className = [...classes, 'language-text'];
        }
        node.properties = props;
      }
    });
  };
}
