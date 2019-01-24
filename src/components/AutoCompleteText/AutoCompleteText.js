import React from 'react';
import './AutoCompleteText.scss';
import myData from './data.json';

export default class AutoCompleteText extends React.Component {
  constructor (props) {
    super(props);
    console.log(myData) // it works see navigator console
    this.items = myData;
    this.state = {
      text: null,
      suggestions: [],
    };

  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if(value.length > 0) {
      const regex = new RegExp(`^${value}`,'i');
      suggestions = this.items.sort().filter((v, key) => regex.test(v.nom));
    }

    console.log(suggestions);
    this.setState(() => ({ suggestions, text: value }));
  }

  suggestionSelected(item) {
    this.setState(() => ({
      text: item.nom + ' ' + item.id,
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
        {suggestions.map((item, key) => <li key={key} onClick={() => this.suggestionSelected(item)}>{item.nom}</li>)}
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
