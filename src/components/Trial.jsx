import React from 'react'

const Trial = (props) => {
    
    
    function CardList (props) {

    const content = [

        {
            name: 'MR a',
            image: './dowload(1).png',
            email: 'mr.whiskaz.meo',
        },

        {
            name: 'MR Amoono',
            image: '.download.png',
            email: 'mr.whiskaz.meow',
        },

        {
            name: 'MR a',
            image: '.images.png',
            email: 'mr.whiskaz.meow',
        },

    ]

return(
    <div className="card-list">
    {
       content.map((card, index =>{
            <Trial key={index} {...card} />
        }))
    }
  </div>

)

}
    return (


        <div>

            <div className="contacts">

                <div className="contact-card">
                    <img src={props.image} />
                    <h3>{props.name}</h3>
                    <div className="info-group">

                        <p>(212) 555-1234</p>
                    </div>
                    <div className="info-group">

                        <p>{props.email}</p>
                    </div>
                </div>


            </div>

        </div>
    )
}








export default Trial






