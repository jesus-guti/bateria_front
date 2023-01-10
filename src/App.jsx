import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { postSample } from './utils/api'
import TextField from '@mui/material/TextField';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import BasicDatePicker from './components/form/BasicDatePicker/BasicDatePicker';
import FileUpload from './components/FileUpload/FileUpload';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
function App() {
  const [files, setFiles] = useState([]);

  function handleSubmit(event) {
    event.preventDefault()
    postSample('/api', formData)
  }

  console.log(files)

  return (
    <div className="App">
      <div className='flex gap-10'>

        <FilePond
          className="w-96"
          files={files}
          instantUpload="true"
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={50}
          server="http://192.168.196.44:7777/upload/"
          name="files"
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <h2 className='font-bold text-3xl'>Configurar Muestra</h2>
            <hr className='border-mediumgray my-4 absolute bottom-24 right-0 w-full' />
            <div className="flex items-center gap-3">
              <label htmlFor="name">Nombre: </label>
              <TextField id="name" label="Name..." variant="outlined" />
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="name">Fecha: </label>
              <BasicDatePicker />
            </div>
            <div className='flex items-center justify-end gap-3 mt-12'>
              <button onClick={handleSubmit} className='bg-cyan-400 rounded-xl font-medium text-black px-4 py-3 transition-all'>
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App