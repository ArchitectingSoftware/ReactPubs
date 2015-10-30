import React, {Component} from 'react';
import PubList from './PubList.jsx'

export default class PubInspector extends Component {

    constructor(){
        super();
        this.state = {paperId : "5", findAll:false, resultsCleared:true};
        this.handleChange = this.handleChange.bind(this);
        this.getAPub = this.getAPub.bind(this);
        this.getAllPubs = this.getAllPubs.bind(this)
        this.clearResults = this.clearResults.bind(this);
    }


    getAllPubs(){
        var newState = this.state;
        newState.findAll = true;
        newState.resultsCleared = false;
        this.setState(newState);
    }

    getAPub(){
        var newState = this.state;
        newState.findAll = false;
        newState.resultsCleared = false;
        this.setState(newState);
    }

    clearResults(){
        var newState = this.state;
        newState.resultsCleared = true;
        this.setState(newState);
    }

    handleChange(e){
        var newState = this.state;
        newState.paperId = e.target.value;
        this.setState(newState)
    }

    render() {

        let theResults;
        if (this.state.resultsCleared) {
            theResults = <div/>;
        }else {
            theResults = <PubList q={this.state}/>;
        }

        return (
            // Add your component markup and other subcomponent references here.
            <div className="container">
                <div className="row">
                    <h2>This is a very simple demo</h2>
                    <p>{JSON.stringify(this.state)}</p>
                    <p>Please search for all publications or a particular publication by its identifier below:</p>
                    <div className="col-lg-2">
                        <button className="btn btn-default" onClick={this.getAllPubs}>Get All Pubs</button>
                    </div>
                    <div className="col-lg-8">
                        <div className="input-group">
                            <span className="input-group-addon">Id:</span>
                            <input type="number" className="form-control" name="paperId"
                                   ref="paperId" value={this.state.paperId}
                                   onChange={ (e) => this.handleChange(e)}  />
                            <span className="input-group-btn">
                                <button className="btn btn-default" onClick={this.getAPub}>Get Pub</button>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <button className="btn btn-default" onClick={this.clearResults}>Clear Search Results</button>
                    </div>
                </div>
                <div>
                    {theResults}
                </div>
            </div>


        );
    }
}