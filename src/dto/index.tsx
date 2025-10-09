export interface BaseResponse<T> {
    statusCode: number,
    message: Array<string>,
    total: 0,
    page: number,
    perPage: number,
    result: T
}
export interface SiteSettingDto {
    siteSettingData: SitesettingDataDto
    siteMenuDtoData: Array<SiteMenuDto>
}
export interface SitesettingDataDto {
    address: string;
    phone: string;
    instagramAddress: string;
    facebookAddress: string;
    twitterAddress: string;
    skypeAddress: string;
    vimeoAddress: string;

}
export interface SiteMenuDto {
    id: number
    FaName: string
    EnName: string
    Name: string
    PageId: number
    Slug: string
    ChildMenu: Array<SiteMenuDto>
}

export interface HomeBannerDto {
    link: Link
    text: string
    title: string
    ImgBackground: number
    ImgBackgroundSrc: string
}

export interface Link {
    title: string
    address: string
}
export interface PageDataDto {
    PageDetail: PageDetailDto;
    Components: PageDataComponentDto[];
}

export interface PageDetailDto {
    Id: number;
    Title: string;
}

export interface PageDataComponentDto {
    ComponentType: number;
    ComponentName: string;
    ComponentContent: any;
}

export interface AbountComponentDto {
    link: Link
    text: string
    title: string
    ImgBackground: number
    ImgBackgroundSrc: string
    direction:string
}
export interface ServiceComponentDto {
    text: string
    title: string
    items: Array<ServiceItemDto>
}
export interface ServiceItemDto {
    text: string
    title: string
    ImgBackground: number
    ImgBackgroundSrc: string
}
export interface StatsComponentDto {
    text: string
    title: string
    ImgBackground: number
    ImgBackgroundSrc: string
    items: Array<StatsItemDto>
}
export interface StatsItemDto {
    text: string
    counter: number
}
export interface PortfolioComponentDto {
    text: string
    title: string
    items: Array<PortfolioItemDto>
}
export interface PortfolioItemDto {
    title: string
    items: Array<PortfolioItemLevel1Dto>
}
export interface PortfolioItemLevel1Dto {
    text: string
    link: Link
    ImgBackground: number
    ImgBackgroundSrc: string
}
export interface TestimonialsComponentDto {
    title: string
    text: string
    items: Array<TestimonialsItemDto>
}
export interface TestimonialsItemDto {
    title1: string
    title2: string
    text: string
    ImgBackground: number
    ImgBackgroundSrc: string
}
export interface HomeNewsComponentDto {
    title: string
    text: string
    items: Array<HomeNewsComponentItemDto>
}
export interface HomeNewsComponentItemDto {
    Id: number
    Writer: string
    Title: string
    ImgBackgroundSrc: string
    NewsCategory: string
    Date: string
}
export interface NewsDetailDto {
    Id: number
    Name: string
    FaName: string
    EnName: string
    FaContent: string
    EnContent: string
    CategoryId: number
    CategoryName: string
    appIconSrc: string
}
export interface SiteNewsDetail {
    Id: number
    Name: string
    FaName: string
    EnName: string
    FaContent: string
    EnContent: string
    CategoryId: number
    CategoryName: string
    appIconSrc: string
    tags?: string[];
    comments?: SiteNewsDetailComments[];
    NewsRecent?: SiteNewsDetailRecentNews[];
    NewsCategories?: SiteNewsCategory[];
    PrevNews?: SiteNewsDetailRecentNews;
    NextNews?: SiteNewsDetailRecentNews;
    Writer?:SiteNewsDetailWriter;
}

export interface SiteNewsDetailRecentNews {
    id: number;
    Title: string;
    Content: string;
    ImageSrc: string;
    Date:string;
}

export interface SiteNewsDetailWriter {
    WriterName: string;
    WriterImageSrc?: string;
    WriterDescription: string;
}

export interface SiteNewsDetailComments {
    Comment: string;
    Name: string;
    email: string;
    website?: string;
    Date:string
}

export interface SiteNewsCategory {
    Id: number;
    Title: string;
    CountNews: number;
}

export interface AddCommentNewsDto {
    newsId: number;
    comment: string;
    name: string;
    email: string;
    website?: string;
}

export interface SiteNewsItem {
    id: number;
    Name: string;
    categoryName: string;
    Content: string;
    WriterName: string;
    ImageSrc: string;
    CountComments: number;
    DateMonth: string;
    DateDay: string;
}
export interface SiteNewsList {
    SiteNews?: SiteNewsItem[];
    tags?: string[];
    NewsRecent?: SiteNewsDetailRecentNews[];
    NewsCategories?: SiteNewsCategory[];
    CountPage:number;
}
