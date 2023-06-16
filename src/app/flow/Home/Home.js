import React , {useEffect , useState} from 'react'
import './Home.scss'
function Home(props) {
    const [postDetails  , setPostDetails] = useState(null)
    useEffect(() => {
         props.getHomePost(onFetchHomePost)
    },[])

    const onFetchHomePost = (resp) => {
        if(resp && resp.data && resp.data.homeData){
            setPostDetails(resp.data.homeData)
        }
    }

    const renderNewsCard = (newsArr  , sectionName) => {
        // console.log(newsArr)
        return (
            <>
            <div className='section-title'>{sectionName}</div>
            {newsArr.map((newsObj,idx) => {
                return <div className='news-card' onClick={() => window.location.href = newsObj.url}>
                    <div className='published-at'>{newsObj["published_at"]}</div>
                    <div className='main-content'>
                        <div className='title-section'>
                            {newsObj["title"]}
                            <div className='cat-div'>
                            <span className='category'>{newsObj["category"]}</span>
                            </div>
                        </div>
                        <div className='img-section'>
                            <img src = {newsObj["imgUrl"]} />
                        </div>
                    </div>
                </div>
                
            })}
           </>
        )
    }

    console.log(postDetails)
  return (
    <div className='home-container'>
        {postDetails && Object.keys(postDetails).map((key , idx) => {
            console.log(postDetails , key)
          return renderNewsCard(postDetails[key] , key) ;
        })}
    </div>
  )
}

export default Home