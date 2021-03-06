import React from 'react';
import moment from 'moment';

const Metadata = (props) => {
    return (
        <div className="Metadata" style = {styles.data}>
              <div style = {styles.user}>{props.message.displayName}</div>
              <div style = {styles.time}>{moment(props.message.createdAt).fromNow()}</div>
            </div>
    )
}

const styles = {
    data: {
      display: 'flex',
      alignItems: 'baseline',
    },
  
    user: {
      fontWeight: 'bold',
      marginRight: '0.5rem',
    },
  
    time: {
      color: '#999',
      fontSize: '0.8rem',
    }
  }

export default Metadata;