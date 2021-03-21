import React from 'react';
import './style.css';


class Cards extends React.Component{
    constructor (props) {
        super(props)
    }

    render(){
        return(
            <section id='cards'>
                {this.props.data.map((userData) => {
                    return (
                        <div className='card'>
                            <img src={userData.avatar} alt={userData.first_name} />
                            <h1>{userData.email}</h1>
                            <div id='detail'>{userData.first_name} {userData.last_name}</div>
                        </div>
                    );
                })}
            </section>
        );
    }
}

export default Cards;
