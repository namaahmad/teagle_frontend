

import { getI18n } from "@/dictionaries/server";
import { ApiServices } from "../../api/ApiServices";
import { BaseResponse, NewsDetailDto, SiteNewsDetail } from "@/dto";
import CommentRegister from "./CommentRegister";
import Link from '@/components/LinkComponent';
import SidebarNews from "@/components/SidebarNews";




interface IProps {
  params: Promise<{ locale: string, id: any }>
}

export default async function BlogPage(props: IProps) {
  const param = await props.params;
  const translate = await getI18n()
  var data: BaseResponse<SiteNewsDetail> = {} as any
  var res = await ApiServices.site.getNewsDetail(param.id, param.locale)
  if (res.status == 200) {
    data = await res.json()
  }


  return (

    <section className="blog_area single-post-area area-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 posts-list">
            <div className="single-post">
              <div className="feature-img">
                <img className="img-fluid" src={data.result.appIconSrc} alt="" />
              </div>

              <div className="blog_details">
                <h2>{param.locale == "fa" ? data.result.FaName : data.result.EnName}</h2>
                <ul className="blog-info-link mt-3 mb-4">
                  <li><a href="#"><i className="fa fa-user"></i>  {data.result.Writer?.WriterName}</a></li>
                  <li><a href="#"><i className="fa fa-comments"></i> {data.result.comments?.length ?? 0} {translate("Comments")}</a></li>
                </ul>
                <p className="excert" dangerouslySetInnerHTML={{ __html: param.locale == "fa" ? data.result.FaContent : data.result.EnContent }}>

                </p>

                {/* <div className="quote-wrapper">
                  <div className="quotes">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                  </div>
                </div> */}


              </div>
            </div>
            <div className="navigation-top">
              <div className="d-sm-flex justify-content-between text-center">
                <p className="like-info"><span className="align-middle"><i className="fa fa-heart"></i></span> {translate("likeComment")}</p>
                <div className="col-sm-4 text-center my-2 my-sm-0">
                  <p className="comment-count"><span className="align-middle"><i className="fa fa-comment"></i></span> {data.result.comments?.length ?? 0} {translate("Comments")}</p>
                </div>
                <ul className="social-icons">
                  <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>

              <div className="navigation-area">
                <div className="row">
                  {data.result.PrevNews && data.result.PrevNews.id > 0 &&
                    <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                      <div className="thumb">
                        <Link href={`/news/${data.result.PrevNews?.id}`}>
                          <img className="img-fluid" src={data.result.PrevNews?.ImageSrc} style={{ maxWidth: "60px", maxHeight: "60px" }} />
                        </Link>
                      </div>
                      <div className="arrow">
                        <a href="#">
                          <span className="lnr text-white lnr-arrow-left"></span>
                        </a>
                      </div>
                      <div className="detials" style={{ textAlign: "right" }}>
                        <p>{translate("PrevPost")}</p>
                        <Link href={`/news/${data.result.PrevNews?.id}`}>
                          <h4>{data.result.PrevNews?.Title}</h4>
                        </Link>
                      </div>
                    </div>
                  }
                  {data.result.NextNews && data.result.NextNews.id > 0 &&
                    <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                      <div className="detials">
                        <p>{translate("NextPost")}</p>
                        <Link href={`/news/${data.result.NextNews?.id}`}>
                          <h4>{data.result.NextNews?.Title}</h4>
                        </Link>
                      </div>
                      <div className="arrow">
                        <a href="#">
                          <span className="lnr text-white lnr-arrow-right"></span>
                        </a>
                      </div>
                      <div className="thumb">
                        <Link href={`/news/${data.result.NextNews?.id}`}>
                          <img className="img-fluid" src={data.result.NextNews?.ImageSrc} style={{ maxWidth: "60px", maxHeight: "60px" }} />
                        </Link>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>


            <div className="blog-author">
              <div className="media align-items-center">
                <img src="/images/user.jpg" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>{data.result.Writer?.WriterName}</h4>
                  </a>
                  <p>{data.result.Writer?.WriterDescription}</p>
                </div>
              </div>
            </div>

            <div className="comments-area">
              <h4>{data.result.comments?.length ?? 0} {translate("Comments")}</h4>
              {data.result.comments?.map((comment, index) => (
                <div key={index} className="comment-list">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex">
                      <div className="thumb">
                        <img src="/images/user.jpg" alt="" />
                      </div>
                      <div className="desc">
                        <p className="comment">
                          {comment.Comment}
                        </p>

                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <h5>
                              <a href="#">{comment.Name}</a>
                            </h5>
                            <p className="date">{comment.Date} </p>
                          </div>

                          <div className="reply-btn">
                            <a href="#" className="btn-reply text-uppercase">{translate("reply")}</a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}


            </div>
            <CommentRegister NewsId={param.id} />
          </div>
          <SidebarNews NewsCategories={data.result.NewsCategories} NewsRecent={data.result.NewsRecent} tags={data.result.tags} baseUrl="/news" />
        </div>
      </div>
    </section>

  )
}
