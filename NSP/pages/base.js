export class Base {
    constructor(parentNode, tag = 'div', className = '') {
        this.parentNode = parentNode;
        this.node = document.createElement(tag);
        if (className !== "") {
            this.node.className = className;
        }
        this.content = '';
    }
    render() {
        this.parentNode.appendChild(this.node);
    }

    renderContent(content) {
        this.node.innerHTML = content;
    }
}
