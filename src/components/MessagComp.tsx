import React from 'react'
import { IMesseng } from '../types/types'

const MessagComp = ({ messeng }: IMesseng) => {
  return (
    <div>
      {
        <div>
                  <img src={messeng.img} alt="" className='rounded-full' />
                  <p>{messeng.nameUser}</p>
        </div>
      }
    </div>
  );
};

export default MessagComp