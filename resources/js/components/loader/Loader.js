import Loader from "react-loader-spinner";

function BongshalLoader() {
  return (
    <div style={{ 
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      left: '0',
      top: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
     }}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  );
}

export default BongshalLoader;