// import theme from "./HashtagSelector.css";
import "./HashtagSelector.css"

import Autosuggest from 'react-autosuggest';
import { defaultTheme } from 'react-autosuggest/dist/theme';

import React from 'react';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


const getSuggestionValue = suggestion => {
  return suggestion
};

export default function HashtagSelector({handleSubmit, hashtags}) {
  const [value, setValue] = React.useState('')
  const [suggestions, setSuggestions] = React.useState([])

  const getSuggestions = value => {
  if (value.length === 0) return hashtags
  const escapedValue = escapeRegexCharacters(value.trim());
  const regex = new RegExp('^' + escapedValue, 'i');
  return hashtags.filter(hashtag => regex.test(hashtag));
};


  const onChange = (event, { newValue }) => {
    setValue(newValue)
  };

  const onSuggestionsFetchRequested = ({ value, reason }) => {
    if (reason === 'suggestion-selected') {
      handleSubmit(value)
      setValue('')
      setSuggestions(hashtags.filter(h => h !== value))
      return;
    }
    setSuggestions(getSuggestions(value))
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  };

  const renderSuggestion = suggestion => (
    <div>
      {suggestion}
    </div>
  );

  const handleSubmitEnter = (e) => {
        e.preventDefault()
        handleSubmit(value)
        setSuggestions(hashtags.filter(h => h !== value))
        setValue('')
  }

  const renderInputComponent = inputProps => 
    <form className="inputContainer" onSubmit={handleSubmitEnter}>
      <input {...inputProps} />
    </form>
  
  const inputProps = {
    placeholder: '+ New Hashtag',
    value,
    onChange
  };


    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        renderInputComponent={renderInputComponent}
        highlightFirstSuggestion={true}
        alwaysRenderSuggestions={true}
        // theme={{
        //   ...defaultTheme,
        //   ...
        //   {
        //     container: {
        //     //   ...defaultTheme.container,
        //       display: 'visible',
        //       width: '340px',
        //     },
        //     //more overrides
        //   }
        // }}
      />
    );
}