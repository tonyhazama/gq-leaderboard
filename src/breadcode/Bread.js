import React from 'react';

export default function Bread() {
  const code = "-.-. .- . ... .- .-. / -.-. .. .--. .... . .-.";

  const shortbread = <div><img style={{width: '50px', marginRight: '10px'}} src={process.env.PUBLIC_URL + '/shortbread.png'} /></div>;
  const longbread = <div><img style={{width: '100px', marginRight: '10px'}} src={process.env.PUBLIC_URL + '/longbread.png'} /></div>;
  const slashbread = <div><img style={{width: '100px', marginRight: '10px'}} src={process.env.PUBLIC_URL + '/slashbread.png'} /></div>;

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {code.split('').map(char => {
        if (char === '-') {
          return longbread;
        } else if (char === '.') {
          return shortbread;
        } else if (char === ' ') {
          return <div style={{width: '50px', height: '100px'}} />;
        } else if (char === '/') {
          return slashbread;
        }
      })}    
    </div>
  )
}
