import React from "react";
import "./styles.css";
import { WithContext as ReactTags } from "react-tag-input";

import { Editor } from "@tinymce/tinymce-react";

import {
  Button,
  ButtonToolbar,
  Form,
  FormControl,
  FormGroup,
  ControlLabel
  // Row
} from "rsuite";

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      creation: null,
      creator: null,
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

  handleEditorChange = e => {
    console.log("Content was updated:", e.target.getContent());
  };

  handleForm = (form, event) => {
    console.log(form, event);
  };

  render() {
    const { tags } = this.state;
    return (
      <div>
        <Form fluid onChange={this.handleForm}>
          <FormGroup>
            <ControlLabel>Slug</ControlLabel>
            <FormControl name='slug' />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Author</ControlLabel>
            <FormControl name='author' />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Textarea</ControlLabel>
            <FormControl rows={5} name='textarea' componentClass='textarea' />
          </FormGroup>
          <FormGroup>
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
          </FormGroup>
          <FormGroup>
            <Editor
              initialValue='<p>Initial content</p>'
              apiKey='sp3n50rvypo2snjqq0adyu0kq3ofysglz3v6iw2mgzdeux1l'
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image",
                  "charmap print preview anchor help",
                  "searchreplace visualblocks code",
                  "insertdatetime media table paste wordcount"
                ],
                toolbar: `undo redo | formatselect | bold italic code image |
               alignleft aligncenter alignright |
               bullist numlist outdent indent | help`
              }}
              onChange={this.handleEditorChange}
            />
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance='primary'>Submit</Button>
              <Button appearance='default'>Cancel</Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default CreatePost;
