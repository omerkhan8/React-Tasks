import React from 'react';
import './Posts.css';
import FbImageLibrary from 'react-fb-image-grid';
import moment from 'moment';
import FacebookEmoji from 'react-facebook-emoji';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: false,
            emoji: false,
            smallEmoji: false,
            currIndex: null
        }
    }

    componentDidMount() {
        const { smallEmoji } = this.state;
        var mql = window.matchMedia('(max-width: 500px)');
        mql.addListener((e) => {
            if (e.matches) {
                this.setState({ smallEmoji: true })
            }
            else {
                this.setState({ smallEmoji: false })
            }
        });

        if (window.screen.width <= 500) {
            this.setState({ smallEmoji: true });
        }

    }

    showEmoji(index) {
        const { emoji, currIndex } = this.state;
        setTimeout(() => { this.setState({ currIndex: index, emoji: true }) }, 300)
    }
    hideEmoji() {
        const { emoji } = this.state;
        setTimeout(() => { this.setState({ emoji: false }); }, 600)

    }

    like() {
        const { like } = this.state;
        this.setState({ like: !like });
    }

    render() {
        const { postData } = this.props;
        const { like, emoji, smallEmoji, currIndex } = this.state;
        const styleIcon = {
            fontSize: "28px",
            color: '#737880',
            float: 'right',
            cursor: 'pointer'
        }
        // console.log(this.state);
        return (
            postData.map((data, index) => {
                return (
                    <div className="main-post-div" key={data.createdBy + index}>
                        <div style={{ padding: '10px', height: '70px' }}>
                            <div className="userdata-div">
                                <div className="avatar-div">
                                    <img src={data.avatar} alt="display" />
                                </div>
                                <div className="username-div">
                                    <h2>{data.createdBy}</h2>
                                    <p>{moment().calendar()} . Edited</p>
                                </div>
                            </div>
                            <i className="fa fa-ellipsis-h" style={styleIcon}></i>
                        </div>
                        <div className="description-div">
                            <p>{data.description}</p>
                        </div>
                        <div>
                            {data.images.length > 0 ? <FbImageLibrary images={data.images} hideOverlay={true} />
                                : null}
                        </div>
                        <div>
                            <div className="emoji-div">
                                <FacebookEmoji type="like" size="xxs" />
                                {data.love && <FacebookEmoji type="love" size="xxs" />}
                                {data.wow && <FacebookEmoji type="wow" size="xxs" />}
                                {data.angry && <FacebookEmoji type="angry" size="xxs" />}
                                {data.haha && <FacebookEmoji type="haha" size="xxs" />}
                                {data.sad && <FacebookEmoji type="sad" size="xxs" />}
                                <p>{like && index === currIndex ? `You, ${data.likes}` : data.likes}</p>
                                <p id="comment-p">{data.comments} Comment</p>
                            </div>
                            <div className="line-div">
                            </div>
                            <div style={{ marginTop: "5px" }}>
                                <div className="like-comment">
                                    <span className="like-comment-btn" onMouseOver={() => this.showEmoji(index)} onClick={() => this.like()} onMouseOut={() => this.hideEmoji()}>
                                        {like && index === currIndex ?
                                            <span style={{ color: '#4267B2' }}>
                                                <i className="fa fa-thumbs-o-up" ></i> Like
                                    </span> :
                                            <span>
                                                <i className="fa fa-thumbs-o-up"></i> Like
                                    </span>
                                        }

                                    </span>
                                </div>
                                <div className="like-comment">
                                    <span className="like-comment-btn">
                                        <i className="fa fa-comment-o"></i> Comment
                            </span>
                                </div>
                                <div className="like-comment share-div">
                                    <span className='like-comment-btn'>
                                        <i className="fa fa-share"></i> Share
                            </span>
                                </div>
                            </div>
                            {
                                emoji && !smallEmoji && index === currIndex &&
                                <div className="emoji-hover-div" >
                                    <FacebookEmoji type="like" />
                                    <FacebookEmoji type="love" />
                                    <FacebookEmoji type="wow" />
                                    <FacebookEmoji type="angry" />
                                    <FacebookEmoji type="haha" />
                                    <FacebookEmoji type="sad" />
                                </div>
                            }
                            {
                                emoji && smallEmoji && index === currIndex &&
                                <div className="emoji-hover-div" >
                                    <FacebookEmoji type="like" size="sm" />
                                    <FacebookEmoji type="love" size="sm" />
                                    <FacebookEmoji type="wow" size="sm" />
                                    <FacebookEmoji type="angry" size="sm" />
                                    <FacebookEmoji type="haha" size="sm" />
                                    <FacebookEmoji type="sad" size="sm" />
                                </div>
                            }
                        </div>
                    </div>
                )
            })

        )
    }
}

export default Posts;