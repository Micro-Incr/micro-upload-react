import { useEffect, useState } from 'react';

const useFile = (uploadFile: (formData: FormData) => {}) => {
  const [files, setFiles] = useState<Blob[]>([]);

  useEffect(() => {
    if (files.length === 0) {
    } else {
      const formData = new FormData();
      formData.append('image', files[0]);
      uploadFile(formData);
    }
  }, [files, uploadFile]);

  return { files, setFiles };
};

export default useFile;
