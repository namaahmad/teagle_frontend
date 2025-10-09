'use client'

import { toast } from "react-toastify"
import { ApiServices } from "../../api/ApiServices"
import { BaseResponse } from "@/dto"
import { FormEvent } from "react"
import { useI18n } from "@/dictionaries/client"

interface IProps {
    NewsId: number
}

export default function BlogPage(props: IProps) {
    const translate = useI18n()
    async function onSubmitComment(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await ApiServices.site.addBlogComment({
            NewsId: Number(props.NewsId), Name: formData.get("Name"), Email: formData.get("Email"),
            Website: formData.get("Website"), Comment: formData.get("Comment")
        })

        // Handle response if necessary
        const data: BaseResponse<any> = await response.json()
        if (data && data.statusCode == 200) {
            toast.success(translate("msgSuccessOperation"))
        }
        else {
            toast.error(translate("msgErrorOperation"))
        }
    }
    return (
        <div className="comment-form">
            <h4>{translate("writeComment")}</h4>
            <form className="form-contact comment_form" onSubmit={onSubmitComment} id="commentForm">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <textarea className="form-control w-100" required name="Comment" id="comment" cols={30} rows={9} placeholder={translate("writeComment")}></textarea>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input className="form-control" required name="Name" id="name" type="text" placeholder={translate("name")} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input className="form-control" required name="Email" id="email" type="email" placeholder={translate("email")} />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="form-group">
                            <input className="form-control" name="Website" id="website" type="text" placeholder={translate("website")} />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="button button-contactForm">{translate("sendMsg")}</button>
                </div>
            </form>
        </div>
    )
}