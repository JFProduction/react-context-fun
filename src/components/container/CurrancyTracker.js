import React, { Component } from 'react'
import APIManager from '../../utils/APIManager'
import CurrancyPresentation from '../presentation/CurrancyPresentation'
import InputRef from '../presentation/InputRef';

export default class CurrancyTracker extends Component {
    constructor() {
        super()

        this.state = {
            data: [],
            origData: [],
            loading: true
        }

        this.filterRef = React.createRef()
    }

    componentDidMount() {
        APIManager.get('https://api.coinmarketcap.com/v1/ticker/', null, (err, resp) => {
            if (err) {
                console.error(err)
            }

            this.setState({
                data: resp,
                origData: resp,
                loading: false
            })
        })
    }

    filterData() {
        let data = Object.assign([], this.state.origData)

        this.setState({
            data: data.filter(item => {
                return item.name.toLowerCase().indexOf(this.filterRef.current.value.toLowerCase()) !== -1
            })
        })
    }

    render() {
        let { data, loading } = this.state
        return (
            <div className="container row" 
                    style={{ margin: '0 auto', textAlign: 'center' }}>
                <InputRef ref={ this.filterRef }
                    onChange={ () => this.filterData() }
                    placeHolder="filter currancies" />
                {
                    loading
                        ? <div>loading...</div>
                        : data.map((item, idx) => {
                            return <CurrancyPresentation key={ idx } item={ item } />
                          })
                }
            </div>
        )
    }
}