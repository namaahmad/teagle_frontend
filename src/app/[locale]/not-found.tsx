import { getI18n } from '@/dictionaries/server';
import Link from '@/components/LinkComponent';
interface IProps {
  params: Promise<{ locale: string }>
}
export default async function NotFound(props: IProps) {

  const translate = await getI18n()
  return (
    <div style={{display:"flex",justifyContent:"center",paddingTop:"100px",paddingBottom:"100px",flexDirection:"column"}}>
      <h2>{translate("notFound")}</h2>
      <p>{translate("notFoundError")}</p>
      <Link href="/">{translate("home")}</Link>
    </div>
  )
}