import React , {useState} from 'react'
import './CreatePost.scss'
import TextEditor from './TextEditor'
function CreatePost() {
    let defaultNewsContent = {
        'id' : null,
        'title' : null ,
        'img' : null ,
        'description' : null 
    }
    const [openDrawer , setOpenDrawer] = useState(false)
    const [newsContent , setNewsContent] = useState(defaultNewsContent)
    const onFieldBlur = (key , content) => {
        console.log(key , content)
        let newContent = {...newsContent,[key] : content} ;
        setNewsContent(newContent)
    }

    const renderNews = () => {
        return(
            <div className='news-container'>
                <div className='title-container'>
                    <div className='title'>Title</div>
                    <div className='title-desc'>
                        <input
                         type = "text"
                         defaultValue={newsContent?.title}
                         onBlur={(e) => onFieldBlur('title' , e.target.value)}
                        />
                    </div>
                </div>

                <div className= "upload-img-container">
                    <div className='img-container'>Upload Img</div>
                    Upload img logic
                </div>

                <div className='news-desc'>
                    <div className=''>Write Your News</div>
                    <TextEditor
                        initialValue = {newsContent?.description}
                        onBlur = {(key , content) => onFieldBlur(key , content)}
                    />
                    <p>So</p>
                </div>

            </div>
        )
    }

  return (
    <div className='create-post-container'>
        <div className='create-post'>
            <button className='create-post-btn' onClick = {() => setOpenDrawer(true)}>Create New News</button>
        </div>
        {openDrawer && 
        <div className='drawer-container'>
           <div className='cross-Drawer' onClick={() => setOpenDrawer(false)}>X</div>
           <div className='news-content-container'>
            {renderNews()}
           </div>
        </div>
        }
    </div>
  )
}

export default CreatePost