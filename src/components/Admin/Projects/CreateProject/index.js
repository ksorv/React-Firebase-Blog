import React from "react";
import "./styles.css";
import { WithContext as ReactTags } from "react-tag-input";

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class CreateProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      creation: null,
      content: null,
      full: null,
      image: null,
      tags: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    // this.handleDrag = this.handleDrag.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  }

  handleAddition(tag) {
    console.log(tag);
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  render() {
    const { tags } = this.state;
    return (
      <div>
        <ReactTags
          classNames={{
            tag: "tag rs-btn rs-btn-default",
            remove: "remove__tag rs-icon",
            tagInputField: "rs-input tag__input"
          }}
          tags={tags}
          allowDragDrop={false}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          delimiters={delimiters}
        />
      </div>
    );
  }
}

export default CreateProject;
