import React from 'react';
import ReactTags from 'react-tag-autocomplete';

export default class TagInput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      tags: [
      ],
      suggestions: [
        { id: 3, name: "Bananas" },
        { id: 4, name: "Mangos" },
        { id: 5, name: "Lemons" },
        { id: 6, name: "Apricots" }
      ]
    }
  }

  onDelete (i) {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags });
    this.props.onChange(tags);
  }

  onAddition (tag) {
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags });
    this.props.onChange(tags);
    console.log(tags);
  }

  render () {
    return (
      <ReactTags
        tags={this.state.tags}
        suggestions={this.state.suggestions}
        onDelete={this.onDelete.bind(this)}
        onAddition={this.onAddition.bind(this)}
        allowNew={true}
      />
    )
  }
}
