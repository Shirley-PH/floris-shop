import React from 'react'


export default function Body() {
    /* This component renders the body part in text, the first paragraph1, image-text and paragraph2.*/
  return (
    <div>
    <div className='container'>
    {/*The first text */}
    <div className='first-paragraf'>
    <h3 className='brand-color'>
        Proin rhoncus diam ante. Maecenas maximus mauris et ex posuere porttitor
        </h3>
        <p>
        Duis sed egestas justo, ac faucibus est. Sed ornare id felis in accumsan. Nunc eu diam nec nunc pellentesque laoreet. Duis hendrerit in elit vel pretium. Integer leo neque, dapibus id tempus eget, tincidunt accumsan tellus.
        Quisque turpis mi, suscipit eu dui efficitur, viverra facilisis mauris.
        </p>
        
        <p>
        In ante tortor, mollis sit amet quam eget, aliquam ultricies odio. Duis pellentesque ullamcorper dolor eget rhoncus. Praesent dignissim, purus eu auctor aliquet, augue quam semper lorem, vel maximus enim justo sed risus. Phasellus ac erat arcu. 
        Integer quis tellus ultrices, laoreet leo sit amet, faucibus sem.
        </p>
    </div>
        
    </div>
    {/* The wrap text */}
<div className='new-section'>
    <div className='container flex flex-wrap'>
    
        <div className='box-content p-6  md:w-32 lg:w-48  text-content'>
        <p>
        Donec blandit molestie felis eu sagittis. Donec egestas lacus in tortor aliquet sodales. Curabitur laoreet vestibulum justo at mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis sapien lacinia lectus accumsan cursus. Ut orci mauris, scelerisque cursus velit a, condimentum maximus quam. Vivamus aliquam nibh non nulla congue, congue dictum mi vestibulum. Phasellus ullamcorper metus id pretium condimentum.
        
        <br/>
        <br/>
        Sed sodales, ipsum in lobortis mattis, odio augue tempus massa, a congue odio augue quis ex.
        </p>

        </div>
        <div className='box-content px-3 py-3 md:w-32 lg:w-48 '>
        <img  className=" box-content object-contain " src="https://cdn.pixabay.com/photo/2018/01/18/17/50/purchase-3090848_960_720.jpg" alt='women-flower'/>
        </div>
        
        <div className='box-content px-3 py-3 md:w-32 lg:w-48'>
        <img className="box-content md:w-80 lg:w-125 object-contain right-position " src="https://cdn.pixabay.com/photo/2018/07/17/21/49/flower-bouquet-3545096_960_720.jpg" alt='olive-flower'/>
        </div>

        <div className='box-content p-6  md:w-80 lg:w-125 text-content'>
        <p>
        Donec blandit molestie felis eu sagittis. Donec egestas lacus in tortor aliquet sodales. Curabitur laoreet vestibulum justo at mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis sapien lacinia lectus accumsan cursus. Ut orci mauris, scelerisque cursus velit a, condimentum maximus quam. Vivamus aliquam nibh non nulla congue, congue dictum mi vestibulum. Phasellus ullamcorper metus id pretium condimentum.
     Sed sodales, ipsum in lobortis mattis, odio augue tempus massa, a congue odio augue quis ex.
        </p>
    

        </div>
        

    </div>

</div>

<div className='container'>
    {/*The second text */}
        <h3 className='brand-color first-paragraf'>
        Proin rhoncus diam ante. Maecenas maximus mauris et ex posuere porttitor
        </h3>
        <p>
        Duis sed egestas justo, ac faucibus est. Sed ornare id felis in accumsan. Nunc eu diam nec nunc pellentesque laoreet. Duis hendrerit in elit vel pretium. Integer leo neque, dapibus id tempus eget, tincidunt accumsan tellus.
        Quisque turpis mi, suscipit eu dui efficitur, viverra facilisis mauris.
        </p>
        
        <p>
        In ante tortor, mollis sit amet quam eget, aliquam ultricies odio. Duis pellentesque ullamcorper dolor eget rhoncus. Praesent dignissim, purus eu auctor aliquet, augue quam semper lorem, vel maximus enim justo sed risus. Phasellus ac erat arcu. 
        Integer quis tellus ultrices, laoreet leo sit amet, faucibus sem.
        </p>
        <div className='button color-orange rounded'>MORE INFO</div>
    </div>
    
    </div>
  )
}
