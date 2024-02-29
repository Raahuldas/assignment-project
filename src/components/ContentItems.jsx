import React from 'react'
import ContentItem from './ContentItem'
import ContentItem2 from './ContentItem2';

function ContentItems() {
    const items= [{
        id:1,
        imgName:"Builder 1",
        bestChoice: true,
        title: "WixPro 72-inch Responsive Website Builder",
        disc: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        highlight: "[what You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets, and apps, and detailed step-by-step guides.",
        feedback:{
            rating: 9.8,
            review: "Exeptional",
            stars:5,
        }
    },
    {
        id:2,
        imgName:"Builder",
        bestChoice: true,
        title: "SiteCraft 68-inch Ultimate Web Design Studio",
        disc: "Advanced Site Creation Toolkit, Intutive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platform(Green/White)",
        highlight: "[What You Get]: Gain access to the SiteCraft design studio featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations",
        feedback:{
            rating: 9.5,
            review: "Excellent",
            stars:5,
        }
    },
    {
        id:3,
        imgName:"Builder 1",
        bestChoice: false,
        title: "WixPro 72-inch Responsive Website Builder",
        disc: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        highlight: "[what You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets, and apps, and detailed step-by-step guides.",
        feedback:{
            rating: 9.3,
            review: "Exeptional",
            stars:5,
        },
    },
];

  return (<>
    {items.map((item)=> {return <ContentItem key={item.id} item={item}/>})}
    <ContentItem2/>

  </>
  )
}

export default ContentItems