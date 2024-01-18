// @ts-ignore
import webinar from "../../../assets/webinar.jpg"
// @ts-ignore
import profilePage from "../../../assets/profilePage.jpg"
// @ts-ignore
import teacherENG from "../../../assets/teacherENG.jpg"


export const NAV_ITEMS: NAV_ITEMSI[] = [
    {
        name: "introduction",
        isClicked: true,
    },
    {
        name: "profile",
        isClicked: false,
    },
    {
        name: "faqs",
        isClicked: false
    }
]

export interface NAV_ITEMSI {
    name: string;
    isClicked: boolean;
}

export interface PageI {
    image: string;
    title: string;
    text: string;
    isReversed: boolean
}

export const IntroductionPage: PageI= {
    image: webinar,
    title: "title",
    text: "We want you to be happy with our Tween Agency services. Our digital agency is ready to serve you to grow your business in a healthy way.\n" +
        "\n" +
        "                    This is Bootstrap 5 HTML template for your website provided by Tooplate. You can download, edit and use this layout for your company website.\n" +
        "\n" +
        "                    Image credits go to FreePik and Unsplash for images used in this template. We really appreciate these stock image websites for providing free photos to everyone.",
    isReversed: false
}

export const ProfilePage: PageI = {
    image: profilePage,
    title: "Marie Smarty, CEO",
    text: "Our priority is your happiness working together with us. We guarantee you the best service quality from us. Feel free to talk to us via email, twitter, or linkedin.",
    isReversed: true
}

export const FAQPage: PageI= {
    image: teacherENG,
    title: "title",
    text: "We want you to be happy with our Tween Agency services. Our digital agency is ready to serve you to grow your business in a healthy way.\n" +
        "\n" +
        "                    This is Bootstrap 5 HTML template for your website provided by Tooplate. You can download, edit and use this layout for your company website.\n" +
        "\n" +
        "                    Image credits go to FreePik and Unsplash for images used in this template. We really appreciate these stock image websites for providing free photos to everyone.",
    isReversed: false
}
