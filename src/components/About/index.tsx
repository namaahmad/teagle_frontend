import React from 'react'
import Image from 'next/image'
import { AbountComponentDto } from '@/dto'

interface IProps {
  data?: AbountComponentDto
}


const About = (props: IProps) => {
  
  return (
    <section className="about-area area-padding">
      <div className="container">
        <div className="row align-items-center" style={{direction:props.data?.direction=="left"?"ltr":"rtl"}}>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="about-img">
              <Image width={555} height={485} src={props.data?.ImgBackgroundSrc ?? ""} alt="" />
            </div>
          </div>
          <div className="col-lg-6"  >
            <div className="about-content">
              <h4>
                {props.data?.title}
              </h4>
              <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: props.data?.text ?? "" }}>

              </p>

              <a className="main_btn" href={props.data?.link.address}>
                {props.data?.link.title}
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About