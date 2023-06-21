import React from 'react'
import {useEffect , useState} from 'react'
import './Post.scss'


function Post(props) {
    let current_path = window.location.pathname,
    slug = current_path.split('/')[2];
    const [postDetails , setPostDetails] = useState(null)
    useEffect(() => {
        props.getPost(slug , onFetchPosts)
    },[])

    const onFetchPosts = (resp) => {
        if(resp && resp.data){
            setPostDetails(resp.data)
        }
    }

  return (
    <>
    {postDetails && 
        <div className='post-details-container'>
            <div className='news-description'>
                <p className='news-category'>{postDetails.category}</p>
                <p className='news-title'>{postDetails.title}</p>
                <div className='author-details'>
                <div className='author-pic'>
                    <img src = {postDetails?.author?.profileUrl} alt = "author-profile" />
                </div>
                <div className='author-name'>
                  <p className='author-name-headline'>{postDetails?.author?.name}</p>
                  <p className='publish-desc'>{postDetails?.author?.published_at}</p>
                </div>
            </div>
            </div>
            <div className='post-details'>
                <div className='post-details-img'>
                    <img src = {postDetails.postImg} alt = "post-image" />
                </div>
                <div className='post-content'>
                    <div dangerouslySetInnerHTML={{__html : postDetails.description}}></div>
                </div>
            </div>
        </div>
    }
    </>
    
  )
}

export default Post