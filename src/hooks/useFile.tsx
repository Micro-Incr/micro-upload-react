import { useEffect, useState } from 'react';
import axios from '../components/api/server';

const useFile = () => {
  const [files, setFiles] = useState<Blob[]>([]);

  useEffect(() => {
    if (files.length === 0) {
    } else {
      const formData = new FormData();
      formData.append('image', files[0]);
      axios.post('/images', formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }).then((res) => {
        if (res.status === 201) {
          console.log('good job');
        }
      });
    }
  }, [files]);

  return { files, setFiles };
};

export default useFile;
