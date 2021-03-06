import React, { useCallback, useEffect, useRef, useState } from 'react';
import './DragAndDrop.scss';
import useFile from '../../../hooks/useFile';

interface IDragAndDropProps {
  imgSrc: string
}

/**
 * Drag and drop component
 * @param props
 * @constructor
 */
const DragAndDrop = (props: IDragAndDropProps) => {


  const [isDragZoneAvailable, setDragZoneAvailable] = useState<boolean>(true);

  const style = {
    border: isDragZoneAvailable ? '1px dashed #97BEF4' : '1px dashed purple'
  };

  const dragAndDropRef = useRef<HTMLDivElement>(null);

  const { setFiles } = useFile();


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
    setFiles(temp_files);

  }, [setFiles]);


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
      <img className={'drag-and-drop-image'} src={props.imgSrc} alt={'Drag and Drop'} />
      <p>Drag & Drop your image here</p>
    </div>
  );
};

export default DragAndDrop;
