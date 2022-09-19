import './scss/App.scss';
import Data from './components/Data';
import HowToCalc from './components/HowToCalc';

const App = () => {
  const convertKb = () => {
    let inputToConvert = document.querySelector('#val');

    let alertMessage = document.querySelector('#alert');
    if (inputToConvert.value === '') {
      alertMessage.style.display = 'inherit';
      setTimeout(() => {
        alertMessage.style.display = 'none';
      }, 4500);
    } else {
      alertMessage.style.display = 'none';
      let inputToBT = parseFloat(inputToConvert.value) * 1024 * 1024;
      document
        .querySelector('#bits')
        .setAttribute('value', inputToBT + ' Bits');

      let inputToB = parseFloat(inputToConvert.value) * 1024;
      document.querySelector('#bytes').setAttribute('value', inputToB + ' B');

      let inputToMB = parseFloat(inputToConvert.value) / 1024;
      document
        .querySelector('#megabytes')
        .setAttribute('value', inputToMB + ' MB');

      let inputToGB = parseFloat(inputToConvert.value) / 4098;
      document
        .querySelector('#gigabytes')
        .setAttribute('value', inputToGB + ' GB');

      let inputToTB = parseFloat(inputToConvert.value) / 1024 / 1024 / 1024;
      document
        .querySelector('#terabytes')
        .setAttribute('value', inputToTB + ' TB');

      let inputToPB =
        parseFloat(inputToConvert.value) / 1024 / 1024 / 1024 / 1024;
      document
        .querySelector('#petabytes')
        .setAttribute('value', inputToPB + ' PB');

      let inputToEB =
        parseFloat(inputToConvert.value) / 1024 / 1024 / 1024 / 1024 / 1024;
      document
        .querySelector('#exabytes')
        .setAttribute('value', inputToEB + ' EB');

      let inputToZB =
        parseFloat(inputToConvert.value) /
        1024 /
        1024 /
        1024 /
        1024 /
        1024 /
        1024;
      document
        .querySelector('#zettabytes')
        .setAttribute('value', inputToZB + ' ZB');
    }
  };

  return (
    <div className='container'>
      <h1>Conversión de Kilobytes</h1>
      <div className='parent'>
        <div className='div1'>
          <form>
            <label>
              <div id='contain'>
                <strong>Convertir Kilobytes</strong>
              </div>
              <hr />

              <div className='input-group mb-3'>
                <span className='input-group-text' id='basic-addon1'>
                  Número
                </span>
                <input
                  className='form-control'
                  type='number'
                  min='1'
                  placeholder='Por ejemplo: 1'
                  id='val'
                  title='Introduce un número'
                />
              </div>

              <div className='contain'>
                <button className='btn btn-danger' id='alert'>
                  Debes ingresar un número.
                </button>

                <button
                  className='btn btn-success'
                  type='button'
                  id='convert'
                  onClick={(evt) => {
                    convertKb();
                    evt.preventDefault();
                  }}>
                  Convertir
                </button>
              </div>
            </label>
          </form>
          <HowToCalc isKB isDesktop='true' />
        </div>
        <div className='div2'>
          <div id='contain'>
            <strong>Base 2</strong>
          </div>
          <hr />
          <Data isKB />
        </div>
      </div>
      <HowToCalc isKB isDesktop='false' />
    </div>
  );
};

export default App;
