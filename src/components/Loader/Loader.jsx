import { ThreeDots } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

function Loader({
  config: { height = '24', width = '24', color = 'inherit' },
}) {
  return (
    <LoaderBox>
      <ThreeDots height={height} width={width} color={color} />
    </LoaderBox>
  );
}

export default Loader;
