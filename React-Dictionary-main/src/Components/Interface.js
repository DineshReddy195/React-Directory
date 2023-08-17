import React from 'react'
import Table from './Table'
import Header from './Header'


function Interface({del}) {    
  return (
    <div>
     <Header/>
      <div className='main'>
        <h4 className='add'>Add New Person</h4>
        <div>
          <Table/>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Interface
