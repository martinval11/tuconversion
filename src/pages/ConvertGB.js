import '../scss/App.scss';
import Data from '../components/Data';
import separator from '../functions/separator';
import HowToCalc from '../components/HowToCalc';

const ConvertGB = () => {
  const convertGigabytes = () => {
    let inputToConvert = document.querySelector('#val');

    let alertMessage = document.querySelector('#alert');
    if (inputToConvert.value === '') {
      alertMessage.style.display = 'inherit';
      setTimeout(() => {
        alertMessage.style.display = 'none';
      }, 4500);
    } else {
      alertMessage.style.display = 'none';
      let inputToBits = parseFloat(inputToConvert.value) * 1024 * 1024 * 1024;
      document
        .querySelector('#bits')
        .setAttribute('value', separator(inputToBits) + ' Bits');

      let inputToB = parseFloat(inputToConvert.value) * 1024 * 1024;
      document
        .querySelector('#bytes')
        .setAttribute('value', separator(inputToB) + ' B');

      let inputToKB = parseFloat(inputToConvert.value) * 1024 * 1024;
      document
        .querySelector('#kilobytes')
        .setAttribute('value', separator(inputToKB) + ' KB');

      let inputToMB = parseFloat(inputToConvert.value) * 1024;
      document
        .querySelector('#megabytes')
        .setAttribute('value', separator(inputToMB) + ' MB');

      let inputToGB = parseFloat(inputToConvert.value) * 4098;
      document
        .querySelector('#gigabytes')
        .setAttribute('value', separator(inputToGB) + ' GB');

      let inputToTB = parseFloat(inputToConvert.value) / 1024;
      document
        .querySelector('#terabytes')
        .setAttribute('value', inputToTB + ' TB');

      let inputToPB = parseFloat(inputToConvert.value) / 1024 / 1024;
      document
        .querySelector('#petabytes')
        .setAttribute('value', inputToPB + ' PB');

      let inputToEB = parseFloat(inputToConvert.value) / 1024 / 1024 / 1024;
      document
        .querySelector('#exabytes')
        .setAttribute('value', separator(inputToEB) + ' EB');

      let inputToZB =
        parseFloat(inputToConvert.value) / 1024 / 1024 / 1024 / 1024;
      document
        .querySelector('#zettabytes')
        .setAttribute('value', separator(inputToZB) + ' ZB');
    }
  };

  return (
    <div className='container'>
      <h1>Conversi??n de Gigabytes</h1>
      <div className='parent'>
        <div className='div1'>
          <form>
            <label>
              <div id='contain'>
                <strong>Convertir Gigabytes</strong>
              </div>
              <hr />

              <div className='input-group mb-3'>
                <span className='input-group-text' id='basic-addon1'>
                  N??mero
                </span>
                <input
                  className='form-control'
                  type='number'
                  min='1'
                  placeholder='Por ejemplo: 1'
                  id='val'
                  title='Introduce un n??mero'
                />
                <span id='type-data'>GB</span>
              </div>

              <div className='contain'>
                <button className='btn btn-danger' id='alert'>
                  Debes ingresar un n??mero.
                </button>

                <button
                  className='btn btn-success'
                  type='button'
                  id='convert'
                  onClick={(evt) => {
                    convertGigabytes();
                    evt.preventDefault();
                  }}>
                  Convertir
                </button>
              </div>
            </label>
          </form>
          <HowToCalc isGB isDesktop='true' />
        </div>
        <div className='div2'>
          <div id='contain'>
            <strong>Base 2</strong>
          </div>
          <hr />
          <Data isGB />
        </div>
      </div>
      <HowToCalc isGB isDesktop='false' />
    </div>
  );
};

export default ConvertGB;
