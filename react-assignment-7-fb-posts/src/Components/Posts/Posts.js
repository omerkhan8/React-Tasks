import React from 'react';
import './Posts.css';
import FbImageLibrary from 'react-fb-image-grid';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { data } = this.props;
        const styleIcon = {
            fontSize: "36px",
            color: '#737880',
            float: 'right',
            cursor: 'pointer'
        }
        // console.log(this.props);
        return (
            <div className="main-post-div">
                <div style={{ padding: '10px', height: '80px' }}>
                    <div className="userdata-div">
                        <div className="avatar-div">
                            <img src={data.avatar} alt="display" />
                        </div>
                        <div className="username-div">
                            <h2>{data.createdBy}</h2>
                            <p>May 15,2017 . Edited</p>
                        </div>
                    </div>
                    <i className="fa fa-ellipsis-h" style={styleIcon}></i>
                </div>
                <div className="description-div">
                    <p>{data.description}</p>
                </div>
                <div>
                    <FbImageLibrary images={data.images}/>
                </div>
            </div>
        )
    }
}

export default Posts;