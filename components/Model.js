import { useContext } from 'react';
import { ModelDispatchContext } from './Layout';

const Model = ({ isModelVisible, modelContent }) => {
  const modelDispatch = useContext(ModelDispatchContext);
  return (
      <div
        className={`flex justify-center items-center ${
          isModelVisible ? 'model-transition-visible cursor-pointer' : 'model-transition-invisible cursor-zoom-in '
        } fixed top-0 left-0 z-20 w-screen h-screen bg-gray-700/50 backdrop-blur-md overflow-scroll`}
        onClick={(e) => modelDispatch({ type: 'CLEAR_MODEL' })}>
        {modelContent}
      </div>
  );
};

export default Model;
