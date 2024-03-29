import React, { useRef } from 'react';
 import { Editor } from '@tinymce/tinymce-react';

 export default function TextEditor(props) {
   const editorRef = useRef(null);
   return (
     <>
       <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue={props?.initialValue}
         onBlur={() => props?.onBlur('description', editorRef.current.getContent())}
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
     </>
   );
 }