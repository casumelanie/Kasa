const Banner = ({ cover, titleVisible }) => {
  return (
    <div className="banner-container">
      {titleVisible ? (
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      ) : null}
      <img className="banner-img" src={cover} alt="banner"></img>
    </div>
  )
}

export default Banner
