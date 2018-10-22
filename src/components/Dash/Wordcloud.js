import React, { Component } from 'react';
import ReactWordCloud from 'react-wordcloud';
import gramophone from 'gramophone';

const WORD_COUNT_KEY = 'tf';
const WORD_KEY = 'term';

export default class Wordcloud extends Component{
  constructor(props){
    super(props);
  }

  makeWordValues(){
    let text = this.props.text;
    let stopWords = ['s', 't'];
    return gramophone.extract(text.toLowerCase(), {
      limit: 50,
      min: 1,
      ngrams: [1],
      score: true,
      stem: true,
      stopWords,
    });
  }

  render(){
    const width = 400; // default width
    const height = width / 4 * 3; // 4:3 ratio
    return (
        <ReactWordCloud
    words={this.makeWordValues()}
    wordCountKey={WORD_COUNT_KEY}
    wordKey={WORD_KEY}
    fontFamily='Segoe UI, sans-serif'
    height={height}
    width={width}
    scale='sqrt'
    spiral='rectangular'
    transitionDuration={2000}
        />
    );
  }
}
