import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import BrailleLetter from './BrailleLetter'
import data from './data/braille';
import './Braille.css';
import Fade from '@material-ui/core/Fade';

const styles = theme => ({})

function Braille(props) {
  const { convert } = props
  
  if (convert.length === 0) {
    return <div></div>
  }
  
  const count = convert.length
  const braille = convert.split("").map(letter => {
    const placement = data[letter.toUpperCase()]
    let phrase= []
    
    phrase.push(
      <BrailleLetter 
        alpha={letter}   
        subdata={placement}
        count={count}
      />
    )

    return phrase
  })

  return (
    <Fade in={(count > 0)}>
      <div className='braille--translation'>
        {braille}
      </div>
    </Fade>
  )
}

export default withStyles(styles)(Braille);