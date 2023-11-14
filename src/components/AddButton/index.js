

export default function AddButton(){
    return(

              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: '1300px'
              }}>
                <p>add</p>
                <button style={{
                    width: '30px',
                    height: '30px',
                    fontSize: '20px',
                    borderRadius: '10px'
                }}>+</button>
              </div>

    )
}