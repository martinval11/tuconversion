const HowToCalc = ({
  isBit,
  isB,
  isKB,
  isMB,
  isGB,
  isTB,
  isPB,
  isEB,
  isZB,
	isDesktop
}) => {
  if (isBit) {
    return (
      <main id={isDesktop.toString()}>
        <h3>¿Cómo Calcular?</h3>
				<hr />
        <div>
          <strong>De Bits a Bytes: </strong>
          <code>número &#247; 8</code>
        </div>
        <div>
          <strong>De Bits a Kilobytes: </strong>
          <code>número &#247; (1024 * 2)</code>
        </div>

				<div>
          <strong>De Bits a Megabytes: </strong>
          <code>número &#247; (1024 * 3)</code>
        </div>

				<div>
          <strong>De Bits a Gigabytes: </strong>
          <code>número &#247; (1024 * 4)</code>
        </div>

				<div>
          <strong>De Bits a Terabytes: </strong>
          <code>número &#247; (1024 * 5)</code>
        </div>

				<div>
          <strong>De Bits a Petabytes: </strong>
          <code>número &#247; (1024 * 6)</code>
        </div>

				<div>
          <strong>De Bits a Exabytes: </strong>
          <code>número &#247; (1024 * 7)</code>
        </div>

				<div>
          <strong>De Bits a Zettabytes: </strong>
          <code>número &#247; (1024 * 8)</code>
        </div>
      </main>
    );
  }

  if (isB) {
    return (
      <main id={isDesktop.toString()}>
        <h3>¿Cómo Calcular?</h3>
				<hr />
        <div>
          <strong>De Bytes a Bits: </strong>
          <code>número * 8</code>
        </div>
        <div>
          <strong>De Bytes a Kilobytes: </strong>
          <code>número * 1024</code>
        </div>

				<div>
          <strong>De Bytes a Megabytes: </strong>
          <code>número &#247; (1024 * 2)</code>
        </div>

				<div>
          <strong>De Bytes a Gigabytes: </strong>
          <code>número &#247; (1024 * 3)</code>
        </div>

				<div>
          <strong>De Bytes a Terabytes: </strong>
          <code>número &#247; (1024 * 4)</code>
        </div>

				<div>
          <strong>De Bytes a Petabytes: </strong>
          <code>número &#247; (1024 * 5)</code>
        </div>

				<div>
          <strong>De Bytes a Exabytes: </strong>
          <code>número &#247; (1024 * 6)</code>
        </div>

				<div>
          <strong>De Bytes a Zettabytes: </strong>
          <code>número &#247; (1024 * 7)</code>
        </div>
      </main>
    );
  }

  if (isKB) {
    return (
      <main id={isDesktop.toString()}>
        <h3>¿Cómo Calcular?</h3>
				<hr />
        <div>
          <strong>De Kilobytes a Bits: </strong>
          <code>número * (1024 * 2)</code>
        </div>
        <div>
          <strong>De Kilobytes a Bytes: </strong>
          <code>número * 1024</code>
        </div>

				<div>
          <strong>De Kilobytes a Megabytes: </strong>
          <code>número &#247; 1024</code>
        </div>

				<div>
          <strong>De Kilobytes a Gigabytes: </strong>
          <code>número &#247; (1024 * 2)</code>
        </div>

				<div>
          <strong>De Kilobytes a Terabytes: </strong>
          <code>número &#247; (1024 * 3)</code>
        </div>

				<div>
          <strong>De Kilobytes a Petabytes: </strong>
          <code>número &#247; (1024 * 4)</code>
        </div>

				<div>
          <strong>De Kilobytes a Exabytes: </strong>
          <code>número &#247; (1024 * 5)</code>
        </div>

				<div>
          <strong>De Kilobytes a Zettabytes: </strong>
          <code>número &#247; (1024 * 6)</code>
        </div>
      </main>
    );
  }

  if (isMB) {
    return (
      <main id={isDesktop.toString()}>
        <h3>¿Cómo Calcular?</h3>
				<hr />
        <div>
          <strong>De Megabytes a Bits: </strong>
          <code>número * (1024 * 3)</code>
        </div>
        <div>
          <strong>De Megabytes a Bytes: </strong>
          <code>número * (1024 * 2)</code>
        </div>

				<div>
          <strong>De Megabytes a Kilobytes: </strong>
          <code>número * 1024</code>
        </div>

				<div>
          <strong>De Megabytes a Gigabytes: </strong>
          <code>número &#247; 1024</code>
        </div>

				<div>
          <strong>De Megabytes a Terabytes: </strong>
          <code>número &#247; (1024 * 2)</code>
        </div>

				<div>
          <strong>De Megabytes a Petabytes: </strong>
          <code>número &#247; (1024 * 3)</code>
        </div>

				<div>
          <strong>De Megabytes a Exabytes: </strong>
          <code>número &#247; (1024 * 4)</code>
        </div>

				<div>
          <strong>De Megabytes a Zettabytes: </strong>
          <code>número &#247; (1024 * 5)</code>
        </div>
      </main>
    );
  }

  if (isGB) {
    return (
      <main id={isDesktop.toString()}>
        <h3>¿Cómo Calcular?</h3>
				<hr />
        <div>
          <strong>De Gigabytes a Bits: </strong>
          <code>número * (1024 * 4)</code>
        </div>
        <div>
          <strong>De Gigabytes a Bytes: </strong>
          <code>número * (1024 * 3)</code>
        </div>

				<div>
          <strong>De Gigabytes a Kilobytes: </strong>
          <code>número * (1024 * 2)</code>
        </div>

				<div>
          <strong>De Gigabytes a Megabytes: </strong>
          <code>número * 1024</code>
        </div>

				<div>
          <strong>De Gigabytes a Terabytes: </strong>
          <code>número &#247; 1024</code>
        </div>

				<div>
          <strong>De Gigabytes a Petabytes: </strong>
          <code>número &#247; (1024 * 2)</code>
        </div>

				<div>
          <strong>De Gigabytes a Exabytes: </strong>
          <code>número &#247; (1024 * 3)</code>
        </div>

				<div>
          <strong>De Gigabytes a Zettabytes: </strong>
          <code>número &#247; (1024 * 4)</code>
        </div>
      </main>
    );
  }

  if (isTB) {
    return (
      <main id={isDesktop.toString()}>
        <h3>¿Cómo Calcular?</h3>
				<hr />
        <div>
          <strong>De Terabytes a Bits: </strong>
          <code>número * (1024 * 5)</code>
        </div>
        <div>
          <strong>De Terabytes a Bytes: </strong>
          <code>número * (1024 * 4)</code>
        </div>

				<div>
          <strong>De Terabytes a Kilobytes: </strong>
          <code>número * (1024 * 3)</code>
        </div>

				<div>
          <strong>De Terabytes a Megabytes: </strong>
          <code>número * (1024 * 2)</code>
        </div>

				<div>
          <strong>De Terabytes a Gigabytes: </strong>
          <code>número * 1024</code>
        </div>

				<div>
          <strong>De Terabytes a Petabytes: </strong>
          <code>número &#247; 1024</code>
        </div>

				<div>
          <strong>De Terabytes a Exabytes: </strong>
          <code>número &#247; (1024 * 2)</code>
        </div>

				<div>
          <strong>De Terabytes a Zettabytes: </strong>
          <code>número &#247; (1024 * 3)</code>
        </div>
      </main>
    );
  }

  if (isPB) {
    return (
      <main id={isDesktop.toString()}>
        <h3>¿Cómo Calcular?</h3>
				<hr />
        <div>
          <strong>De Petabytes a Bits: </strong>
          <code>número * (1024 * 6)</code>
        </div>
        <div>
          <strong>De Petabytes a Bytes: </strong>
          <code>número * (1024 * 5)</code>
        </div>

				<div>
          <strong>De Petabytes a Kilobytes: </strong>
          <code>número * (1024 * 4)</code>
        </div>

				<div>
          <strong>De Petabytes a Megabytes: </strong>
          <code>número * (1024 * 3)</code>
        </div>

				<div>
          <strong>De Petabytes a Gigabytes: </strong>
          <code>número * (1024 * 2)</code>
        </div>

				<div>
          <strong>De Petabytes a Terabytes: </strong>
          <code>número * 1024</code>
        </div>

				<div>
          <strong>De Petabytes a Exabytes: </strong>
          <code>número &#247; 1024</code>
        </div>

				<div>
          <strong>De Petabytes a Zettabytes: </strong>
          <code>número &#247; (1024 * 2)</code>
        </div>
      </main>
    );
  }

  if (isEB) {
    return (
      <main id={isDesktop.toString()}>
        <h3>¿Cómo Calcular?</h3>
				<hr />
        <div>
          <strong>De Exabytes a Bits: </strong>
          <code>número * (1024 * 7)</code>
        </div>
        <div>
          <strong>De Exabytes a Bytes: </strong>
          <code>número * (1024 * 6)</code>
        </div>

				<div>
          <strong>De Exabytes a Kilobytes: </strong>
          <code>número * (1024 * 5)</code>
        </div>

				<div>
          <strong>De Exabytes a Megabytes: </strong>
          <code>número * (1024 * 4)</code>
        </div>

				<div>
          <strong>De Exabytes a Gigabytes: </strong>
          <code>número * (1024 * 3)</code>
        </div>

				<div>
          <strong>De Exabytes a Terabytes: </strong>
          <code>número * (1024 * 2)</code>
        </div>

				<div>
          <strong>De Exabytes a Petabytes: </strong>
          <code>número * 1024</code>
        </div>

				<div>
          <strong>De Exabytes a Zettabytes: </strong>
          <code>número &#247; 1024</code>
        </div>
      </main>
    );
  }

  if (isZB) {
    return (
      <main id={isDesktop.toString()}>
        <h3>¿Cómo Calcular?</h3>
				<hr />
        <div>
          <strong>De Zettabytes a Bits: </strong>
          <code>número * (1024 * 8)</code>
        </div>
        <div>
          <strong>De Zettabytes a Bytes: </strong>
          <code>número * (1024 * 7)</code>
        </div>

				<div>
          <strong>De Zettabytes a Kilobytes: </strong>
          <code>número * (1024 * 6)</code>
        </div>

				<div>
          <strong>De Zettabytes a Megabytes: </strong>
          <code>número * (1024 * 5)</code>
        </div>

				<div>
          <strong>De Zettabytes a Gigabytes: </strong>
          <code>número * (1024 * 4)</code>
        </div>

				<div>
          <strong>De Zettabytes a Terabytes: </strong>
          <code>número * (1024 * 3)</code>
        </div>

				<div>
          <strong>De Zettabytes a Petabytes: </strong>
          <code>número * (1024 * 2)</code>
        </div>

				<div>
          <strong>De Zettabytes a Exabytes: </strong>
          <code>número * 1024</code>
        </div>
      </main>
    );
  }
};

export default HowToCalc;
