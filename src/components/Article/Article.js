import React from 'react';
import './Article.scss'
import Image from '../imageBg/background.jpg'
import jsonData from './data.json'
export default class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            searchResult: jsonData,
            inputValue: '',
            resoults: []
        };
    }


    handler = () => {
        const { inputValue, searchResult } = this.state;
        if(searchResult){
            const filteredResoults = searchResult.filter(obj =>
                JSON.stringify(obj.title).includes(inputValue));
            this.setState({ resoults: filteredResoults })
        }
    }
    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    render() {
        return (
            <div className='article-container'>

                <div className='image-container'>
                    <img src={Image} alt="zdjecie" />
                </div>
                <div className='searchBar'>
                    <h5>'sunt'</h5>
                    <input
                        type="text"
                        placeholder='Wyszukaj...'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handler}>
                        Submit!
                    </button>
                </div>

                <div id='posts'>
                    {this.state.resoults.map((post,index)=>(
                        <div className='singlePost' key={index}>
                            <h3>Tytuł: {post.title}</h3>
                            <p>Treść: {post.body}</p>
                        </div>
                    ))}

                        </div>
            </div>
                )
    }
}