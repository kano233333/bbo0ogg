import React from 'react'
import Card from '../components/card'
import './index.scss'
class Works extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      works: [
        { name: 'first' },
        { name: 'first' },
        { name: 'first' },
        { name: 'first' },
        { name: 'first' }
      ]
    }
  }
  render(){
    return (
      <div id="works" className="clearfix">
        {
          this.state.works.map((item, key) => {
            return <Card key={key} />
          })
        }
        <Card />
      </div>  
    )
  }
}

export default Works