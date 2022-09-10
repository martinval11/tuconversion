const Data = ({ isBit, isB, isKB, isMB, isGB, isTB, isPB, isEB, isZB }) => {
  if (isBit) {
    return (
      <>
        <div className='d-none'>
          <span className="input-group-text" id="basic-addon1">Bits</span>
          <input className='form-control' type='text' placeholder='Bits en bits' id='bits' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bytes</span>
          <input className='form-control' type='text' placeholder='Bits en bytes' id='bytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Kilobytes</span>
          <input className='form-control' type='text' placeholder='Bits en kilobytes' id='kilobytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Megabytes</span>
          <input className='form-control' type='text' placeholder='Bits en megabytes' id='megabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Gigabytes</span>
          <input className='form-control' type='text' placeholder='Bits en gigabytes' id='gigabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Terabytes</span>
          <input className='form-control' type='text' placeholder='Bits en terabytes' id='terabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Petabytes</span>
          <input className='form-control' type='text' placeholder='Bits en petabytes' id='petabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Exabytes</span>
          <input className='form-control' type='text' placeholder='Bits en exabytes' id='exabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Zettabytes</span>
          <input className='form-control' type='text' placeholder='Bits en zettabytes' id='zettabytes' readOnly />
        </div>
      </>
    );
  }

  if (isB) {
    return (
      <>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bits</span>
          <input className='form-control' type='text' placeholder='Bytes en bits' id='bits' readOnly />
        </div>

        <div className='d-none'>
          <span className="input-group-text" id="basic-addon1">Bytes</span>
          <input className='form-control' type='text' placeholder='Bytes en bytes' id='bytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Kilobytes</span>
          <input className='form-control' type='text' placeholder='Bytes en kilobytes' id='kilobytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Megabytes</span>
          <input className='form-control' type='text' placeholder='Bytes en megabytes' id='megabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Gigabytes</span>
          <input className='form-control' type='text' placeholder='Bytes en gigabytes' id='gigabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Terabytes</span>
          <input className='form-control' type='text' placeholder='Bytes en terabytes' id='terabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Petabytes</span>
          <input className='form-control' type='text' placeholder='Bytes en petabytes' id='petabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Exabytes</span>
          <input className='form-control' type='text' placeholder='Bytes en exabytes' id='exabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Zettabytes</span>
          <input className='form-control' type='text' placeholder='Bytes en zettabytes' id='zettabytes' readOnly />
        </div>
      </>
    );
  }

  if (isKB) {
    return (
      <>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bits</span>
          <input className='form-control' type='text' placeholder='Kilobytes en bits' id='bits' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bytes</span>
          <input className='form-control' type='text' placeholder='Kilobytes en bytes' id='bytes' readOnly />
        </div>

        <div className='d-none'>
          <span className="input-group-text" id="basic-addon1">Kilobytes</span>
          <input className='form-control' type='text' placeholder='Kilobytes en kilobytes' id='kilobytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Megabytes</span>
          <input className='form-control' type='text' placeholder='Kilobytes en megabytes' id='megabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Gigabytes</span>
          <input className='form-control' type='text' placeholder='Kilobytes en gigabytes' id='gigabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Terabytes</span>
          <input className='form-control' type='text' placeholder='Kilobytes en terabytes' id='terabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Petabytes</span>
          <input className='form-control' type='text' placeholder='Kilobytes en petabytes' id='petabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Exabytes</span>
          <input className='form-control' type='text' placeholder='Kilobytes en exabytes' id='exabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Zettabytes</span>
          <input className='form-control' type='text' placeholder='Kilobytes en zettabytes' id='zettabytes' readOnly />
        </div>
      </>
    );
  }

  if (isMB) {
    return (
      <>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bits</span>
          <input className='form-control' type='text' placeholder='Megabytes en bits' id='bits' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bytes</span>
          <input className='form-control' type='text' placeholder='Megabytes en bytes' id='bytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Kilobytes</span>
          <input className='form-control' type='text' placeholder='Megabytes en kilobytes' id='kilobytes' readOnly />
        </div>

        <div className='d-none'>
          <span className="input-group-text" id="basic-addon1">Megabytes</span>
          <input className='form-control' type='text' placeholder='Megabytes en megabytes' id='megabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Gigabytes</span>
          <input className='form-control' type='text' placeholder='Megabytes en gigabytes' id='gigabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Terabytes</span>
          <input className='form-control' type='text' placeholder='Megabytes en terabytes' id='terabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Petabytes</span>
          <input className='form-control' type='text' placeholder='Megabytes en petabytes' id='petabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Exabytes</span>
          <input className='form-control' type='text' placeholder='Megabytes en exabytes' id='exabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Zettabytes</span>
          <input className='form-control' type='text' placeholder='Megabytes en zettabytes' id='zettabytes' readOnly />
        </div>
      </>
    );
  }

	if (isGB) {
    return (
      <>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bits</span>
          <input className='form-control' type='text' placeholder='Gigabytes en bits' id='bits' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bytes</span>
          <input className='form-control' type='text' placeholder='Gigabytes en bytes' id='bytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Kilobytes</span>
          <input className='form-control' type='text' placeholder='Gigabytes en kilobytes' id='kilobytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Megabytes</span>
          <input className='form-control' type='text' placeholder='Gigabytes en megabytes' id='megabytes' readOnly />
        </div>

        <div className='d-none'>
          <span className="input-group-text" id="basic-addon1">Gigabytes</span>
          <input className='form-control' type='text' placeholder='Gigabytes en gigabytes' id='gigabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Terabytes</span>
          <input className='form-control' type='text' placeholder='Gigabytes en terabytes' id='terabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Petabytes</span>
          <input className='form-control' type='text' placeholder='Gigabytes en petabytes' id='petabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Exabytes</span>
          <input className='form-control' type='text' placeholder='Gigabytes en exabytes' id='exabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Zettabytes</span>
          <input className='form-control' type='text' placeholder='Gigabytes en zettabytes' id='zettabytes' readOnly />
        </div>
      </>
    );
  }

	if (isTB) {
    return (
      <>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bits</span>
          <input className='form-control' type='text' placeholder='Terabytes en bits' id='bits' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bytes</span>
          <input className='form-control' type='text' placeholder='Terabytes en bytes' id='bytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Kilobytes</span>
          <input className='form-control' type='text' placeholder='Terabytes en kilobytes' id='kilobytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Megabytes</span>
          <input className='form-control' type='text' placeholder='Terabytes en megabytes' id='megabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Gigabytes</span>
          <input className='form-control' type='text' placeholder='Terabytes en gigabytes' id='gigabytes' readOnly />
        </div>

        <div className="d-none">
          <span className="input-group-text" id="basic-addon1">Terabytes</span>
          <input className='form-control' type='text' placeholder='Terabytes en terabytes' id='terabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Petabytes</span>
          <input className='form-control' type='text' placeholder='Terabytes en petabytes' id='petabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Exabytes</span>
          <input className='form-control' type='text' placeholder='Terabytes en exabytes' id='exabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Zettabytes</span>
          <input className='form-control' type='text' placeholder='Terabytes en zettabytes' id='zettabytes' readOnly />
        </div>
      </>
    );
  }

	if (isPB) {
    return (
      <>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bits</span>
          <input className='form-control' type='text' placeholder='Petabytes en bits' id='bits' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bytes</span>
          <input className='form-control' type='text' placeholder='Petabytes en bytes' id='bytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Kilobytes</span>
          <input className='form-control' type='text' placeholder='Petabytes en kilobytes' id='kilobytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Megabytes</span>
          <input className='form-control' type='text' placeholder='Petabytes en megabytes' id='megabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Gigabytes</span>
          <input className='form-control' type='text' placeholder='Petabytes en gigabytes' id='gigabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Terabytes</span>
          <input className='form-control' type='text' placeholder='Petabytes en terabytes' id='terabytes' readOnly />
        </div>

        <div className="d-none">
          <span className="input-group-text" id="basic-addon1">Petabytes</span>
          <input className='form-control' type='text' placeholder='Petabytes en petabytes' id='petabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Exabytes</span>
          <input className='form-control' type='text' placeholder='Petabytes en exabytes' id='exabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Zettabytes</span>
          <input className='form-control' type='text' placeholder='Petabytes en zettabytes' id='zettabytes' readOnly />
        </div>
      </>
    );
  }

	if (isEB) {
    return (
      <>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bits</span>
          <input className='form-control' type='text' placeholder='Exabytes en bits' id='bits' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bytes</span>
          <input className='form-control' type='text' placeholder='Exabytes en bytes ' id='bytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Kilobytes</span>
          <input className='form-control' type='text' placeholder='Exabytes en kilobytes' id='kilobytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Megabytes</span>
          <input className='form-control' type='text' placeholder='Exabytes en megabytes' id='megabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Gigabytes</span>
          <input className='form-control' type='text' placeholder='Exabytes en gigabytes' id='gigabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Terabytes</span>
          <input className='form-control' type='text' placeholder='Exabytes en terabytes' id='terabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Petabytes</span>
          <input className='form-control' type='text' placeholder='Exabytes en petabytes' id='petabytes' readOnly />
        </div>

        <div className="d-none">
          <span className="input-group-text" id="basic-addon1">Exabytes</span>
          <input className='form-control' type='text' placeholder='Exabytes en exabytes' id='exabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Zettabytes</span>
          <input className='form-control' type='text' placeholder='Exabytes en zettabytes' id='zettabytes' readOnly />
        </div>
      </>
    );
  }

	if (isZB) {
    return (
      <>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bits</span>
          <input className='form-control' type='text' placeholder='Zettabytes en bits' id='bits' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Bytes</span>
          <input className='form-control' type='text' placeholder='Zettabytes en bytes' id='bytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Kilobytes</span>
          <input className='form-control' type='text' placeholder='Zettabytes en kilobytes' id='kilobytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Megabytes</span>
          <input className='form-control' type='text' placeholder='Zettabytes en megabytes' id='megabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Gigabytes</span>
          <input className='form-control' type='text' placeholder='Zettabytes en gigabytes' id='gigabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Terabytes</span>
          <input className='form-control' type='text' placeholder='Zettabytes en terabytes' id='terabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Petabytes</span>
          <input className='form-control' type='text' placeholder='Zettabytes en petabytes' id='petabytes' readOnly />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Exabytes</span>
          <input className='form-control' type='text' placeholder='Zettabytes en exabytes' id='exabytes' readOnly />
        </div>

        <div className="d-none">
          <span className="input-group-text" id="basic-addon1">Zettabytes</span>
          <input className='form-control' type='text' placeholder='Zettabytes en Zettabytes' id='zettabytes' readOnly />
        </div>
      </>
    );
  }
};

export default Data;
