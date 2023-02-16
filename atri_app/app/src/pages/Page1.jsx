import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex43Cb, useImage79Cb, useButton35Cb, useButton36Cb, useLink6Cb, useLink7Cb, useLink8Cb, useLink9Cb, useLink10Cb } from "../page-cbs/page1";
import "../page-css/page1.css";
import "../custom/page1";

export default function Page1() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex43Props = useStore((state)=>state["page1"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["page1"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Image79Props = useStore((state)=>state["page1"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["page1"]["Image79"]);
const Image79Cb = useImage79Cb()
const Button35Props = useStore((state)=>state["page1"]["Button35"]);
const Button35IoProps = useIoStore((state)=>state["page1"]["Button35"]);
const Button35Cb = useButton35Cb()
const Button36Props = useStore((state)=>state["page1"]["Button36"]);
const Button36IoProps = useIoStore((state)=>state["page1"]["Button36"]);
const Button36Cb = useButton36Cb()
const Link6Props = useStore((state)=>state["page1"]["Link6"]);
const Link6IoProps = useIoStore((state)=>state["page1"]["Link6"]);
const Link6Cb = useLink6Cb()
const Link7Props = useStore((state)=>state["page1"]["Link7"]);
const Link7IoProps = useIoStore((state)=>state["page1"]["Link7"]);
const Link7Cb = useLink7Cb()
const Link8Props = useStore((state)=>state["page1"]["Link8"]);
const Link8IoProps = useIoStore((state)=>state["page1"]["Link8"]);
const Link8Cb = useLink8Cb()
const Link9Props = useStore((state)=>state["page1"]["Link9"]);
const Link9IoProps = useIoStore((state)=>state["page1"]["Link9"]);
const Link9Cb = useLink9Cb()
const Link10Props = useStore((state)=>state["page1"]["Link10"]);
const Link10IoProps = useIoStore((state)=>state["page1"]["Link10"]);
const Link10Cb = useLink10Cb()

  return (<>
  <Flex1 className="p-page1 Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Image1 className="p-page1 Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
<Link1 className="p-page1 Link10 bpt" {...Link10Props} {...Link10Cb} {...Link10IoProps}/>
<Link1 className="p-page1 Link9 bpt" {...Link9Props} {...Link9Cb} {...Link9IoProps}/>
<Link1 className="p-page1 Link8 bpt" {...Link8Props} {...Link8Cb} {...Link8IoProps}/>
<Link1 className="p-page1 Link7 bpt" {...Link7Props} {...Link7Cb} {...Link7IoProps}/>
<Link1 className="p-page1 Link6 bpt" {...Link6Props} {...Link6Cb} {...Link6IoProps}/>
<Button1 className="p-page1 Button36 bpt" {...Button36Props} {...Button36Cb} {...Button36IoProps}/>
<Button1 className="p-page1 Button35 bpt" {...Button35Props} {...Button35Cb} {...Button35IoProps}/>
</Flex1>
  </>);
}
