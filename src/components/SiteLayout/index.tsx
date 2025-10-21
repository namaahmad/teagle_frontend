"use server";
import { UserProvider } from "@/context/UserContext";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Provider } from "../provider";
import { BaseResponse, SiteSettingDto } from "@/dto";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface IProps {
    children: React.ReactNode
    local: string
    siteData?: SiteSettingDto
}

function SiteLayout(props: IProps) {
    const user = null;

    return (
        <>
            <ToastContainer />
            <Provider locale={props.local} >

                <UserProvider user={user}>
                    <Header data={props.siteData} />

                    {props.children}
                    <Footer />
                </UserProvider>
            </Provider>
        </>

    );
}

export default SiteLayout
