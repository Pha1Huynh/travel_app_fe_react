import ReactLoading from 'react-loading';
import React from 'react';
import { ILoading } from '../../interfaces/components/loading.interface';
import './Loading.scss';
function Loading({ isShow }: ILoading) {
  return (
    <>
      {isShow && (
        <div className="loading-container">
          <ReactLoading type={'spin'} color={'#fff'} height={20} width={20} />
        </div>
      )}
    </>
  );
}

export default Loading;
