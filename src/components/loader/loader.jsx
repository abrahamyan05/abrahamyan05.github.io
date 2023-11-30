import { RotatingLines } from 'react-loader-spinner';
import './loader.scss';


const LoaderSpinner = () => {
    return (
        <div className="loaderContainer">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="100"
                visible={true}
            />
        </div>
    )
}

export default LoaderSpinner;