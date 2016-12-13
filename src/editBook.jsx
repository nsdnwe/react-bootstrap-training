import React from 'react'

export default class EditBook extends React.Component {
  constants() {
    return {'URL': 'http://NsdBooksTrainingApi.azurewebsites.net/Api/Books/'}
  }

  constructor(props) {
    super(props)
    this.state = { id: 0, name: "", author: "", description: ""  }
    
    // "0" -> Get the last added book
    $.getJSON(this.constants().URL + "0").done(data => this.setState(data))
  }

  postData() {
    $.ajax({
      url: this.constants().URL,
      type: "POST",
      data: JSON.stringify(this.state),
      dataType: "json",
      contentType: "application/json"
    })
    .done((data) => console.log('Saved with new id ' + data.id))
  }


 
  render() {
    const {name, author, description} = this.state
    var panelStyle = {width: '300px'}
    var controlStyle = {marginBottom: '5px'}

    return (
      <div>
        <div className="panel panel-primary" style={panelStyle}>
          <div className="panel-heading">
            <h2 className="panel-title">Add new book</h2>
          </div>
          <div className="panel-body">
            <input autoFocus placeholder="Book name" className="form-control" style={controlStyle} defaultValue={name} onChange={(me) => this.setState({name: me.target.value})}></input>

            <input placeholder="Author" className="form-control" style={controlStyle} defaultValue={author} onChange={(me) => this.setState({author: me.target.value})}></input>

            <input placeholder="Description" className="form-control" style={controlStyle} defaultValue={description} onChange={(me) => this.setState({description: me.target.value})}></input>

            <button className="btn btn-primary btn-block" style={controlStyle} onClick={ this.postData.bind(this) }>OK</button>

          </div>
        </div>
      </div>
    )
  }
}
