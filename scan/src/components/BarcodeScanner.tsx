import React, { useEffect } from 'react';
import Quagga from 'quagga';

function BarcodeScanner() {
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#barcode-scanner'),
        },
        decoder: {
          readers: ['ean_reader', 'ean_8_reader', 'code_128_reader'],
        },
      },
      function (err) {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      console.log('Barcode detected:', data.codeResult.code);
      // You can handle the detected barcode here
    });

    return () => {
      Quagga.stop();
    };
  }, []);

  return <div id="barcode-scanner"><div id="">
    <p>fjierjfiof</p>
    </div>;</div>;
   
}

export default BarcodeScanner;
