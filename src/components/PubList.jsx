import React, {Component} from 'react';
import request from 'superagent';
import promise from 'es6-promise'
import Constants from '../AppConstants.js'
import PubItem from './PubItem.jsx'
import PubErrorItem from './PubErrorItem.jsx'

export default class PubList extends Component {

    constructor(props) {
        super(props);

        this.callService = this.callService.bind(this);
        this.updateComponentState = this.updateComponentState.bind(this);
        this.state = {data: null, isError: false, allPapers: null, paperId: null};
        this.updateComponentState();
    }


    callService() {
        let URL = Constants.PUBS_API_URL
        URL += (this.props.q.findAll) ? "/publications" : "/publications/" + this.props.q.paperId

        return new Promise((resolve, reject) => {
            request
                .get(URL)
                .set('Content-Type', 'application/json')
                .withCredentials()
                .timeout(10000)
                .query()
                .end((error, res) => {
                    error ? reject(error) : resolve(res);
                });
        });
    }

    //called after component is created

    updateComponentState() {
        this.callService()
            .then(res => {
                let newState = {
                    data: res.body,
                    isError: false,
                    allPapers: this.props.q.findAll,
                    paperId: this.props.q.paperId
                }
                this.setState(newState)
            })
            .catch(err => {
                let newState = {
                    data: err.response.body,
                    isError: true,
                    allPapers: this.props.q.findAll,
                    paperId: this.props.q.paperId
                }
                this.setState(newState)
            })
    }


    shouldComponentUpdate() {
        if ((this.props.q.findAll === this.state.allPapers ) && (this.props.q.paperId === this.state.paperId)) {
            return false;
        }else {
            this.updateComponentState();
            return true;

        }
    }


    render() {
       if (this.state.data) {

            let result = this.state.data //JSON.parse(this.state.data.text);


            if (!result.metadata.error) {
                return (
                    <div>
                        <h2>RESULTS</h2>
                        { result.results.map(row => <PubItem row={row} key={row.id}/>)}
                    </div>

                )
            }
            else {
                return (
                    <div>
                        <PubErrorItem msg={result}/>
                    </div>
                )
            }
        }

        return <div/>
    }
}