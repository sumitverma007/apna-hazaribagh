import React , {useState} from 'react'
import './CreatePost.scss'
import TextEditor from './TextEditor'
// import ImageUploader from 'react-images-upload'
import ImageUploading from 'react-images-uploading';
import { UploadImg } from './UploadImg';
import { Twitter } from 'react-social-sharing/dist-modules';
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

    const onDrop = (pictureFiles , pictureDatUrl) => {
        console.log(pictureFiles , pictureDatUrl)
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
                    {/* <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={() => onDrop()}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    singleImage = {true}
                    /> */}
                    <UploadImg />
                </div>

                <div className='news-desc'>
                    <div className=''>Write Your News</div>
                    <TextEditor
                        initialValue = {newsContent?.description}
                        onBlur = {(key , content) => onFieldBlur(key , content)}
                    />
                </div>

            </div>
        )
    }

  return (
    <div className='create-post-container'>
        <div className='create-post'>
            <button className='create-post-btn' onClick = {() => setOpenDrawer(true)}>Create New News</button>
        </div>
        <Twitter
        link="https://github.com"
        />
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