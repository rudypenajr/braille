import React from 'react';
import { withStyles } from '@material-ui/core';


const styles = theme => ({})

function BrailleLetter(props) {
    if (!props.subdata) {
      return (
        <div 
          key='space'
          className='space'
        />
      )
    }

    const data = props.subdata.placement
    const count = props.count

    let width = '10%'
    // if (count > 0) {
    //   const divy = 100 / count
    //   width = `${divy}%`
    // }

    const contents = data.map((c, i) => {
      // <div className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}>
      return (
        <div 
          key={i}
          className={"dot " + (c === 1 ? "show" : "hidden")}
        />
      )
    })
  
    return (
      <div className='letter' style={{width: width}}>
        {contents}
      </div>
    )
  }
  
  export default withStyles(styles)(BrailleLetter);