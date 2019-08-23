import React, { Component } from 'react';

class DropZone extends Component {

    dropRef = React.createRef();
    imageInptRef = React.createRef();

    constructor(props) {
        super(props)
        this.state = {
            files: [],
            dragging: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    handleDragIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.props.onDrag(true)
        }
    }

    handleDragOut = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.dragCounter === 0) {
            this.props.onDrag(false)
        }
    }

    handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this.props.onDrop([...e.dataTransfer.files].filter(x => x.type.split('/')[0] === this.props.accept.split('/')[0]).map(file => {
                file.preview = window.URL.createObjectURL(file);
                return file;
            }));
            e.dataTransfer.clearData()
        }
    }

    handleClick() {
        this.imageInptRef.current.click();
    }

    handleChange(e) {
        this.props.onDrop([...e.target.files].map(file => {
            file.preview = window.URL.createObjectURL(file);
            return file;
        }));
    }

    componentDidMount() {
        let el = this.dropRef.current
        el.addEventListener('dragenter', this.handleDragIn)
        el.addEventListener('dragleave', this.handleDragOut)
        el.addEventListener('dragover', this.handleDrag)
        el.addEventListener('drop', this.handleDrop)
    }

    componentWillUnmount() {
        let el = this.dropRef.current
        el.removeEventListener('dragenter', this.handleDragIn)
        el.removeEventListener('dragleave', this.handleDragOut)
        el.removeEventListener('dragover', this.handleDrag)
        el.removeEventListener('drop', this.handleDrop)
    }

    render() {
        return (
            <div ref={this.dropRef} onClick={this.handleClick} style={{ cursor: 'pointer' }}>
                {this.props.children}
                <input style={{ display: 'none' }} type="file" ref={this.imageInptRef} accept={this.props.accept} onChange={this.handleChange} />
            </div>
        )
    }
}

export default DropZone
