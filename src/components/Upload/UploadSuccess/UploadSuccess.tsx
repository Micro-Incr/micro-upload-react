import React from 'react'
import CheckCircle from '../../svgs/CheckCircle'
import './UploadSuccess.scss'
function UploadSuccess() {
  return (
    <div className={'upload-success'}>
      <CheckCircle size={1.5} fill={'#219653'} />
      <h1 className={'upload-success'}>Upload Successfully!</h1>
      <img
        className={'uploaded-image'}
        src={'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'}
        alt={'dummy'} />
      <div className={'flex items-center clipboard-wrapper'}>
        <p>https://helpx.adobe.com/content/dam/help/en/photoshop...</p>
        <button className={'btn btn-primary'}>Copy Link</button>
      </div>
    </div>
  )
}

export default UploadSuccess
