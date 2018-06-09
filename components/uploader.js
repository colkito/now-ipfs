import Dropzone from 'react-dropzone'

import { add } from '../libs/ipfs'

class Uploader extends React.Component {
  state = { files: [] }

  onDrop(files) {
    files.forEach(file => {
      const reader = new FileReader()
      reader.onabort = (res) => console.log('file reading was aborted', res)
      reader.onerror = (err) => console.log('file reading has failed', err)
      reader.onloadend = () => {
        const buf = buffer.Buffer(reader.result)
        add(buf)
          .then(response => console.log('>> response', response))
          .catch(err => console.log('>> err', err))
      }

      reader.readAsBinaryString(file)
    })

    this.setState({
      files
    })
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            disablePreview={false}
          >
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}

export default Uploader
