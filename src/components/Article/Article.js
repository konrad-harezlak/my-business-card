import React from 'react';
import './Article.scss'
import Image from './Images/background.jpg'
import jsonData from './JsonFiles.json'
export default class Article extends React.Component {
    constructor() {
        super();
        this.state={
            inputValue:'',
        };
    }


    handler = () => {
        let {inputValue} = this.state;
        const posts = document.getElementById('posts');
        posts.innerHTML='';
        jsonData.forEach(obj => {
            if (JSON.stringify(obj.title).includes(inputValue)) {
                posts.innerHTML += `
            <div class="singlePost">
                <h3>Tytuł: ${JSON.stringify(obj.title)}</h3>
                <p>Treść: ${(obj.body)}</p>
            </div>
           `
            }
        }
        )
    }
    handleInputChange=(e)=>{
        this.setState({inputValue: e.target.value})
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

                </div>
            </div>
        )
    }
}