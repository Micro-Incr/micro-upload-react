import React, { useCallback, useEffect, useRef, useState } from 'react';
import './DragAndDrop.scss';
import { RootState } from '../../../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { uploadFile } from '../../../actions/uploadActions';
import { connect } from 'react-redux';

interface IDragAndDropProps {
  imgSrc: string
  uploadFile: any
  setFiles: (files: Blob[]) => void
  isLoading: (loading: boolean) => void
}

/**
 * Drag and drop component
 * @param props
 * @constructor
 */
const DragAndDrop = ({ uploadFile, imgSrc, setFiles, isLoading }: IDragAndDropProps) => {


  const [isDragZoneAvailable, setDragZoneAvailable] = useState<boolean>(true);
  const [tempFiles, setTempFiles] = useState<Blob[]>();

  const style = {
    border: isDragZoneAvailable ? '1px dashed #97BEF4' : '1px dashed purple'
  };

  const dragAndDropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(tempFiles){
      console.log('hello');
      setFiles(tempFiles);
    }
  }, [tempFiles, setFiles]);

  //const { setFiles } = useFile(props.uploadFile);

  const handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    //console.log('Drag')
    setDragZoneAvailable(false);
  };
  const handleDragIn = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    //console.log('Drag In')
    setDragZoneAvailable(false);
  };
  const handleDragOut = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    //console.log('Drag Out')
    setDragZoneAvailable(true);
  };

  const handleDrop = useCallback((e: any) => {
    let i;
    e.preventDefault();
    e.stopPropagation();
    //console.log('Drag Drop')
    setDragZoneAvailable(true);
    const temp_files = [];
    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (i = 0; i < e.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (e.dataTransfer.items[i].kind === 'file') {
          const file = e.dataTransfer.items[i].getAsFile();
          temp_files.push(file);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (i = 0; i < e.dataTransfer.files.length; i++) {
        //console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name)
      }
    }
    setTempFiles(temp_files);
    isLoading(true);
  }, [setTempFiles, isLoading]);


  useEffect(() => {
    const div = dragAndDropRef.current;
    div!.addEventListener('dragenter', handleDragIn);
    div!.addEventListener('dragleave', handleDragOut);
    div!.addEventListener('dragover', handleDrag);
    div!.addEventListener('drop', handleDrop);

    return function cleanup() {
      //let div = dragAndDropRef.current
      div!.removeEventListener('dragenter', handleDragIn);
      div!.removeEventListener('dragleave', handleDragOut);
      div!.removeEventListener('dragover', handleDrag);
      div!.removeEventListener('drop', handleDrop);
    };
  }, [handleDrop]);

  return (
    <div className={'drag-and-drop'} ref={dragAndDropRef} style={style}>
      <img className={'drag-and-drop-image'} src={imgSrc} alt={'Drag and Drop'} />
      <p>Drag & Drop your image here</p>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    uploadState: state.uploadState
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {
    uploadFile: (formData: FormData) => dispatch(uploadFile(formData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDrop);
