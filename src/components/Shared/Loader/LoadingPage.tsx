import { ScaleLoader } from 'react-spinners'

const LoadingPage = () => {
  return (
    <div
      className='
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
    >
      <ScaleLoader height={100} width={16} color='#800ede' />
    </div>
  )
}

export default LoadingPage;
