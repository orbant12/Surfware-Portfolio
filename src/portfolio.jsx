import Editor from './components/ClippifyComponents/txtEditor/txtEditor';
import AiText from './components/ClippifyComponents/txtEditor/aiText';
import VideoFrame from './components/ClippifyComponents/videoFrame/videoFrame';
import TranscripterConvert from './components/ClippifyComponents/transcriptShow/transcripterConvert';
import StripePanel from './components/ClippifyComponents/Stripe/stripePanel';

import LexicalJPG from './assets/Lexical.jpeg';
import openAiJPG from './assets/openAi.jpeg';
import FFMPEGjpg from './assets/FFMPEG.png';
import SpeechToTextjpg from './assets/SpeechToText.png';
import Stripejpg from './assets/stripeIcon.png';
import FirebaseIcon from './assets/firebaseIcon.png';
import CORSIcon from './assets/CORS4.jpeg';
import CSSicon from './assets/CSS.png';
import HoverIcon from './assets/hover.png';
import EditIcon from './assets/edit.png';
import WatchLaterIcon from './assets/wlater.png';
import SEOIcon from './assets/seo.jpeg';
import CommentIcon from './assets/comment.jpeg';
import RichTextEditorIcon from './assets/richTE.png';

export const ClippifyData = {
    title: "Clippify",
    youtube: "https://www.youtube.com/embed/xNRJwmlRBNU?si=f7WTiSJIPG9jg3Ad",
    navigation: "https://clippify.net",
    list: [
        "Clip trimming, saving, storing",
        "Machine Learning Model for transcript extraction",
        "Built-in OpenAi API - Fine Tuned",
        "Rich Text Editor",
        "Smooth Subscription and Payment with Stripe API",
        "Firebase Backend"
    ],
    expertise: [
    {
        logo: LexicalJPG,
        title: "Lexical Rich Text Editor",
        text: [
            "• Serialization & Deserialization (HTML, JSON)",
            "• Nodes (Transforms, Overrides)",
            "• Listeners",
            "• Custom Plugins (CODE, MARKDOWN, LINK, LIST)",
        ],
        show: () => <Editor />
      },
      {
        logo: openAiJPG,
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <AiText />
      },
      {
        logo: FFMPEGjpg,
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <VideoFrame />
      },
      {
        logo: SpeechToTextjpg,
        title: "Machine Learning Model",
        text: [
            "Video type manipulation (blob, data:url, base64)",
            "FFmpeg syntax for video manipulation",
            "Timeline Bar from thumbnails"
        ],
        show: () => <TranscripterConvert />
      },
      {
        logo: Stripejpg,
        title: "Stripe Payment",
        text: [
            "Video type manipulation (blob, data:url, base64)",
            "FFmpeg syntax for video manipulation",
            "Timeline Bar from thumbnails"
        ],
        show: () => <StripePanel />
      },
      {
        logo: FirebaseIcon,
        title: "User Authentication",
        text: [
            "Video type manipulation (blob, data:url, base64)",
            "FFmpeg syntax for video manipulation",
            "Timeline Bar from thumbnails"
        ],
        show: () => <StripePanel />
      },
      {
        logo: CORSIcon,
        title: "Cross Origin Isolation",
        text: [
            "• Proxy Server",
            "• CORS Policy",
            "• Header Manipulation",
            "• Limitations of Isolation"
        ],
        show: () => <StripePanel />
      },
    ]
};

export const LupodyData = {
    title: "Lupody",
    youtube: "https://www.youtube.com/embed/xNRJwmlRBNU?si=f7WTiSJIPG9jg3Ad",
    navigation: "https://clippify.net",
    list: [
      "Social Media Platform for Video Sharing",
      "Complex Backend Architecture",
      "Clip trimming, saving, storing",
      "Rich Text Editor",
      "Complex UI and UX",
      "Firebase Backend"
    ],
    expertise: [
      {
        logo: CSSicon,
        title: "Complex CSS",
        text: [
            "• Serialization & Deserialization (HTML, JSON)",
            "• Nodes (Transforms, Overrides)",
            "• Listeners",
            "• Custom Plugins (CODE, MARKDOWN, LINK, LIST)",
        ],
        show: () => <Editor />
      },
      {
        logo: LexicalJPG,
        title: "Lexical Rich Text Editor",
        text: [
            "• Serialization & Deserialization (HTML, JSON)",
            "• Nodes (Transforms, Overrides)",
            "• Listeners",
            "• Custom Plugins (CODE, MARKDOWN, LINK, LIST)",
        ],
        show: () => <Editor />
      },
      {
        logo: FFMPEGjpg,
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <VideoFrame />
      },
      {
        logo:  HoverIcon,
        title: "Video Hover Effect",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: EditIcon,
        title: "Realtime Video Details Editing",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: WatchLaterIcon,
        title: "Whatch Later with Custom Playlist",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: SEOIcon,
        title: "Search Engine Optimization (SEO)",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: CommentIcon,
        title: "Commenting System with Realtime Updates",
        text: [
          "Replying to comments",
          "",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: FirebaseIcon,
        title: "Complex Firestore Queries",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: FirebaseIcon,
        title: "Firebase Authentication",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: FirebaseIcon,
        title: "Storgae Management with Firebase",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },

    ]
};

export const LupodyMobileData = {
    title: "LupodyMobile",
    youtube: "https://www.youtube.com/embed/xNRJwmlRBNU?si=f7WTiSJIPG9jg3Ad",
    navigation: "https://clippify.net",
    list: [
      "Clip trimming, saving, storing",
      "Machine Learning Model for transcript extraction",
      "Built in OpenAi API - Fine Tuned",
      "Rich Text Editor",
      "Smooth Subscription and Payment with Stripe API",
      "Firebase Backend"
    ],
    expertise: [
      {
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Expo Ejection (EAS)",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: FFMPEGjpg,
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <VideoFrame />
      },
      {
        logo: RichTextEditorIcon,
        title: "Native Rich Text Editor",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <VideoFrame />
      },
      {
        logo: openAiJPG,
        title: "Mobile Ai Chatbot",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <VideoFrame />
      },
    ]
};

export const ClippifyMobileData = {
    title: "ClippifyMobile",
    youtube: "https://www.youtube.com/embed/xNRJwmlRBNU?si=f7WTiSJIPG9jg3Ad",
    navigation: "https://clippify.net",
    list: [
      "Clip trimming, saving, storing",
      "Machine Learning Model for transcript extraction",
      "Built in OpenAi API - Fine Tuned",
      "Rich Text Editor",
      "Smooth Subscription and Payment with Stripe API",
      "Firebase Backend"
    ],
    expertise: [
      {
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Machine Learning Model",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      }
    ]
};
