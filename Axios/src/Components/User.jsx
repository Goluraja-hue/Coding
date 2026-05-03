
const User = (res) => {


    const clr = Math.floor(Math.random() * 256)
    const clr1 = Math.floor(Math.random() * 256)
    const clr2 = Math.floor(Math.random() * 256)
    return (
    <div style={{backgroundColor:`rgb(${clr},${clr1},${clr2})`}} className="user-card">
        <img src={res.elem.download_url} alt="" />
        <h3>{res.elem.author}</h3>
    </div>
  )
}

export default User