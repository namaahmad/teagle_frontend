import { BaseResponse, SiteNewsList } from "@/dto";
import { ApiServices } from "../api/ApiServices";
import { getI18n } from "@/dictionaries/server";
import Link from '@/components/LinkComponent';
import SidebarNews from "@/components/SidebarNews";


interface IProps {
  params: Promise<{ locale: string, searchParams?: any }>
  searchParams: Promise<{ cat?: string, page?: any, perPage?: any, query?: any }>
}

export default async function BlogPage(props: IProps) {
  const param = await props.params;
  const searchParams = await props.searchParams;
  var page = 1
  var perPage = 10
  var categoryId = null
  if (searchParams.page) {
    page = Number(searchParams.page)
  }
  if (searchParams.perPage) {
    perPage = Number(searchParams.perPage)
  }
  if (searchParams.cat) {
    categoryId = Number(searchParams.cat)
  }
  const translate = await getI18n()
  var data: BaseResponse<SiteNewsList> = {} as any
  var res = await ApiServices.site.getBlog(param.locale, page, perPage, categoryId, searchParams.query)
  if (res.status == 200) {
    data = await res.json()
  }
  return (

    <section className="blog_area area-padding">

      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="blog_left_sidebar">
              <h2>{translate("blog")}</h2>
              <br />
              {data.result.SiteNews?.map((news, index) => (
                <article key={index} className="blog_item">
                  <div className="blog_item_img">
                    <img className="card-img rounded-0" src={news.ImageSrc} alt="" />
                    <Link href={`/blog/${news.id}`} className="blog_item_date">
                      <h3>{news.DateDay}</h3>
                      <p>{news.DateMonth}</p>
                    </Link>
                  </div>

                  <div className="blog_details">
                    <Link className="d-inline-block" href={`/blog/${news.id}`}>
                      <h2>{news.Name}</h2>
                    </Link>
                    <p dangerouslySetInnerHTML={{ __html: news.Content }}>
                    </p>
                    <ul className="blog-info-link">
                      <li><Link href={`/blog/${news.id}`}><i className="fa fa-user"></i> {news.WriterName}</Link></li>
                      <li><Link href={`/blog/${news.id}`}><i className="fa fa-comments"></i> {news.CountComments} {translate("Comments")}</Link></li>
                    </ul>
                  </div>
                </article>
              ))}




              {(data.result.SiteNews?.length ?? 0) > 0 &&
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    {(page - 1) > 0 && <li className="page-item">
                      <Link href={`/blog?page=${page - 1}&perPage=${perPage}`} className="page-link" aria-label="Previous">
                        <i className="ti-angle-left"></i>
                      </Link>
                    </li>
                    }
                    <li className={`page-item active`}>
                      <a href={`/blog?page=${page}&perPage=${perPage}`} className="page-link">{page}</a>
                    </li>
                    {data.result.CountPage >= (page + 1) && <li className="page-item ">
                      <Link href={`/blog?page=${page + 1}&perPage=${perPage}`} className="page-link">{page + 1}</Link>
                    </li>
                    }
                    {data.result.CountPage > (page + 2) && <li className="page-item">
                      <Link href={`/blog?page=${page + 2}&perPage=${perPage}`} className="page-link" aria-label="Next">
                        <i className="ti-angle-right"></i>
                      </Link>
                    </li>
                    }
                  </ul>
                </nav>
              }
              {(data.result.SiteNews?.length ?? 0) == 0 &&
                <p className="dontAnyNews">
                  {translate("dontAnyBlog")}
                </p>
              }
            </div>
          </div>
          <SidebarNews NewsCategories={data.result.NewsCategories} NewsRecent={data.result.NewsRecent} tags={data.result.tags} baseUrl="/blog" />
        </div>
      </div>
    </section>

  )
}
