import React from 'react'
import { Button } from 'react-bootstrap'

export default function Body() {
  return (
    <div>
    <div className='container'>
    {/*The first text */}
        <h1>
        Proin rhoncus diam ante. Maecenas maximus mauris et ex posuere porttitor
        </h1>
        <p>
        Duis sed egestas justo, ac faucibus est. Sed ornare id felis in accumsan. Nunc eu diam nec nunc pellentesque laoreet. Duis hendrerit in elit vel pretium. Integer leo neque, dapibus id tempus eget, tincidunt accumsan tellus.
        Quisque turpis mi, suscipit eu dui efficitur, viverra facilisis mauris.
        </p>
        
        <p>
        In ante tortor, mollis sit amet quam eget, aliquam ultricies odio. Duis pellentesque ullamcorper dolor eget rhoncus. Praesent dignissim, purus eu auctor aliquet, augue quam semper lorem, vel maximus enim justo sed risus. Phasellus ac erat arcu. 
        Integer quis tellus ultrices, laoreet leo sit amet, faucibus sem.
        </p>
    </div>
    {/* The wrap text */}
<div className='new-section'>
    <div className='main-group-text'>
        <div className='box-content text-content'>
        <p>
        Donec blandit molestie felis eu sagittis. Donec egestas lacus in tortor aliquet sodales. Curabitur laoreet vestibulum justo at mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis sapien lacinia lectus accumsan cursus. Ut orci mauris, scelerisque cursus velit a, condimentum maximus quam. Vivamus aliquam nibh non nulla congue, congue dictum mi vestibulum. Phasellus ullamcorper metus id pretium condimentum.
        
        <br/>
        <br/>
        Sed sodales, ipsum in lobortis mattis, odio augue tempus massa, a congue odio augue quis ex.
        </p>

        </div>
        <div className='box-content'>
        <img  className="rounded img-group-text" src="https://cdn.pixabay.com/photo/2021/11/14/18/30/woman-6795426_960_720.jpg" alt='women-flower'/>
        </div>
        
        <div className='box-content'>

        <img className="rounded img-group-text right-position" src="https://cdn.pixabay.com/photo/2018/01/28/21/07/cherry-3114714_960_720.jpg" alt='olive-flower'/>
        </div>
        <div className='box-content text-content'>
        <p>
        Donec blandit molestie felis eu sagittis. Donec egestas lacus in tortor aliquet sodales. Curabitur laoreet vestibulum justo at mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis sapien lacinia lectus accumsan cursus. Ut orci mauris, scelerisque cursus velit a, condimentum maximus quam. Vivamus aliquam nibh non nulla congue, congue dictum mi vestibulum. Phasellus ullamcorper metus id pretium condimentum.
     Sed sodales, ipsum in lobortis mattis, odio augue tempus massa, a congue odio augue quis ex.
        </p>
    

        </div>
        

    </div>

</div>

<div className='container'>
    {/*The second text */}
        <h1>
        Proin rhoncus diam ante. Maecenas maximus mauris et ex posuere porttitor
        </h1>
        <p>
        Duis sed egestas justo, ac faucibus est. Sed ornare id felis in accumsan. Nunc eu diam nec nunc pellentesque laoreet. Duis hendrerit in elit vel pretium. Integer leo neque, dapibus id tempus eget, tincidunt accumsan tellus.
        Quisque turpis mi, suscipit eu dui efficitur, viverra facilisis mauris.
        </p>
        
        <p>
        In ante tortor, mollis sit amet quam eget, aliquam ultricies odio. Duis pellentesque ullamcorper dolor eget rhoncus. Praesent dignissim, purus eu auctor aliquet, augue quam semper lorem, vel maximus enim justo sed risus. Phasellus ac erat arcu. 
        Integer quis tellus ultrices, laoreet leo sit amet, faucibus sem.
        </p>
        <Button variety="secondary">More info here</Button>
    </div>
    
    </div>
  )
}
