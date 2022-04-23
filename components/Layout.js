import { useReducer } from 'react';
import Footer from './Footer';
import Header from './Header';
import Model from './Model';
import React, {useEffect} from 'react';

const modelInitial = {
  isModelVisible: false,
  modelContent: null,
};

export const ModelDispatchContext = React.createContext();

function modelReducer(state, action) {
  switch (action.type) {
    case 'CLEAR_MODEL':
      return { isModelVisible: false, modelContent: null };
    case 'ADD_CONTENT':
      return { isModelVisible: true, modelContent: action.payload };
    default:
      throw new Error('[modelReducer]: action.type wrong!');
  }
}

const Layout = ({ children }) => {
  const [modelState, modelDispatch] = useReducer(modelReducer, modelInitial);

  
  return (
    <>
      <ModelDispatchContext.Provider value={modelDispatch}>
        {/* remove the strange blue color on mobile */}
        <div className='remove-tap-highlight'>
          <div
            className={`${
              modelState.isModelVisible ? 'overflow-hidden h-auto' : ''
            }`}>
            <Header />
            <div className=' flex justify-center text-rich-default'>
              <div className=' w-full md:w-[768px] p-4 pt-0 overflow-hidden'>
                {children}
              </div>
            </div>
            <Footer />
          </div>
          <Model {...modelState}></Model>
        </div>
      </ModelDispatchContext.Provider>
    </>
  );
};

export default Layout;
