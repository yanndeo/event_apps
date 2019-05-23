import React, { Component } from 'react'

// import Events collection
import { Events } from '../api/events';

class AddEvent extends Component {

  constructor(props) {
    super(props)

    this.state = {
        title:'',
        description:'',
        date:''
    }

  }

    handleChange = (e) => {
        let field = e.target.name;
        this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        let { title, description, date } = this.state
        // TODO: Create backend Meteor methods to save created events
         Events.insert({
          title, description, date
       })
    }



  render() {
    return (
        

      <div className="jumbotron col-md-6" style={{ margin: "0 300px" }} >
          <div className="text-center">
            <h4>Event Sync</h4>
          </div>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter event title"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter event description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Event Date:</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter date in the format mm.dd.yyyy"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-block btn-primary">
              ADD EVENT
            </button>
          </form>
        </div>
    );
  }
}

export default AddEvent