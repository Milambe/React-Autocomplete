import React from 'react';
import './AutoCompleteText.scss';

export default class AutoCompleteText extends React.Component {
  constructor (props) {
    super(props);
    fetch('./data.json')
    .then(response => response.json())
      .then(data => {
      console.log(JSON.parse(data));
      })
    this.items = [
      'Sofia',
      'Zupan',
      'Maxime',
      'Maxence',
      'Maximilian',
      'Olivier',
      'JB'
    ];
    this.state = {
      suggestions: [],
    };

  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if(value.length > 0) {
      const regex = new RegExp(`^${value}`,'i');
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));

  }

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  }

  renderSuggestions () {
    const { suggestions } = this.state;
    if(suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
      </ul>
    );

  }

  render (){
    const { text } = this.state;
    return (
      <div className="autocompletetext">
        blabla
        <input value={text} onChange={this.onTextChanged} type="text" />
        {this.renderSuggestions()}
      </div>
    )
  }
}