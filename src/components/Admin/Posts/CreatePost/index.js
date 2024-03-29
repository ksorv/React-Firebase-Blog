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
  ControlLabel,
  Toggle
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
      title: "",
      creation: "",
      author: "",
      content: "",
      full: "",
      image: "",
      slug: "",
      published: false,
      tags: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleEditorChange = e => {
    this.setState({ full: e.target.getContent() });
  };

  handleForm = (form, event) => {
    this.setState({
      title: form.title || "",
      slug: form.slug || "",
      author: form.author || "",
      content: form.content || ""
    });
  };

  saveDraft = () => {
    //
  };
  publishHandler = () => {
    this.setState({ published: !this.state.published });
  };

  render() {
    const { tags } = this.state;
    return (
      <div
        style={{
          padding: 10
        }}
      >
        <Form fluid onChange={this.handleForm}>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl name='title' />
          </FormGroup>
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
            <FormControl rows={5} name='content' componentClass='textarea' />
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
          <div>
            <h5>Published: </h5>
            <Toggle
              size='lg'
              style={{ display: "inherit", marginBottom: 5 }}
              checked={this.state.published}
              onChange={this.publishHandler}
            />
          </div>
          <FormGroup>
            <ButtonToolbar>
              <Button
                appearance='primary'
                style={{ textAlign: "center" }}
                onClick={this.saveDraft}
              >
                Submit
              </Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default CreatePost;
